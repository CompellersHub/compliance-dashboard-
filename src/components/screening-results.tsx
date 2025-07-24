"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertTriangle,
  CheckCircle,
  FileText,
  Globe,
  User,
} from "lucide-react";
import { useData } from "@/context/DataContext";

export function ScreeningResults() {
  const { results, isLoading, error } = useData();
  const [reviewStatus, setReviewStatus] = useState<string>("");
  const [reviewRationale, setReviewRationale] = useState<string>("");

  if (isLoading)
    return <div className="p-4 text-center">Loading screening results...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!results)
    return (
      <div className="p-4 text-gray-500">
        No screening results available. Perform a search first.
      </div>
    );

  // The API response is now in results.data array
  const screeningData = (results as any).data?.[0] || results;

  return (
    <div className="space-y-6">
      {screeningData.matches?.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-sm font-medium flex items-center text-blue-800 dark:text-blue-300">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Potential Matches ({screeningData.matches.length})
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
            Found {screeningData.matches.length} potential matches across
            watchlists
          </p>
        </div>
      )}

      <Card className="overflow-hidden">
        <CardHeader
          className={`${
            screeningData.riskLevel === "HIGH"
              ? "bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800"
              : screeningData.riskLevel === "MEDIUM"
              ? "bg-orange-50 dark:bg-orange-900/20 border-b border-orange-100 dark:border-orange-800"
              : "bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800"
          }`}
        >
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold">
              {screeningData.fullName}
            </CardTitle>
            <Badge
              variant="outline"
              className={`${
                screeningData.riskLevel === "HIGH"
                  ? "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-800"
                  : screeningData.riskLevel === "MEDIUM"
                  ? "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-800"
                  : "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-800"
              }`}
            >
              {screeningData.riskLevel} RISK (Score: {screeningData.riskScore})
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {screeningData.matches?.length > 0 && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-medium mb-3">Watchlist Matches</h3>
              {(screeningData.matches as any[]).map((match, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="font-medium">
                      {match.source} Match
                    </Badge>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {match.matchPercentage}% Match
                    </span>
                  </div>
                  <div className="text-sm space-y-2">
                    <p>
                      <strong>Name:</strong> {match.name}
                    </p>
                    <p>
                      <strong>List Type:</strong> {match.details?.listType}
                    </p>
                    <p>
                      <strong>Committee:</strong> {match.details?.committee}
                    </p>
                    <p>
                      <strong>Last Updated:</strong>{" "}
                      {new Date(
                        match.details?.lastUpdated
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Tabs defaultValue="analysis" className="p-4">
            <TabsList className="mb-4">
              <TabsTrigger value="analysis" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                AI Analysis
              </TabsTrigger>
              <TabsTrigger value="news" className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                News Articles
              </TabsTrigger>
              <TabsTrigger value="bio" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Bio Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analysis" className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Summary</h4>
                <p className="text-sm">{screeningData.aiAnalysis?.summary}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Detailed Analysis</h4>
                <p className="text-sm">
                  {screeningData.aiAnalysis?.detailedAnalysis}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Risk Factors</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {screeningData.aiAnalysis?.riskFactors?.map(
                    (factor: any, index: number) => (
                      <li key={index}>{factor}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Recommendations</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {screeningData.aiAnalysis?.recommendations?.map(
                    (rec: any, index: number) => (
                      <li key={index}>{rec}</li>
                    )
                  )}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="news">
              <div className="space-y-4">
                <h4 className="font-medium">
                  News Mentions ({screeningData.newsArticles?.length || 0})
                </h4>
                {screeningData.newsArticles?.length > 0 ? (
                  screeningData.newsArticles.map(
                    (article: any, index: number) => (
                      <div
                        key={index}
                        className="text-sm border-b pb-4 last:border-b-0 last:pb-0"
                      >
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          {article.title}
                        </a>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {article.snippet}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>{article.source}</span>
                          <span className="mx-2">•</span>
                          <span>
                            {new Date(
                              article.publishedDate
                            ).toLocaleDateString()}
                          </span>
                          <span className="mx-2">•</span>
                          <span>Relevance: {article.relevanceScore}</span>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <p className="text-sm text-gray-500">
                    No news articles found
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="bio" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Date of Birth
                  </p>
                  <p className="text-sm">
                    {screeningData.aiAnalysis?.bioDetails?.dateOfBirth ||
                      "Not available"}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Place of Birth
                  </p>
                  <p className="text-sm">
                    {screeningData.aiAnalysis?.bioDetails?.placeOfBirth ||
                      "Not available"}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Nationality
                  </p>
                  <p className="text-sm">
                    {screeningData.aiAnalysis?.bioDetails?.nationality ||
                      "Not available"}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Occupation
                  </p>
                  <p className="text-sm">
                    {screeningData.aiAnalysis?.bioDetails?.occupation ||
                      "Not available"}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Education
                  </p>
                  <p className="text-sm">
                    {screeningData.aiAnalysis?.bioDetails?.education ||
                      "Not available"}
                  </p>
                </div>
              </div>
              {screeningData.wikipediaData && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Wikipedia Data</h4>
                  <a
                    href={screeningData.wikipediaData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    {screeningData.wikipediaData.title}
                  </a>
                  <p className="text-sm mt-1">
                    {screeningData.wikipediaData.extract}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Review Decision
                </label>
                <Select value={reviewStatus} onValueChange={setReviewStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pending/Under Review" />
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
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Full Report
                </Button>
                <Button variant="outline" className="flex-1">
                  Create Case
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Review Rationale *
              </label>
              <Textarea
                placeholder="Please provide your rationale for this review decision..."
                value={reviewRationale}
                onChange={(e) => setReviewRationale(e.target.value)}
                className="resize-none"
                rows={3}
              />
            </div>

            <div className="flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <CheckCircle className="mr-2 h-4 w-4" />
                Submit Review
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
