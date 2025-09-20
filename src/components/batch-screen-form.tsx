"use client";

import { useCallback, useState, useEffect } from "react";
import { Upload, FileSearch, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

export function BatchScreenForm() {
  const {
    performBatchScreening,
    batchLoading,
    batchResults,
    error: contextError,
  } = useData();

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Validate file type and size
  const validateFile = (file: File): string | null => {
    if (!file.name.toLowerCase().endsWith(".csv")) {
      return "Only CSV files are allowed.";
    }

    // Check file size (e.g., max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return "File size must be less than 10MB.";
    }

    return null;
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      setError(null);

      // Handle rejected files
      if (rejectedFiles.length > 0) {
        setError("File was rejected. Please ensure it meets the requirements.");
        return;
      }

      if (acceptedFiles.length === 0) {
        setError("No valid files selected.");
        return;
      }

      const selectedFile = acceptedFiles[0];
      const validationError = validateFile(selectedFile);

      if (validationError) {
        setError(validationError);
        return;
      }

      setFile(selectedFile);
      // Clear any previous results when new file is selected
      if (batchResults) {
        // You might want to clear results in context here if there's a method for it
      }
    },
    [batchResults]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".csv"],
    },
    multiple: false,
  });

  const onSubmit = async () => {
    if (!file) {
      setError("Please select a CSV file first.");
      return;
    }

    // Double-check file validation before submission
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setError(null); // Clear any previous errors
      await performBatchScreening(file);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to process file.";
      setError(errorMessage);
      toast.error("Batch screening failed", { description: errorMessage });
    }
  };

  const onReset = () => {
    setFile(null);
    setError(null);
  };

  // Handle context errors and success states
  useEffect(() => {
    if (contextError) {
      setError(contextError);
    } else if (batchResults && !error) {
      // Only show success if there's no local error
      toast.success("Batch screening completed successfully!");
    }
  }, [contextError, batchResults, error]);

  // Clear error when context error is cleared
  useEffect(() => {
    if (!contextError && error === contextError) {
      setError(null);
    }
  }, [contextError, error]);

  const hasError = error || contextError;
  const hasSuccess = !hasError && batchResults;

  return (
    <Card className="mx-auto dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Dropzone Area */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-300 ${
              isDragActive
                ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950/50"
                : hasError
                ? "border-red-300 hover:border-red-400 dark:border-red-500 dark:hover:border-red-400"
                : "border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500"
            } ${batchLoading ? "pointer-events-none opacity-60" : ""}`}
          >
            <input {...getInputProps()} disabled={batchLoading} />
            <div className="flex flex-col items-center justify-center gap-2">
              <Upload
                className={`h-8 w-8 ${
                  hasError 
                    ? "text-red-500 dark:text-red-400" 
                    : "text-gray-500 dark:text-gray-400"
                }`}
              />
              {isDragActive ? (
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Drop the CSV file here
                </p>
              ) : (
                <>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Drag & drop a CSV file, or click to select
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Supported format: .csv (max 10MB)
                  </p>
                </>
              )}
            </div>
          </div>

          {/* File Selected */}
          {file && (
            <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-md dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-center gap-2">
                <FileSearch className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onReset}
                disabled={batchLoading}
                className="text-red-500 hover:text-red-600 disabled:opacity-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-gray-600"
              >
                Remove
              </Button>
            </div>
          )}

          {/* Error Message */}
          {hasError && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-md text-red-600 dark:bg-red-950/50 dark:border-red-800 dark:text-red-400">
              <XCircle className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">{error || contextError}</span>
            </div>
          )}

          {/* Success Message */}
          {hasSuccess && (
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-md text-green-600 dark:bg-green-950/50 dark:border-green-800 dark:text-green-400">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">
                Batch screening completed successfully.
              </span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            onClick={onSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60 dark:bg-blue-600 dark:hover:bg-blue-700"
            disabled={!file || batchLoading || !!hasError}
          >
            <FileSearch className="mr-2 h-4 w-4" />
            {batchLoading ? "Processing..." : "Screen CSV File"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}