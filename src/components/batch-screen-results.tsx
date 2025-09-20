/*eslint-disable*/

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
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  User,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Globe,
  ShieldAlert,
  FileSearch,
  Filter,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// The interface for a single screening result (already provided by you)
interface ScreeningResult {
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

// This is the missing interface that causes the error
interface BatchScreeningResult {
  data?: {
    data: ScreeningResult[][];
    successCount: number;
    errorCount: number;
  };
  // Optional: other properties from the original BatchScreeningResult
  csvData?: string;
  htmlContent?: string;
  jsonContent?: any;
}

export function BatchResults() {
  const { batchResults, batchLoading, error: batchError } = useData();

  // All hooks must be declared unconditionally at the top
  const [selectedPerson, setSelectedPerson] = useState<ScreeningResult | null>(
    null
  );
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [reviewStatus, setReviewStatus] = useState<string>("");
  const [reviewRationale, setReviewRationale] = useState<string>("");
  const [filterRiskLevel, setFilterRiskLevel] = useState<string>("all");
  const [filterHasMatches, setFilterHasMatches] = useState<boolean | null>(
    null
  );

  // Initialize with empty values to avoid conditional hooks
  const initialResults = batchResults?.data?.data || [];
  const allResults = initialResults.flat();
  const successCount = batchResults?.data?.successCount || 0;
  const errorCount = batchResults?.data?.errorCount || 0;
  const totalRecords = successCount + errorCount;

  // Memoized calculations - must be after all hooks but before any returns
  const filteredResults = useMemo(() => {
    return allResults.filter((result) => {
      const riskMatch =
        filterRiskLevel === "all" ||
        result.aiAnalysis?.riskLevel === filterRiskLevel;
      const matchesFilter =
        filterHasMatches === null ||
        (filterHasMatches
          ? (result.matches?.length ?? 0) > 0
          : (result.matches?.length ?? 0) === 0);
      return riskMatch && matchesFilter;
    });
  }, [allResults, filterRiskLevel, filterHasMatches]);

  const riskCounts = useMemo(() => {
    return filteredResults.reduce(
      (acc: Record<string, number>, result: ScreeningResult) => {
        const level = result.aiAnalysis?.riskLevel || "UNKNOWN";
        acc[level] = (acc[level] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
  }, [filteredResults]);

  // Now safe to do conditional returns
  if (batchLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-8">
        <Card className="w-full max-w-md mx-auto border-0 shadow-lg animate-pulse">
          <CardContent className="pt-8 pb-6">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0">
                  <FileText className="mx-auto h-16 w-16 text-blue-500/30" />
                </div>
                <FileText className="mx-auto h-16 w-16 text-blue-600 animate-pulse" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 bg-gray-200 h-6 rounded w-3/4 mx-auto"></h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto bg-gray-100 h-4 rounded"></p>
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
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const handleExportResults = () => {
    const csvData = convertToCSV(filteredResults);
    downloadCSV(csvData, "batch-screening-results.csv");
  };

  const handleViewDetails = (result: ScreeningResult) => {
    setSelectedPerson(result);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-8 mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="bg-gradient-to-r bg-blue-100 dark:bg-gray-800 border rounded-xl  p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-gray-600 rounded-lg shadow-inner">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Batch Screening Results
              </h1>
            </div>
            <p className="text-gray-900 dark:text-white text-lg">
              Successfully processed{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
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
              className="bg-blue-600 hover:bg-blue-700 shadow-sm transition-all hover:shadow-md"
            >
              <Download className="mr-2 h-4 w-4" />
              Export Results
            </Button>
          </div>
        </div>
      </div>
      {/* --- */}
      {/* Filters Section */}
      <FiltersSection
        filterRiskLevel={filterRiskLevel}
        setFilterRiskLevel={setFilterRiskLevel}
        filterHasMatches={filterHasMatches}
        setFilterHasMatches={setFilterHasMatches}
      />
      {/* --- */}
      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Screened"
          value={filteredResults.length}
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
            filteredResults.length > 0
              ? Math.round(
                  ((riskCounts.LOW || 0) / filteredResults.length) * 100
                )
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
            filteredResults.length > 0
              ? Math.round(
                  ((riskCounts.MEDIUM || 0) / filteredResults.length) * 100
                )
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
            filteredResults.length > 0
              ? Math.round(
                  ((riskCounts.HIGH || 0) / filteredResults.length) * 100
                )
              : 0
          }
        />
      </div>
      {/* --- */}
      {/* Results Table Card */}
      <Card className="shadow-sm border-gray-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-gray-600" />
            Detailed Results ({filteredResults.length})
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50/80 dark:bg-gray-900">
                <TableRow className="hover:bg-gray-50/80 dark:hover:bg-gray-900/80">
                  <TableCell className="font-semibold text-gray-900 dark:text-gray-100 w-[220px]">
                    Individual
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 dark:text-gray-100 w-[120px]">
                    Risk Level
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 dark:text-gray-100 w-[100px]">
                    Risk Score
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 dark:text-gray-100 w-[80px] text-center">
                    Matches
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 dark:text-gray-100 w-[80px] text-center">
                    Articles
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 dark:text-gray-100 w-[120px]">
                    Status
                  </TableCell>
                  <TableCell className="font-semibold text-gray-900 dark:text-gray-100 w-[100px] text-center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResults.length > 0 ? (
                  filteredResults.map((result, index) => (
                    <TableRow
                      key={result._id || index}
                      className="hover:bg-blue-50/30 dark:hover:bg-blue-950/30 transition-colors group"
                    >
                      <TableCell>
                        <button
                          onClick={() => handleViewDetails(result)}
                          className="text-left space-y-1 w-full"
                        >
                          <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {result.fullName}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            {result.aiAnalysis?.bioDetails?.nationality ||
                              "N/A"}
                          </div>
                        </button>
                      </TableCell>
                      <TableCell>
                        <RiskBadge level={result.aiAnalysis?.riskLevel} />
                      </TableCell>
                      <TableCell>
                        <div className="font-mono text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded border dark:border-gray-700">
                          {result.aiAnalysis?.riskScore || "N/A"}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800 font-medium"
                        >
                          {result.matches?.length ?? 0}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-800 font-medium"
                        >
                          {result.newsArticles?.length ?? 0}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <StatusIndicator
                          riskLevel={result.aiAnalysis?.riskLevel}
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewDetails(result)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7}>
                      <div className="text-center py-12">
                        <FileText className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600" />
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                          No results match the current filters
                        </p>
                        <Button
                          variant="ghost"
                          className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                          onClick={() => {
                            setFilterRiskLevel("all");
                            setFilterHasMatches(null);
                          }}
                        >
                          Clear filters
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      {/* --- */}
      {/* Person Detail Modal */}
      {selectedPerson && (
        <PersonDetailModal
          person={selectedPerson}
          open={isDetailOpen}
          onOpenChange={setIsDetailOpen}
          reviewStatus={reviewStatus}
          setReviewStatus={setReviewStatus}
          reviewRationale={reviewRationale}
          setReviewRationale={setReviewRationale}
        />
      )}
    </div>
  );
}

function PersonDetailModal({
  person,
  open,
  onOpenChange,
  reviewStatus,
  setReviewStatus,
  reviewRationale,
  setReviewRationale,
}: {
  person: ScreeningResult;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reviewStatus: string;
  setReviewStatus: (value: string) => void;
  reviewRationale: string;
  setReviewRationale: (value: string) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-0 rounded-lg overflow-hidden bg-neutral-100">
        <div className="relative">
          {/* Header with gradient background */}
          <div
            className={`bg-gradient-to-r ${
              person.aiAnalysis.riskLevel === "HIGH"
                ? "from-red-50 to-red-100 border-b border-red-200"
                : person.aiAnalysis.riskLevel === "MEDIUM"
                ? "from-yellow-50 to-yellow-100 border-b border-yellow-200"
                : "from-green-50 to-green-100 border-b border-green-200"
            } p-6`}
          >
            <DialogHeader className="flex flex-row items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                  <AvatarImage src={person.wikipediaData?.thumbnail} />
                  <AvatarFallback className="text-2xl font-bold bg-gray-100">
                    {person.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <DialogTitle className="text-3xl font-bold text-gray-900">
                    {person.fullName}
                  </DialogTitle>
                  <div className="flex items-center gap-4">
                    <RiskBadge level={person.aiAnalysis.riskLevel} />
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Risk Score:</span>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        {person.aiAnalysis.riskScore}
                      </span>
                    </div>
                    {person.matches.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">Matches:</span>
                        <Badge className="bg-blue-100 text-blue-800">
                          {person.matches.length}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <XCircle className="h-6 w-6" />
              </Button>
            </DialogHeader>
          </div>

          {/* Content with tabs */}
          <div className="p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-50">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <User className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="biography"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Biography
                </TabsTrigger>
                <TabsTrigger
                  value="news"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  News ({person.newsArticles.length})
                </TabsTrigger>
                <TabsTrigger
                  value="analysis"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <ShieldAlert className="h-4 w-4 mr-2" />
                  Risk Analysis
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-6 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Personal Details Card */}
                  <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="pb-3 border-b">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-600" />
                        Personal Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DetailItem
                          icon={<Calendar className="h-5 w-5 text-blue-500" />}
                          label="Date of Birth"
                          value={
                            person.aiAnalysis.bioDetails.dateOfBirth ||
                            "Unknown"
                          }
                        />
                        <DetailItem
                          icon={<MapPin className="h-5 w-5 text-blue-500" />}
                          label="Place of Birth"
                          value={
                            person.aiAnalysis.bioDetails.placeOfBirth ||
                            "Unknown"
                          }
                        />
                        <DetailItem
                          icon={<Globe className="h-5 w-5 text-blue-500" />}
                          label="Nationality"
                          value={person.aiAnalysis.bioDetails.nationality}
                        />
                        <DetailItem
                          icon={<Briefcase className="h-5 w-5 text-blue-500" />}
                          label="Occupation"
                          value={
                            person.aiAnalysis.bioDetails.occupation || "Unknown"
                          }
                        />
                        <DetailItem
                          icon={
                            <GraduationCap className="h-5 w-5 text-blue-500" />
                          }
                          label="Education"
                          value={
                            person.aiAnalysis.bioDetails.education || "Unknown"
                          }
                          spanFull
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Assessment Card */}
                  <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="pb-3 border-b">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ShieldAlert className="h-5 w-5 text-blue-600" />
                        Quick Assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Summary
                          </h4>
                          <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                            {person.aiAnalysis.summary}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Key Risk Factors
                          </h4>
                          <ul className="space-y-2">
                            {person.aiAnalysis.riskFactors.map((factor, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span className="text-sm text-gray-700">
                                  {factor}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="biography" className="pt-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="pb-3 border-b">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Biography
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="prose max-w-none">
                      <p className="text-gray-700">
                        {person.wikipediaData?.extract ||
                          "No biography available."}
                      </p>
                      {person.wikipediaData?.url && (
                        <div className="mt-4">
                          <a
                            href={person.wikipediaData.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:underline font-medium"
                          >
                            Read more on Wikipedia
                            <ExternalLink className="h-4 w-4 ml-1" />
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="news" className="pt-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader className="pb-3 border-b">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileSearch className="h-5 w-5 text-blue-600" />
                      News Mentions ({person.newsArticles.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    {person.newsArticles.length > 0 ? (
                      <ScrollArea className="h-[500px] pr-4">
                        <div className="space-y-4">
                          {person.newsArticles.map((article, index) => (
                            <div
                              key={index}
                              className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                            >
                              <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                  <h3 className="font-medium text-gray-900">
                                    {article.title}
                                  </h3>
                                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                                    <span>{article.source}</span>
                                    <span>•</span>
                                    <span>
                                      {new Date(
                                        article.publishedDate
                                      ).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-700 mt-2">
                                    {article.snippet}
                                  </p>
                                </div>
                                <a
                                  href={article.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 flex-shrink-0"
                                  title="Open article"
                                >
                                  <ExternalLink className="h-5 w-5" />
                                </a>
                              </div>
                              <div className="mt-3">
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-gray-50"
                                >
                                  Relevance: {article.relevanceScore}/10
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    ) : (
                      <div className="text-center py-8">
                        <FileText className="mx-auto h-10 w-10 text-gray-300" />
                        <p className="text-gray-500 font-medium mt-2">
                          No news articles found
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analysis" className="pt-6">
                <div className="space-y-6">
                  {/* Detailed Risk Analysis */}
                  <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="pb-3 border-b">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ShieldAlert className="h-5 w-5 text-blue-600" />
                        Detailed Risk Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="prose max-w-none">
                        <p className="text-gray-700">
                          {person.aiAnalysis.detailedAnalysis}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommendations */}
                  <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="pb-3 border-b">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        {person.aiAnalysis.recommendations.map((rec, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded"
                          >
                            <div
                              className={`p-1 rounded-full ${
                                person.aiAnalysis.riskLevel === "HIGH"
                                  ? "bg-red-100 text-red-600"
                                  : person.aiAnalysis.riskLevel === "MEDIUM"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : "bg-green-100 text-green-600"
                              }`}
                            >
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <p className="text-sm text-gray-700">{rec}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Review Section */}
                  <Card className="border-gray-200 shadow-sm">
                    <CardHeader className="pb-3 border-b">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        Review & Decision
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Review Decision
                        </label>
                        <Select
                          value={reviewStatus}
                          onValueChange={setReviewStatus}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select review status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">
                              Pending/Under Review
                            </SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                            <SelectItem value="escalated">
                              Escalated to Compliance
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Review Rationale *
                        </label>
                        <Textarea
                          placeholder="Please provide your rationale for this review decision..."
                          value={reviewRationale}
                          onChange={(e) => setReviewRationale(e.target.value)}
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Submit Review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Reusable DetailItem component
function DetailItem({
  icon,
  label,
  value,
  spanFull = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  spanFull?: boolean;
}) {
  return (
    <div className={spanFull ? "md:col-span-2" : ""}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
        <div>
          <p className="text-xs font-medium text-gray-500">{label}</p>
          <p className="text-sm font-medium text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function FiltersSection({
  filterRiskLevel,
  setFilterRiskLevel,
  filterHasMatches,
  setFilterHasMatches,
}: {
  filterRiskLevel: string;
  setFilterRiskLevel: (value: string) => void;
  filterHasMatches: boolean | null;
  setFilterHasMatches: (value: boolean | null) => void;
}) {
  return (
    <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Filters:
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        {/* Risk Level Filter */}
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            Risk Level
          </span>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filterRiskLevel === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRiskLevel("all")}
              className="text-xs"
            >
              All
            </Button>
            <Button
              variant={filterRiskLevel === "HIGH" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRiskLevel("HIGH")}
              className="text-xs bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900/50 dark:hover:bg-red-900 dark:text-red-200"
            >
              High Risk
            </Button>
            <Button
              variant={filterRiskLevel === "MEDIUM" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRiskLevel("MEDIUM")}
              className="text-xs bg-orange-100 hover:bg-orange-200 text-orange-800 dark:bg-orange-900/50 dark:hover:bg-orange-900 dark:text-orange-200"
            >
              Medium Risk
            </Button>
            <Button
              variant={filterRiskLevel === "LOW" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRiskLevel("LOW")}
              className="text-xs bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/50 dark:hover:bg-green-900 dark:text-green-200"
            >
              Low Risk
            </Button>
          </div>
        </div>

        {/* Match Status Filter */}
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            Match Status
          </span>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filterHasMatches === null ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterHasMatches(null)}
              className="text-xs"
            >
              All
            </Button>
            <Button
              variant={filterHasMatches === true ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterHasMatches(true)}
              className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900/50 dark:hover:bg-blue-900 dark:text-blue-200"
            >
              Has Matches
            </Button>
            <Button
              variant={filterHasMatches === false ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterHasMatches(false)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700/50 dark:hover:bg-gray-700 dark:text-gray-200"
            >
              No Matches
            </Button>
          </div>
        </div>
      </div>

      {(filterRiskLevel !== "all" || filterHasMatches !== null) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setFilterRiskLevel("all");
            setFilterHasMatches(null);
          }}
          className="text-xs mt-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <X className="h-3 w-3 mr-1" />
          Clear filters
        </Button>
      )}
    </div>
  );
}

// (Keep the existing RiskBadge, StatusIndicator, SummaryCard, convertToCSV, and downloadCSV components)

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
