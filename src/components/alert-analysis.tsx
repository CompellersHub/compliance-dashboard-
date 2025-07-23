"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, BarChart2, Calendar, Globe } from "lucide-react";
import { useData } from "@/context/DataContext";

export function AlertPage() {
  const {
    recentAlertsData,
    isRecentAlertsLoading,
    alertAnalysisData,
    isAlertAnalysisLoading,
  } = useData();

  if (isRecentAlertsLoading || isAlertAnalysisLoading) {
    return <div className="p-4 text-center">Loading alert data...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {recentAlertsData?.data?.totalDocs || 0}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              High Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge variant="destructive" className="px-2 py-1">
                {recentAlertsData?.data?.docs?.filter(
                  (alert: any) => alert.riskLevel === "HIGH"
                ).length || 0}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {(
                  (recentAlertsData?.data?.docs?.filter(
                    (alert: any) => alert.riskLevel === "HIGH"
                  ).length /
                    recentAlertsData?.data?.totalDocs) *
                    100 || 0
                ).toFixed(1)}
                %
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Risk Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {recentAlertsData?.data?.docs?.reduce(
                (acc: number, alert: any) => acc + alert.riskScore,
                0
              ) / recentAlertsData?.data?.docs?.length || 0}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="recent">
        <TabsList>
          <TabsTrigger value="recent" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Recent Alerts
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4" />
            Alert Analysis
          </TabsTrigger>
        </TabsList>

        {/* Recent Alerts Tab */}
        <TabsContent value="recent" className="space-y-4">
          {recentAlertsData?.data?.docs?.length > 0 ? (
            <div className="space-y-4">
              {recentAlertsData.data.docs.map((alert: any) => (
                <Card key={alert._id}>
                  <CardHeader
                    className={`pb-3 ${
                      alert.riskLevel === "HIGH"
                        ? "bg-red-50 dark:bg-red-900/20"
                        : alert.riskLevel === "MEDIUM"
                        ? "bg-orange-50 dark:bg-orange-900/20"
                        : "bg-green-50 dark:bg-green-900/20"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <CardTitle>{alert.fullName}</CardTitle>
                      <Badge
                        variant={
                          alert.riskLevel === "HIGH"
                            ? "destructive"
                            : alert.riskLevel === "MEDIUM"
                            ? "secondary" // Changed from "warning"
                            : "default" // Changed from "success"
                        }
                        className={
                          alert.riskLevel === "MEDIUM"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300"
                            : alert.riskLevel === "LOW"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                            : ""
                        }
                      >
                        {/* <Badge
                        variant={
                          alert.riskLevel === "HIGH"
                            ? "destructive"
                            : alert.riskLevel === "MEDIUM"
                            ? "warning"
                            : "success"
                        }
                      > */}
                        {alert.riskLevel} RISK ({alert.riskScore})
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">AI Summary</h4>
                        <p className="text-sm">{alert.aiAnalysis?.summary}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">News Mentions</h4>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          <span>
                            {alert.newsArticles?.length || 0} articles
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Last Updated</h4>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(alert.updatedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No recent alerts found
            </div>
          )}
        </TabsContent>

        {/* Alert Analysis Tab */}
        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <CardTitle>Alert Trend Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertAnalysisData?.data?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-4">
                        Positive vs Negative Alerts
                      </h4>
                      <div className="space-y-4">
                        {alertAnalysisData.data.map((month: any) => (
                          <div key={month.label} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{month.label}</span>
                              <span className="text-muted-foreground">
                                {month.positive} positive / {month.negative}{" "}
                                negative
                              </span>
                            </div>
                            <div className="flex h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                              <div
                                className="bg-green-500"
                                style={{
                                  width: `${
                                    (month.positive /
                                      (month.positive + month.negative || 1)) *
                                    100
                                  }%`,
                                }}
                              />
                              <div
                                className="bg-red-500"
                                style={{
                                  width: `${
                                    (month.negative /
                                      (month.positive + month.negative || 1)) *
                                    100
                                  }%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">Risk Distribution</h4>
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="text-4xl font-bold">
                            {recentAlertsData?.data?.docs?.filter(
                              (a: any) => a.riskLevel === "HIGH"
                            ).length || 0}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            High Risk Alerts
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No alert analysis data available
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
