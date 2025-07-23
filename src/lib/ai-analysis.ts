/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export interface ScreeningData {
  name: string;
  watchlistMatches: any[];
  newsArticles: any[];
  wikipediaData: any;
  entityType: string;
  nationality?: string;
  dateOfBirth?: string;
}

export interface AIAnalysisResult {
  riskScore: number;
  riskLevel: "LOW" | "MEDIUM" | "HIGH";
  summary: string;
  detailedAnalysis: string;
  riskFactors: string[];
  recommendations: string[];
}

export async function performAIAnalysis(
  data: ScreeningData
): Promise<AIAnalysisResult> {
  // Check if OpenAI is configured
  if (!process.env.OPENAI_API_KEY) {
    console.warn("OpenAI not configured, using fallback analysis");
    return getFallbackAnalysis(data);
  }

  try {
    const prompt = `
You are an expert KYC/AML compliance analyst. Analyze the following screening data and provide a comprehensive risk assessment.

SUBJECT INFORMATION:
- Name: ${data.name}
- Entity Type: ${data.entityType}
- Nationality: ${data.nationality || "Unknown"}
- Date of Birth: ${data.dateOfBirth || "Unknown"}

WATCHLIST MATCHES:
${data.watchlistMatches
  .map(
    (match) => `
- Source: ${match.source}
- Match: ${match.name} (${match.matchPercentage}% match)
- Risk Level: ${match.riskLevel}
- Details: ${JSON.stringify(match.details)}
`
  )
  .join("\n")}

NEWS ARTICLES:
${data.newsArticles
  .map(
    (article) => `
- Title: ${article.title}
- Source: ${article.source}
- Snippet: ${article.snippet}
- Published: ${article.publishedDate}
`
  )
  .join("\n")}

WIKIPEDIA DATA:
${
  data.wikipediaData
    ? `
- Title: ${data.wikipediaData.title}
- Extract: ${data.wikipediaData.extract}
`
    : "No Wikipedia data found"
}

Please provide:
1. A risk score from 0-100
2. A risk level (LOW: 0-30, MEDIUM: 31-70, HIGH: 71-100)
3. A brief summary (2-3 sentences)
4. A detailed analysis (1-2 paragraphs)
5. Key risk factors (bullet points)
6. Recommendations for compliance officers

Format your response as JSON with the following structure:
{
  "riskScore": number,
  "riskLevel": "LOW" | "MEDIUM" | "HIGH",
  "summary": "string",
  "detailedAnalysis": "string",
  "riskFactors": ["string"],
  "recommendations": ["string"]
}
`;

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt,
      temperature: 0.3, // Lower temperature for more consistent analysis
    });

    // Parse the JSON response
    const analysis = JSON.parse(text);

    // Validate the response structure
    if (!analysis.riskScore || !analysis.riskLevel || !analysis.summary) {
      throw new Error("Invalid AI response structure");
    }

    return analysis;
  } catch (error) {
    console.error("AI analysis error:", error);
    return getFallbackAnalysis(data);
  }
}

function getFallbackAnalysis(data: ScreeningData): AIAnalysisResult {
  const highRiskMatches = data.watchlistMatches.filter(
    (m) => m.riskLevel === "HIGH"
  );
  const mediumRiskMatches = data.watchlistMatches.filter(
    (m) => m.riskLevel === "MEDIUM"
  );

  let riskScore = 0;
  let riskLevel: "LOW" | "MEDIUM" | "HIGH" = "LOW";

  if (highRiskMatches.length > 0) {
    riskScore = 85;
    riskLevel = "HIGH";
  } else if (mediumRiskMatches.length > 0) {
    riskScore = 55;
    riskLevel = "MEDIUM";
  } else if (data.watchlistMatches.length > 0) {
    riskScore = 25;
    riskLevel = "LOW";
  }

  return {
    riskScore,
    riskLevel,
    summary: `Found ${data.watchlistMatches.length} watchlist matches for ${data.name}. ${riskLevel} risk level assigned based on match sources.`,
    detailedAnalysis: `Screening completed against multiple watchlists. ${highRiskMatches.length} high-risk matches found in sanctions lists. ${mediumRiskMatches.length} medium-risk matches in PEP databases. Manual review recommended for verification.`,
    riskFactors: [
      ...highRiskMatches.map(
        (m) => `High-risk match in ${m.source}: ${m.name}`
      ),
      ...mediumRiskMatches.map(
        (m) => `Medium-risk match in ${m.source}: ${m.name}`
      ),
      ...(data.newsArticles.length > 0
        ? [`${data.newsArticles.length} news mentions found`]
        : []),
    ],
    recommendations: [
      "Verify identity documents",
      "Check for false positives",
      "Review source credibility",
      ...(riskLevel === "HIGH"
        ? [
            "Escalate to senior compliance officer",
            "Consider enhanced due diligence",
          ]
        : []),
      "Document decision rationale",
    ],
  };
}

export async function summarizeNewsArticles(articles: any[]): Promise<string> {
  if (!articles.length) return "No relevant news articles found.";

  try {
    const prompt = `
Summarize the following news articles and identify any potential compliance risks:

${articles
  .map(
    (article) => `
Title: ${article.title}
Content: ${article.snippet}
---
`
  )
  .join("\n")}

Provide a concise summary focusing on:
1. Key themes or patterns
2. Any mentions of legal issues, sanctions, or regulatory actions
3. Overall sentiment and potential reputational risks

Keep the summary to 2-3 sentences.
`;

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.3,
    });

    return text;
  } catch (error) {
    console.error("News summarization error:", error);
    return `Found ${articles.length} news articles. Manual review recommended.`;
  }
}
