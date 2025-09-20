// API Route (/api/screen/route.ts)
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const requestBody = await req.json();
    console.log("=== API ROUTE DEBUG ===");
    console.log("Incoming request body:", JSON.stringify(requestBody, null, 2));
    
    // const authHeader = req.headers.get("authorization");
    // if (!authHeader) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    
    // Forward to external API
    const externalRes = await fetch("https://titan-learn.onrender.com/api/smart-search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: authHeader,
      },
      body: JSON.stringify(requestBody),
    });

    console.log("External API status:", externalRes.status);
    console.log("External API headers:", Object.fromEntries(externalRes.headers.entries()));

    if (!externalRes.ok) {
      const error = await externalRes.json();
      console.error("External API error:", error);
      return NextResponse.json({ error: error.message || "External API error" }, { status: externalRes.status });
    }

    const responseData = await externalRes.json();
    console.log("External API response:", JSON.stringify(responseData, null, 2));
    console.log("Response type:", typeof responseData);
    console.log("Response keys:", Object.keys(responseData));
    
    // Check specific properties
    console.log("Has matches?", 'matches' in responseData);
    console.log("matches value:", responseData.matches);
    console.log("matches type:", typeof responseData.matches);
    
    return NextResponse.json(responseData);
  } catch (error) {
    console.error("API route error:", error);
    console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}