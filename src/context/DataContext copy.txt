// Client Context (data-context.tsx)
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import { z } from "zod";

interface ApiResponse {
  success: boolean;
  status: number;
  data: ScreeningResult[];
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
  csvData?: string; // CSV data as a string
  htmlContent?: string; // HTML content if returned
  jsonContent?: any; // JSON data if returned
}

export type ScreeningInput = z.infer<typeof screeningInputSchema>;

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [results, setResults] = useState<ScreeningResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [batchResults, setBatchResults] = useState<BatchScreeningResult | null>(
    null
  );
  // const [isLoading, setIsLoading] = useState(false);
  const [batchLoading, setBatchLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

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

      console.log("Client: Sending payload:", payload);

      const response = await fetch("/api/screen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("Client: Response status:", response.status);

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "Failed to parse error response" }));
        throw new Error(
          errorData.error || `HTTP ${response.status}: Screening failed`
        );
      }

      const data: ApiResponse = await response.json();

      console.log("=== CLIENT DEBUG ===");
      console.log("Raw API response:", data);

      // Client-side debugging
      console.log("=== CLIENT DEBUG ===");
      console.log("Raw API response:", data);
      console.log("Response type:", typeof data);
      console.log("Response keys:", Object.keys(data || {}));
      console.log("Has matches?", data && "matches" in data);
      // console.log("matches value:", data?.matches);
      // console.log("matches type:", typeof data?.matches);

      // Safely process the response with proper validation
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

      console.log("Processed safe results:", safeResults);
      setResults(safeResults);

      toast.success("Screening completed", {
        description: `Found ${safeResults.matches.length} matches for ${inputData.fullName}`,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unknown error occurred";
      console.error("Client: Screening error:", err);
      console.error("Error details:", {
        message,
        stack: err instanceof Error ? err.stack : undefined,
        type: typeof err,
      });

      setError(message);
      toast.error("Screening failed", { description: message });
    } finally {
      setIsLoading(false);
    }
  };

  // Batch Screening Function
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
      console.log(
        "raw result from Data context" + JSON.stringify(result, null, 2)
      );

      toast.success("Batch screening completed");
    } catch (err: any) {
      const message = err.message || "Unknown error";
      setError(message);
      toast.error("Batch screening failed", { description: message });
    } finally {
      setBatchLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        results,
        batchResults,
        isLoading,
        error,
        performScreening,
        performBatchScreening,
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
