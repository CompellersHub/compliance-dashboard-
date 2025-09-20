// Update the interfaces in your DataContext
interface BatchScreeningResult {
  _id: string;
  fullName: string;
  matches: any[];
  newsArticles: {
    source: string;
    title: string;
    url: string;
    snippet: string;
    publishedDate: string;
    relevanceScore: number;
  }[];
  wikipediaData: {
    source: string;
    title: string;
    extract: string;
    url: string;
    thumbnail: string;
  };
  aiAnalysis: {
    riskScore: number;
    riskLevel: "LOW" | "MEDIUM" | "HIGH" | "UNKNOWN";
    summary: string;
    detailedAnalysis: string;
    riskFactors: string[];
    recommendations: string[];
    bioDetails: {
      dateOfBirth: string;
      placeOfBirth: string;
      nationality: string;
      occupation: string;
      education: string;
    };
  };
  newsSummary: string;
  riskScore: number;
  riskLevel: string;
  responseTime: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BatchScreeningResponse {
  success: boolean;
  status: number;
  data: {
    data: BatchScreeningResult[][]; // Array of arrays of ScreeningResult
    headers: string[];
    metadata: {
      rowCount: number;
    };
    successCount: number;
    errorCount: number;
  };
}