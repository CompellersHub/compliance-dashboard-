"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Import Suspense

import { QuickScreenForm } from "@/components/quick-screen-form";
import { BatchScreenForm } from "@/components/batch-screen-form";
import { BatchResults } from "@/components/batch-screen-results";
import { ScreeningResults } from "@/components/screening-results";
import { AlertPage } from "@/components/alert-analysis";
import { MonthlyScreeningData } from "@/components/monthly-screening";

// Create a separate component for the content that uses useSearchParams
function DashboardContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "dashboard";

  const TabContent = () => {
    switch (activeTab) {
      case "batch-screen":
        return (
          <div>
            <BatchScreenForm />
            <BatchResults />
          </div>
        );
      case "quick-screen":
        return (
          <div className="space-y-8 w-full">
            <QuickScreenForm />
            <ScreeningResults />
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
            <MonthlyScreeningData/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow w-full">
        <TabContent />
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

// import type { Metadata } from "next";
// import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
// import React from "react";
// import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
// import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "@/components/ecommerce/StatisticsChart";
// import RecentOrders from "@/components/ecommerce/RecentOrders";
// import DemographicCard from "@/components/ecommerce/DemographicCard";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | compellerdigitals - Next.js Dashboard Template",
//   description: "This is Next.js Home for compellerdigitals Dashboard Template",
// };

// export default function Ecommerce() {
//   return (
//     <div className="grid grid-cols-12 gap-4 md:gap-6">
//       <div className="col-span-12 space-y-6 xl:col-span-7">
//         <EcommerceMetrics />

//         <MonthlySalesChart />
//       </div>

//       <div className="col-span-12 xl:col-span-5">
//         <MonthlyTarget />
//       </div>

//       <div className="col-span-12">
//         <StatisticsChart />
//       </div>

//       <div className="col-span-12 xl:col-span-5">
//         <DemographicCard />
//       </div>

//       <div className="col-span-12 xl:col-span-7">
//         <RecentOrders />
//       </div>
//     </div>
//   );
// }
