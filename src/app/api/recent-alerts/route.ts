import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const backendUrl = `${process.env.NEXT_BACKEND}/api/recent-alerts`;
    console.log("Fetching from:", backendUrl);

    const response = await fetch(backendUrl);
    const data = await response.json();

    // Properly stringify the entire response with indentation
    console.log("Received data:", JSON.stringify(data, null, 2));

    // Return the complete data exactly as received
    return new NextResponse(JSON.stringify(data, null, 2), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in /api/recent-alerts:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return new NextResponse(
      JSON.stringify(
        {
          error: "Failed to fetch recent alerts",

          details: errorMessage,
        },
        null,
        2
      ),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
