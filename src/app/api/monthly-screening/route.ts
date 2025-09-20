import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const backendUrl = `${process.env.NEXT_BACKEND}/api/monthly-screening`;
    console.log('Fetching from:', backendUrl);

    const response = await fetch(backendUrl);
    
    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Backend responded with status ${response.status}`);
    }

    const data = await response.json();
    console.log('Received data:', JSON.stringify(data, null, 2));

    return new NextResponse(JSON.stringify(data, null, 2), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      }
    });

  } catch (error) {
    console.error("Error in /api/monthly-screening:", error);
    
    // Type-safe error message extraction
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    return new NextResponse(JSON.stringify({
      error: "Failed to fetch screening data",
      details: errorMessage
    }, null, 2), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}