"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, AlertCircle, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useData } from "@/context/DataContext";

export function MonthlyScreeningData() {
  const {
    isMonthlyScreeningLoading,
    getMonthlyScreening,
    monthlyScreeningData,
  } = useData();

  if (!monthlyScreeningData?.data) return null;

  const chartData = monthlyScreeningData.data.map((item: any) => ({
    name: item.label,
    screenings: item.totalScreening,
    alerts: item.alertGenerate,
  }));

  const totalScreenings = monthlyScreeningData.data.reduce(
    (sum: number, item: any) => sum + item.totalScreening,
    0
  );
  const totalAlerts = monthlyScreeningData.data.reduce(
    (sum: number, item: any) => sum + item.alertGenerate,
    0
  );
  const alertRate =
    totalScreenings > 0 ? (totalAlerts / totalScreenings) * 100 : 0;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Monthly Screening Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Screenings</span>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalScreenings}</div>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Alerts Generated</span>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAlerts}</div>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Alert Rate</span>
                <Badge variant={alertRate > 5 ? "destructive" : "success"}>
                  {alertRate.toFixed(1)}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {alertRate > 5 ? "Higher than average" : "Within normal range"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} width={40} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Bar
                dataKey="screenings"
                name="Screenings"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="alerts"
                name="Alerts"
                fill="hsl(var(--destructive))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Breakdown */}
        <div className="mt-6">
          <h3 className="font-medium mb-3">Monthly Breakdown</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {monthlyScreeningData.data.map((month: any) => (
              <Card key={month.label} className="text-center">
                <CardHeader className="p-3 pb-0">
                  <span className="text-sm font-medium">{month.label}</span>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">
                      Screenings
                    </div>
                    <div className="font-medium">{month.totalScreening}</div>
                    <div className="text-xs text-muted-foreground">Alerts</div>
                    <div
                      className={`font-medium ${
                        month.alertGenerate > 0 ? "text-destructive" : ""
                      }`}
                    >
                      {month.alertGenerate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
