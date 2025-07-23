"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { toast } from "sonner";
import { z } from "zod";

interface ApiResponse {
  success: boolean;
  status: number;
  data: any;
}

interface ScreeningResult {
  matches: any[];
  newsArticles: any[];
  wikipediaData: any;
  aiAnalysis: {
    riskScore: number;
    riskLevel: string;
    summary: string;
    detailedAnalysis: string;
    riskFactors: string[];
    recommendations: string[];
  };
  newsSummary: string;
}

export const screeningInputSchema = z.object({
  fullName: z.string().min(2),
  entityType: z.string().default("Individual"),
  dateOfBirth: z.string().optional(),
  nationality: z.string().optional(),
  country: z.string().optional(),
  additionalInfo: z.string().optional(),
});

interface BatchScreeningResult {
  csvData?: string;
  htmlContent?: string;
  jsonContent?: any;
}

export type ScreeningInput = z.infer<typeof screeningInputSchema>;

interface DataContextType {
  // Screening data and states
  results: ScreeningResult | null;
  batchResults: BatchScreeningResult | null;
  isLoading: boolean;
  batchLoading: boolean;
  error: string | null;

  // New GET endpoints data
  alertAnalysisData: any;
  monthlyScreeningData: any;
  riskDistributionData: any;
  screeningVolumeData: any;
  recentAlertsData: any;

  // New loading states
  isAlertAnalysisLoading: boolean;
  isMonthlyScreeningLoading: boolean;
  isRiskDistributionLoading: boolean;
  isScreeningVolumeLoading: boolean;
  isRecentAlertsLoading: boolean;

  // Methods
  performScreening: (inputData: ScreeningInput) => Promise<void>;
  performBatchScreening: (file: File) => Promise<void>;

  // New GET methods
  getAlertAnalysis: () => Promise<void>;
  getMonthlyScreening: () => Promise<void>;
  getRiskDistribution: () => Promise<void>;
  getScreeningVolume: () => Promise<void>;
  getRecentAlerts: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  // Existing states
  const [results, setResults] = useState<ScreeningResult | null>(null);
  const [batchResults, setBatchResults] = useState<BatchScreeningResult | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [batchLoading, setBatchLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // New GET endpoint states
  const [alertAnalysisData, setAlertAnalysisData] = useState<any>(null);
  const [monthlyScreeningData, setMonthlyScreeningData] = useState<any>(null);
  const [riskDistributionData, setRiskDistributionData] = useState<any>(null);
  const [screeningVolumeData, setScreeningVolumeData] = useState<any>(null);
  const [recentAlertsData, setRecentAlertsData] = useState<any>(null);

  // New loading states
  const [isAlertAnalysisLoading, setIsAlertAnalysisLoading] = useState(false);
  const [isMonthlyScreeningLoading, setIsMonthlyScreeningLoading] =
    useState(false);
  const [isRiskDistributionLoading, setIsRiskDistributionLoading] =
    useState(false);
  const [isScreeningVolumeLoading, setIsScreeningVolumeLoading] =
    useState(false);
  const [isRecentAlertsLoading, setIsRecentAlertsLoading] = useState(false);

  useEffect(() => {
    getRecentAlerts();
    getAlertAnalysis();
    getMonthlyScreening();
  }, []);

  // Existing methods (unchanged)
  const performScreening = async (inputData: ScreeningInput) => {
    setIsLoading(true);
    setError(null);

    try {
      const payload = {
        fullName: inputData.fullName,
        entityType: inputData.entityType,
        dateOfBirth: inputData.dateOfBirth
          ? new Date(inputData.dateOfBirth).toISOString()
          : undefined,
        nationality: inputData.nationality || "string",
        country: inputData.country || "string",
        additional: inputData.additionalInfo || undefined,
      };

      const response = await fetch("/api/screen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "Failed to parse error response" }));
        throw new Error(
          errorData.error || `HTTP ${response.status}: Screening failed`
        );
      }

      const data: ApiResponse = await response.json();
      const screeningResult: ScreeningResult | undefined =
        data.data && data.data[0];

      const safeResults: ScreeningResult = screeningResult || {
        matches: [],
        newsArticles: [],
        wikipediaData: null,
        aiAnalysis: {
          riskScore: 0,
          riskLevel: "Unknown",
          summary: "No analysis available",
          detailedAnalysis: "No detailed analysis available",
          riskFactors: [],
          recommendations: [],
        },
        newsSummary: "No news summary available",
      };

      setResults(safeResults);
      toast.success("Screening completed");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(message);
      toast.error("Screening failed", { description: message });
    } finally {
      setIsLoading(false);
    }
  };

  const performBatchScreening = async (file: File) => {
    setBatchLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("document", file);

      const response = await fetch("/api/batch-screening", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `HTTP ${response.status}`);
      }

      const result = await response.json();
      setBatchResults(result);
      toast.success("Batch screening completed");
    } catch (err: any) {
      const message = err.message || "Unknown error";
      setError(message);
      toast.error("Batch screening failed", { description: message });
    } finally {
      setBatchLoading(false);
    }
  };

  // New GET methods
  const getAlertAnalysis = async () => {
    setIsAlertAnalysisLoading(true);
    try {
      const response = await fetch("/api/alert-analysis");
      const data = await response.json();
      setAlertAnalysisData(data);
    } catch (error) {
      toast.error("Failed to load alert analysis");
      console.error(error);
    } finally {
      setIsAlertAnalysisLoading(false);
    }
  };

  const getMonthlyScreening = async () => {
    setIsMonthlyScreeningLoading(true);
    try {
      const response = await fetch("/api/monthly-screening");
      const data = await response.json();
      setMonthlyScreeningData(data);
    } catch (error) {
      toast.error("Failed to load monthly screening");
      console.error(error);
    } finally {
      setIsMonthlyScreeningLoading(false);
    }
  };

  const getRiskDistribution = async () => {
    setIsRiskDistributionLoading(true);
    try {
      const response = await fetch("/api/risk-distribution");
      const data = await response.json();
      setRiskDistributionData(data);
    } catch (error) {
      toast.error("Failed to load risk distribution");
      console.error(error);
    } finally {
      setIsRiskDistributionLoading(false);
    }
  };

  const getScreeningVolume = async () => {
    setIsScreeningVolumeLoading(true);
    try {
      const response = await fetch("/api/screening-volume");
      const data = await response.json();
      setScreeningVolumeData(data);
    } catch (error) {
      toast.error("Failed to load screening volume");
      console.error(error);
    } finally {
      setIsScreeningVolumeLoading(false);
    }
  };

  const getRecentAlerts = async () => {
    setIsRecentAlertsLoading(true);
    try {
      const response = await fetch("/api/recent-alerts");
      const data = await response.json();
      setRecentAlertsData(data);
    } catch (error) {
      toast.error("Failed to load recent alerts");
      console.error(error);
    } finally {
      setIsRecentAlertsLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        // Existing values
        results,
        batchResults,
        isLoading,
        batchLoading,
        error,
        performScreening,
        performBatchScreening,

        // New values
        alertAnalysisData,
        monthlyScreeningData,
        riskDistributionData,
        screeningVolumeData,
        recentAlertsData,
        isAlertAnalysisLoading,
        isMonthlyScreeningLoading,
        isRiskDistributionLoading,
        isScreeningVolumeLoading,
        isRecentAlertsLoading,
        getAlertAnalysis,
        getMonthlyScreening,
        getRiskDistribution,
        getScreeningVolume,
        getRecentAlerts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
