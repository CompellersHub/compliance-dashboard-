"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Download,
  Eye,
  RefreshCw,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ScreeningResult {
  _id?: string;
  fullName: string;
  aiAnalysis?: {
    riskLevel?: 'LOW' | 'MEDIUM' | 'HIGH' | 'UNKNOWN';
    riskScore?: number;
    bioDetails?: {
      nationality?: string;
    };
    summary?: string;
  };
  riskScore?: number;
  matches?: any[];
  newsArticles?: any[];
  createdAt?: string;
}

interface BatchScreeningResponse {
  data?: {
    data: ScreeningResult[];
    successCount: number;
    errorCount: number;
  };
}

export function BatchResults() {
  const {
    batchResults,
    batchLoading,
    error: batchError,
    // resetBatchResults,
  // } = useData<{ batchResults?: BatchScreeningResponse }>();
  } = useData();

  if (batchLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-8">
        <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
          <CardContent className="pt-8 pb-6">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 animate-ping">
                  <FileText className="mx-auto h-16 w-16 text-blue-500/30" />
                </div>
                <FileText className="mx-auto h-16 w-16 text-blue-600 animate-pulse" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Processing Your CSV File
                </h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  We&lsquo;re analyzing your data and running comprehensive
                  screenings. This may take a few moments.
                </p>
              </div>
              <Progress value={65} className="w-full max-w-xs mx-auto" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (batchError) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-8">
        <Alert variant="destructive" className="max-w-lg mx-auto shadow-lg">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle className="text-lg">Processing Error</AlertTitle>
          <AlertDescription className="mt-3 space-y-4">
            <p className="text-sm leading-relaxed">{batchError}</p>
            {/* <Button
              variant="outline"
              onClick={resetBatchResults}
              className="w-full bg-white hover:bg-gray-50"
              size="sm"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button> */}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!batchResults?.data?.data) {
    return null;
  }

  const { data, successCount, errorCount } = batchResults.data;
  const allResults = data.flat();
  const totalRecords = successCount + errorCount;

  const riskCounts = allResults.reduce((acc: Record<string, number>, result: ScreeningResult) => {
    const level = result.aiAnalysis?.riskLevel || "UNKNOWN";
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleExportResults = () => {
    const csvData = convertToCSV(allResults);
    downloadCSV(csvData, "batch-screening-results.csv");
  };

  return (
    <div className="space-y-8 mx-auto p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Batch Screening Results
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              Successfully processed{" "}
              <span className="font-semibold text-gray-900">
                {totalRecords}
              </span>{" "}
              record{totalRecords !== 1 ? "s" : ""}
              {successCount > 0 && errorCount > 0 && (
                <span className="text-sm ml-2 text-gray-500">
                  ({successCount} successful, {errorCount} errors)
                </span>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="default"
              onClick={handleExportResults}
              className="bg-blue-600 hover:bg-blue-700 shadow-sm"
            >
              <Download className="mr-2 h-4 w-4" />
              Export Results
            </Button>
            {/* <Button
              variant="outline"
              onClick={resetBatchResults}
              className="border-gray-300 hover:bg-gray-50"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Upload New File
            </Button> */}
          </div>
        </div>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Screened"
          value={totalRecords}
          icon={<FileText className="h-6 w-6" />}
          variant="default"
          description="Records processed"
        />
        <SummaryCard
          title="Low Risk"
          value={riskCounts.LOW || 0}
          variant="success"
          icon={<CheckCircle2 className="h-6 w-6" />}
          description="Clear for proceed"
          percentage={
            totalRecords > 0
              ? Math.round(((riskCounts.LOW || 0) / totalRecords) * 100)
              : 0
          }
        />
        <SummaryCard
          title="Medium Risk"
          value={riskCounts.MEDIUM || 0}
          variant="warning"
          icon={<AlertCircle className="h-6 w-6" />}
          description="Requires review"
          percentage={
            totalRecords > 0
              ? Math.round(((riskCounts.MEDIUM || 0) / totalRecords) * 100)
              : 0
          }
        />
        <SummaryCard
          title="High Risk"
          value={riskCounts.HIGH || 0}
          variant="destructive"
          icon={<XCircle className="h-6 w-6" />}
          description="Immediate attention"
          percentage={
            totalRecords > 0
              ? Math.round(((riskCounts.HIGH || 0) / totalRecords) * 100)
              : 0
          }
        />
      </div>

      {/* Results Table Card */}
      <Card className="shadow-sm border-gray-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-gray-600" />
            Detailed Results
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50/80">
                <TableRow className="hover:bg-gray-50/80">
                  <TableCell className="font-semibold text-gray-900 w-[220px]">
                    Individual
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 w-[120px]">
                    Risk Level
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 w-[100px]">
                    Risk Score
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 w-[80px] text-center">
                    Matches
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 w-[80px] text-center">
                    Articles
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 w-[120px]">
                    Status
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 w-[100px] text-center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allResults.length > 0 ? (
                  allResults.map((result, index) => (
                    <TableRow
                      key={result._id || index}
                      className="hover:bg-blue-50/30 transition-colors"
                    >
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">
                            {result.fullName}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <span className="inline-block w-2 h-2 bg-gray-300 rounded-full"></span>
                            {result.aiAnalysis?.bioDetails?.nationality ||
                              "Unknown nationality"}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <RiskBadge
                          level={result.aiAnalysis?.riskLevel || "UNKNOWN"}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="font-mono text-sm bg-gray-50 px-2 py-1 rounded border">
                          {result.aiAnalysis?.riskScore ??
                            result.riskScore ??
                            "N/A"}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 border-blue-200 font-medium"
                        >
                          {result.matches?.length || 0}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 border-purple-200 font-medium"
                        >
                          {result.newsArticles?.length || 0}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <StatusIndicator
                          riskLevel={result.aiAnalysis?.riskLevel || "UNKNOWN"}
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewDetails(result)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>
                      <div className="text-center py-12">
                        <FileText className="mx-auto h-12 w-12 text-gray-300" />
                        <p className="text-gray-500 font-medium">
                          No results found
                        </p>
                        <p className="text-sm text-gray-400">
                          Try uploading a different file
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Information Footer */}
      {allResults.length > 0 && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-900">
                  Screening Summary
                </h4>
                <p className="text-blue-800 leading-relaxed">
                  This batch screening analyzed{" "}
                  <span className="font-semibold">{totalRecords}</span>{" "}
                  individual{totalRecords !== 1 ? "s" : ""} against multiple
                  watchlists and news sources. Please review any high or medium
                  risk results carefully and consider additional due diligence
                  where appropriate.
                </p>
                {(riskCounts.HIGH || 0) > 0 && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800 font-medium">
                      ⚠️ {riskCounts.HIGH} high-risk individual
                      {(riskCounts.HIGH || 0) !== 1 ? "s" : ""} detected.
                      Immediate review recommended.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function RiskBadge({ level }: { level: string }) {
  const variants = {
    LOW: {
      className: "bg-green-100 text-green-800 border-green-300 shadow-sm",
      label: "Low Risk",
    },
    MEDIUM: {
      className: "bg-yellow-100 text-yellow-800 border-yellow-300 shadow-sm",
      label: "Medium Risk",
    },
    HIGH: {
      className: "bg-red-100 text-red-800 border-red-300 shadow-sm",
      label: "High Risk",
    },
    UNKNOWN: {
      className: "bg-gray-100 text-gray-800 border-gray-300 shadow-sm",
      label: "Unknown",
    },
  };

  const variant = variants[level as keyof typeof variants] || variants.UNKNOWN;

  return (
    <Badge
      variant="outline"
      className={`${variant.className} font-medium px-3 py-1`}
    >
      {variant.label}
    </Badge>
  );
}

function StatusIndicator({ riskLevel }: { riskLevel: string }) {
  if (riskLevel === "HIGH") {
    return (
      <div className="flex items-center gap-2 text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200">
        <XCircle className="h-4 w-4" />
        <span className="text-sm font-medium">Flagged</span>
      </div>
    );
  } else if (riskLevel === "MEDIUM") {
    return (
      <div className="flex items-center gap-2 text-yellow-700 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
        <AlertCircle className="h-4 w-4" />
        <span className="text-sm font-medium">Review</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-2 text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
        <CheckCircle2 className="h-4 w-4" />
        <span className="text-sm font-medium">Clear</span>
      </div>
    );
  }
}

function SummaryCard({
  title,
  value,
  variant = "default",
  icon,
  description,
  percentage,
}: {
  title: string;
  value: number;
  variant?: "default" | "destructive" | "success" | "warning";
  icon: React.ReactNode;
  description?: string;
  percentage?: number;
}) {
  const variantClasses = {
    default: {
      card: "bg-white border-gray-200 hover:shadow-md",
      icon: "text-gray-600 bg-gray-100",
      value: "text-gray-900",
      title: "text-gray-700",
    },
    destructive: {
      card: "bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-md",
      icon: "text-red-600 bg-red-100",
      value: "text-red-900",
      title: "text-red-700",
    },
    success: {
      card: "bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-md",
      icon: "text-green-600 bg-green-100",
      value: "text-green-900",
      title: "text-green-700",
    },
    warning: {
      card: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-md",
      icon: "text-yellow-600 bg-yellow-100",
      value: "text-yellow-900",
      title: "text-yellow-700",
    },
  };

  const styles = variantClasses[variant];

  return (
    <Card
      className={`${styles.card} transition-all duration-200 cursor-pointer`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-sm font-semibold ${styles.title}`}>{title}</h3>
          <div className={`p-2 rounded-lg ${styles.icon}`}>{icon}</div>
        </div>
        <div className="space-y-2">
          <p className={`text-3xl font-bold ${styles.value}`}>{value}</p>
          {description && (
            <p className="text-xs text-gray-600">{description}</p>
          )}
          {percentage !== undefined && (
            <p className="text-xs font-medium text-gray-500">
              {percentage}% of total
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function handleViewDetails(result: ScreeningResult) {
  console.log("View details for:", result);
  // router.push(`/screening-details/${result._id}`);
}

function convertToCSV(results: ScreeningResult[]): string {
  if (!results.length) return "";

  const headers = [
    "Name",
    "Risk Level",
    "Risk Score",
    "Matches",
    "Articles",
    "Nationality",
    "Summary",
    "Created At",
  ];

  const rows = results.map((result) => [
    result.fullName || "",
    result.aiAnalysis?.riskLevel || "",
    result.aiAnalysis?.riskScore ?? result.riskScore ?? "",
    result.matches?.length || 0,
    result.newsArticles?.length || 0,
    result.aiAnalysis?.bioDetails?.nationality || "",
    result.aiAnalysis?.summary || "",
    result.createdAt || "",
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.map((field) => `"${field}"`).join(",")),
  ].join("\n");

  return csvContent;
}

function downloadCSV(csvContent: string, filename: string) {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}