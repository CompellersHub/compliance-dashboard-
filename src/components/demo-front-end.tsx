"use client";

import { useData } from "@/context/DataContext";
import { useEffect } from "react";


export function AlertPage() {
   const { 
      recentAlertsData,
      isRecentAlertsLoading,
      getRecentAlerts,
      alertAnalysisData,
      isAlertAnalysisLoading,
      getAlertAnalysis
    } = useData();
  
   
  
    if (isRecentAlertsLoading || isAlertAnalysisLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>Recent Alerts</h2>
        <pre>{JSON.stringify(recentAlertsData, null, 2)}</pre>
        
        <h2>Alert Analysis</h2>
        <pre>{JSON.stringify(alertAnalysisData, null, 2)}</pre>
      </div>
    );
}