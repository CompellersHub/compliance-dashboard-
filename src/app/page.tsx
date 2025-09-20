"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { QuickScreenForm } from "@/components/quick-screen-form";
import { BatchScreenForm } from "@/components/batch-screen-form";
import { BatchResults } from "@/components/batch-screen-results";
// import { ScreeningResults } from "@/components/screening-results";
import { AlertPage } from "@/components/alert-analysis";
import { MonthlyScreeningData } from "@/components/monthly-screening";
import { ScreeningResults } from "@/components/screening-results";
// import ScreeningResults from "@/components/screening-results";

function DashboardContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "quick-screen";

  const TabContent = () => {
    switch (activeTab) {
      case "quick-screen":
        return (
          <div className="space-y-8 w-full">
            <QuickScreenForm />
            <ScreeningResults />
          </div>
        );
      case "batch-screen":
        return (
          <div>
            <BatchScreenForm />
            <BatchResults />
          </div>
        );

      case "alert-analysis":
        return (
          <div className="space-y-8 w-full">
            <AlertPage />
          </div>
        );

      case "monthly-screening":
        return (
          <div className="space-y-8 w-full">
            <MonthlyScreeningData />
          </div>
        );

      default:
        return (
          <div className="space-y-8 w-full">
            <QuickScreenForm />
            <ScreeningResults />
          </div>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow w-full">
      <TabContent />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
