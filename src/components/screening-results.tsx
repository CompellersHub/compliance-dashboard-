"use client";

import { useState, useMemo } from "react";
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
  Filter,
  X,
} from "lucide-react";
import { useData } from "@/context/DataContext";

type ScreeningResult = {
  _id: string;
  fullName: string;
  matches?: any[];
  newsArticles?: any[];
  wikipediaData?: any;
  aiAnalysis?: {
    riskScore?: number;
    riskLevel?: string;
    summary?: string;
    detailedAnalysis?: string;
    riskFactors?: string[];
    recommendations?: string[];
    bioDetails?: {
      dateOfBirth?: string;
      placeOfBirth?: string;
      nationality?: string;
      occupation?: string;
      education?: string;
    };
  };
  riskScore?: number;
  riskLevel?: string;
  responseTime?: string;
  createdAt?: string;
  updatedAt?: string;
};

export function ScreeningResults() {
  const { results, isLoading, error } = useData();
  const [filterRiskLevel, setFilterRiskLevel] = useState<string>("all");
  const [filterHasMatches, setFilterHasMatches] = useState<boolean | null>(null);

  const allResults: ScreeningResult[] = useMemo(() => {
    if (!results) return [];
    return results;
  }, [results]);

  const filteredResults = useMemo(() => {
    return allResults.filter((result) => {
      const riskMatch =
        filterRiskLevel === "all" || result.riskLevel === filterRiskLevel;
      const matchesFilter =
        filterHasMatches === null ||
        (filterHasMatches
          ? result.matches?.length > 0
          : !result.matches?.length);
      return riskMatch && matchesFilter;
    });
  }, [allResults, filterRiskLevel, filterHasMatches]);

  if (isLoading) {
    return <div className="p-4 text-center">Loading screening results...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (allResults.length === 0) {
    return (
      <div className="p-4 text-gray-500">
        No screening results available. Perform a search first.
      </div>
    );
  }

  if (filteredResults.length === 0) {
    return (
      <div className="p-4 text-gray-500">
        No results match the current filters.
        <Button
          variant="ghost"
          className="ml-2"
          onClick={() => {
            setFilterRiskLevel("all");
            setFilterHasMatches(null);
          }}
        >
          Clear filters
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <FiltersSection
        filterRiskLevel={filterRiskLevel}
        setFilterRiskLevel={setFilterRiskLevel}
        filterHasMatches={filterHasMatches}
        setFilterHasMatches={setFilterHasMatches}
      />

      {/* Display all filtered results stacked vertically */}
      <div className="space-y-4">
        {filteredResults.map((result) => (
          <ResultCard key={result._id} result={result} />
        ))}
      </div>
    </div>
  );
}

// Sub-components for better organization

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
    <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
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

function MatchAlert({ matchCount }: { matchCount: number }) {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-sm font-medium flex items-center text-blue-800 dark:text-blue-300">
        <AlertTriangle className="h-4 w-4 mr-2" />
        Potential Matches ({matchCount})
      </h3>
      <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
        Found {matchCount} potential matches across watchlists
      </p>
    </div>
  );
}

function ResultCard({ result }: { result: ScreeningResult }) {
  const [reviewStatus, setReviewStatus] = useState<string>("");
  const [reviewRationale, setReviewRationale] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!reviewRationale.trim()) return;

    setLoading(true);
    try {
      await fetch(`${process.env.NEXT_BACKEND}/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          rationale: reviewRationale,
          resultId: result._id,
          status: reviewStatus
        }),
      });

      setSubmitted(true);
      setReviewRationale("");

      setTimeout(() => setSubmitted(false), 2000);
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {result.matches?.length > 0 && (
        <MatchAlert matchCount={result.matches.length} />
      )}
      
      <Card className="overflow-hidden">
        <CardHeader
          className={`${
            result.riskLevel === "HIGH"
              ? "bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800"
              : result.riskLevel === "MEDIUM"
              ? "bg-orange-50 dark:bg-orange-900/20 border-b border-orange-100 dark:border-orange-800"
              : "bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800"
          }`}
        >
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold">{result.fullName}</CardTitle>
            <Badge
              variant="outline"
              className={`${
                result.riskLevel === "HIGH"
                  ? "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-800"
                  : result.riskLevel === "MEDIUM"
                  ? "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-800"
                  : "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-800"
              }`}
            >
              {result.riskLevel} RISK (Score: {result.riskScore})
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {result.matches?.length > 0 && (
            <MatchesSection matches={result.matches} />
          )}

          <ResultTabs result={result} />

          <ReviewSection
            reviewStatus={reviewStatus}
            setReviewStatus={setReviewStatus}
            reviewRationale={reviewRationale}
            setReviewRationale={setReviewRationale}
            onSubmit={handleSubmit}
            loading={loading}
            submitted={submitted}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function MatchesSection({ matches }: { matches: any[] }) {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <h3 className="font-medium mb-3">Watchlist Matches</h3>
      {matches.map((match, index) => (
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
            {match.details?.listType && (
              <p>
                <strong>List Type:</strong> {match.details.listType}
              </p>
            )}
            {match.details?.committee && (
              <p>
                <strong>Committee:</strong> {match.details.committee}
              </p>
            )}
            {match.details?.lastUpdated && (
              <p>
                <strong>Last Updated:</strong>
                {new Date(match.details.lastUpdated).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ResultTabs({ result }: { result: ScreeningResult }) {
  return (
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
        {result.aiAnalysis?.summary && (
          <AnalysisSection
            title="Summary"
            content={result.aiAnalysis.summary}
          />
        )}
        {result.aiAnalysis?.detailedAnalysis && (
          <AnalysisSection
            title="Detailed Analysis"
            content={result.aiAnalysis.detailedAnalysis}
          />
        )}
        {result.aiAnalysis?.riskFactors?.length > 0 && (
          <ListSection
            title="Risk Factors"
            items={result.aiAnalysis.riskFactors}
          />
        )}
        {result.aiAnalysis?.recommendations?.length > 0 && (
          <ListSection
            title="Recommendations"
            items={result.aiAnalysis.recommendations}
          />
        )}
      </TabsContent>

      <TabsContent value="news">
        <NewsSection newsArticles={result.newsArticles} />
      </TabsContent>

      <TabsContent value="bio" className="space-y-4">
        <BioDetailsSection bioDetails={result.aiAnalysis?.bioDetails} />
        {result.wikipediaData && (
          <WikipediaSection wikipediaData={result.wikipediaData} />
        )}
      </TabsContent>
    </Tabs>
  );
}

function AnalysisSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm">{content}</p>
    </div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function NewsSection({ newsArticles }: { newsArticles?: any[] }) {
  return (
    <div className="space-y-4">
      <h4 className="font-medium">
        News Mentions ({newsArticles?.length || 0})
      </h4>
      {newsArticles?.length ? (
        newsArticles.map((article, index) => (
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
                {new Date(article.publishedDate).toLocaleDateString()}
              </span>
              <span className="mx-2">•</span>
              <span>Relevance: {article.relevanceScore}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">No news articles found</p>
      )}
    </div>
  );
}

function BioDetailsSection({ bioDetails }: { bioDetails?: any }) {
  if (!bioDetails) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {bioDetails.dateOfBirth && (
        <DetailItem label="Date of Birth" value={bioDetails.dateOfBirth} />
      )}
      {bioDetails.placeOfBirth && (
        <DetailItem label="Place of Birth" value={bioDetails.placeOfBirth} />
      )}
      {bioDetails.nationality && (
        <DetailItem label="Nationality" value={bioDetails.nationality} />
      )}
      {bioDetails.occupation && (
        <DetailItem label="Occupation" value={bioDetails.occupation} />
      )}
      {bioDetails.education && (
        <DetailItem label="Education" value={bioDetails.education} spanFull />
      )}
    </div>
  );
}

function DetailItem({
  label,
  value,
  spanFull = false,
}: {
  label: string;
  value: string;
  spanFull?: boolean;
}) {
  return (
    <div className={spanFull ? "md:col-span-2" : ""}>
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function WikipediaSection({ wikipediaData }: { wikipediaData: any }) {
  return (
    <div className="mt-4">
      <h4 className="font-medium mb-2">Wikipedia Data</h4>
      <a
        href={wikipediaData.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
      >
        {wikipediaData.title}
      </a>
      <p className="text-sm mt-1">{wikipediaData.extract}</p>
    </div>
  );
}

function ReviewSection({
  reviewStatus,
  setReviewStatus,
  reviewRationale,
  setReviewRationale,
  onSubmit,
  loading,
  submitted,
}: {
  reviewStatus: string;
  setReviewStatus: (value: string) => void;
  reviewRationale: string;
  setReviewRationale: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
  submitted: boolean;
}) {
  return (
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
              <SelectItem value="pending">Pending/Under Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="escalated">Escalated to Compliance</SelectItem>
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
        <Button
          onClick={onSubmit}
          disabled={loading || submitted}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <CheckCircle className="mr-2 h-4 w-4" /> Submit Review
        </Button>
      </div>
    </div>
  );
}