"use client";
import { useSearchParams } from "next/navigation";

import { QuickScreenForm } from "@/components/quick-screen-form";
// import { ScreeningResults } from "@/components/screening-results";
import { BatchScreenForm } from "@/components/batch-screen-form";
import { BatchResults } from "@/components/batch-screen-results";
import { ScreeningResults } from "@/components/screening-results";
import { AlertPage } from "@/components/alert-analysis";
import { MonthlyScreeningData } from "@/components/monthly-screening";

// import CalendarPage from "../(admin)/(others-pages)/calendar/page";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  // const router = useRouter();
  const activeTab = searchParams.get("tab") || "quick-screen";

  

  // Demo components - replace with your actual imports
  const TabContent = () => {
    switch (activeTab) {
      //   case "dashboard":
      //     return <DashboardContent />;
      case "batch-screen":
        return (
          <div>
            <BatchScreenForm />
            <BatchResults />
          </div>
        );

      case "quick-screen":
        // return <CalendarPage />;
        // return <QuickScreenForm />;
        return (
          <div className="space-y-8 w-full">
            <QuickScreenForm />
            <ScreeningResults />
          </div>
        );

      case "alert-analysis":
        // return <CalendarPage />;
        // return <QuickScreenForm />;
        return (
          <div className="space-y-8 w-full">
            <AlertPage />
            {/* <ScreeningResults /> */}
          </div>
        );
      case "alert-analysis":
        // return <CalendarPage />;
        // return <QuickScreenForm />;
        return (
          <div className="space-y-8 w-full">
            <AlertPage />
            {/* <ScreeningResults /> */}
          </div>
        );
      case "monthly-screening":
        // return <CalendarPage />;
        // return <QuickScreenForm />;
        return (
          <div className="space-y-8 w-full">
            <MonthlyScreeningData/>
            {/* <ScreeningResults /> */}
          </div>
        );
      //   case "settings":
      //     return <SettingsContent />;
      //   default:
      //     return <DashboardContent />;
    }
  };

  return (
    <div className="">
      {/* Main Content Area */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow w-full">
        <TabContent />
      </div>
    </div>
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
