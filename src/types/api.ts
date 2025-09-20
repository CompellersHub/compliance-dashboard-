// types/api.ts
export interface ApiResponse<T> {
  success: boolean;
  status: number;
  data: T;
}

// Alert Analysis
export interface AlertAnalysisData {
  label: string;
  positive: number;
  negative: number;
}

// Monthly Screening
export interface MonthlyScreeningData {
  label: string;
  totalScreening: number;
  alertGenerate: number;
}

// Recent Alerts
export interface NewsArticle {
  source: string;
  title: string;
  url: string;
  snippet: string;
  publishedDate: string;
  relevanceScore: number;
}

export interface AiAnalysis {
  riskScore: number;
  riskLevel: string;
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
}

export interface RecentAlert {
  _id: string;
  fullName: string;
  matches: any[];
  newsArticles: NewsArticle[];
  wikipediaData: any;
  aiAnalysis: AiAnalysis;
  newsSummary: string | null;
  riskScore: number;
  riskLevel: string;
  responseTime: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface RecentAlertsResponse {
  docs: RecentAlert[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

// Risk Distribution
export interface RiskDistributionData {
  Low: number;
  High: number;
  Medium: number;
}

// Screening Volume
export interface ScreeningVolumeData {
  label: string;
  totalScreening: number;
}