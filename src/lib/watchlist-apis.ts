/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export async function searchOFAC(name: string) {
  try {
    // OFAC doesn't have a direct API, but we can use their XML data
    // In production, you'd want to download and parse their SDN list regularly
    const response = await fetch(
      "https://www.treasury.gov/ofac/downloads/sdn.xml"
    );
    const xmlData = await response.text();

    // Parse XML and search for matches
    // This is a simplified implementation - in production you'd use a proper XML parser
    const matches = [];
    const nameRegex = new RegExp(name.split(" ").join(".*"), "i");

    if (nameRegex.test(xmlData)) {
      matches.push({
        source: "OFAC",
        name: name,
        matchPercentage: 85,
        riskLevel: "HIGH",
        details: {
          listType: "SDN",
          program: "Various sanctions programs",
          lastUpdated: new Date().toISOString(),
        },
      });
    }

    return matches;
  } catch (error) {
    console.error("OFAC search error:", error);
    return [];
  }
}

// UN Sanctions API Integration
export async function searchUNSanctions(name: string) {
  try {
    // UN Consolidated List API
    const response = await fetch(
      `https://scsanctions.un.org/resources/xml/en/consolidated.xml`
    );
    const xmlData = await response.text();

    const matches = [];
    const nameRegex = new RegExp(name.split(" ").join(".*"), "i");

    if (nameRegex.test(xmlData)) {
      matches.push({
        source: "UN",
        name: name,
        matchPercentage: 80,
        riskLevel: "HIGH",
        details: {
          listType: "Consolidated List",
          committee: "Security Council",
          lastUpdated: new Date().toISOString(),
        },
      });
    }

    return matches;
  } catch (error) {
    console.error("UN Sanctions search error:", error);
    return [];
  }
}

// EU Sanctions API Integration
export async function searchEUSanctions(name: string) {
  try {
    // EU doesn't have a direct API, but they provide XML files
    const response = await fetch(
      "https://webgate.ec.europa.eu/europeaid/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content?token=dG9rZW4="
    );

    if (!response.ok) {
      throw new Error("EU API not available");
    }

    const xmlData = await response.text();
    const matches = [];
    const nameRegex = new RegExp(name.split(" ").join(".*"), "i");

    if (nameRegex.test(xmlData)) {
      matches.push({
        source: "EU",
        name: name,
        matchPercentage: 75,
        riskLevel: "HIGH",
        details: {
          listType: "Consolidated List",
          regulation: "EU Sanctions",
          lastUpdated: new Date().toISOString(),
        },
      });
    }

    return matches;
  } catch (error) {
    console.error("EU Sanctions search error:", error);
    return [];
  }
}

// PEP Database Search (using World-Check or similar)
export async function searchPEPDatabase(name: string) {
  try {
    // This would integrate with a commercial PEP database
    // For demo purposes, we'll simulate some matches
    const pepNames = [
      "Donald Trump",
      "Joe Biden",
      "Vladimir Putin",
      "Xi Jinping",
      "Emmanuel Macron",
      "Angela Merkel",
      "Boris Johnson",
      "Narendra Modi",
    ];

    const matches = [];
    const nameWords = name.toLowerCase().split(" ");

    for (const pepName of pepNames) {
      const pepWords = pepName.toLowerCase().split(" ");
      const commonWords = nameWords.filter((word) =>
        pepWords.some(
          (pepWord) => pepWord.includes(word) || word.includes(pepWord)
        )
      );

      if (commonWords.length > 0) {
        const matchPercentage =
          (commonWords.length / Math.max(nameWords.length, pepWords.length)) *
          100;

        if (matchPercentage > 50) {
          matches.push({
            source: "PEP",
            name: pepName,
            matchPercentage: Math.round(matchPercentage),
            riskLevel: matchPercentage > 80 ? "HIGH" : "MEDIUM",
            details: {
              category: "Politically Exposed Person",
              position: "Government Official",
              country: "Various",
              lastUpdated: new Date().toISOString(),
            },
          });
        }
      }
    }

    return matches;
  } catch (error) {
    console.error("PEP search error:", error);
    return [];
  }
}

// Interpol Red Notices
export async function searchInterpol(name: string) {
  try {
    // Interpol doesn't provide a public API for Red Notices
    // This would require special access or web scraping
    // For demo purposes, we'll return empty results
    return [];
  } catch (error) {
    console.error("Interpol search error:", error);
    return [];
  }
}

// Nigerian EFCC/NFIU Integration
export async function searchNigerianWatchlists(name: string) {
  try {
    // These would require specific API access or web scraping
    // For demo purposes, we'll simulate some results
    const matches = [];

    // Simulate EFCC wanted list check
    if (
      name.toLowerCase().includes("fraud") ||
      name.toLowerCase().includes("corrupt")
    ) {
      matches.push({
        source: "EFCC",
        name: name,
        matchPercentage: 70,
        riskLevel: "HIGH",
        details: {
          listType: "Wanted List",
          charges: "Financial Crimes",
          lastUpdated: new Date().toISOString(),
        },
      });
    }

    return matches;
  } catch (error) {
    console.error("Nigerian watchlist search error:", error);
    return [];
  }
}

// News and Media Search
export async function searchNews(name: string) {
  try {
    // Google News API (requires API key)
    const apiKey = process.env.GOOGLE_NEWS_API_KEY;
    if (!apiKey) {
      console.warn("Google News API key not configured");
      return [];
    }

    const response = await fetch(
      `https://newsapi.org/v2/everything?q="${name}"&sortBy=relevancy&apiKey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("News API request failed");
    }

    const data = await response.json();

    return (
      data.articles?.slice(0, 5).map((article: any) => ({
        source: "Google News",
        title: article.title,
        url: article.url,
        snippet: article.description,
        publishedDate: article.publishedAt,
        relevanceScore: 75,
      })) || []
    );
  } catch (error) {
    console.error("News search error:", error);
    return [];
  }
}

// Wikipedia/Wikidata Search
export async function searchWikipedia(name: string) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        name
      )}`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return {
      source: "Wikipedia",
      title: data.title,
      extract: data.extract,
      url: data.content_urls?.desktop?.page,
      thumbnail: data.thumbnail?.source,
    };
  } catch (error) {
    console.error("Wikipedia search error:", error);
    return null;
  }
}
