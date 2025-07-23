// api/batchscreening

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type");
    
    // Handle multipart form data (CSV file upload)
    if (contentType?.includes("multipart/form-data")) {
      const formData = await req.formData();
      const file = formData.get("document") as File | null; // Changed from "file" to "document"
      
      if (!file) {
        return NextResponse.json(
          { error: "No file provided. Expected field name 'document'" },
          { status: 400 }
        );
      }
      
      if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
        return NextResponse.json(
          { error: "Only CSV files are allowed" },
          { status: 400 }
        );
      }
      
      // Forward to external API for batch processing
      const externalRes = await fetch("https://titan-learn.onrender.com/api/batch-screening", {
        method: "POST",
        headers: {
          "accept": "text/html; charset=utf-8", // Added accept header
          // Authorization: authHeader,
        },
        body: formData,
      });

      if (!externalRes.ok) {
        const error = await externalRes.text(); // Changed to text() as response might be HTML
        return NextResponse.json(
          { error: error || "External API error" },
          { status: externalRes.status }
        );
      }

      // Check response type - HTML first (per accept header), then CSV, then JSON
      const responseContentType = externalRes.headers.get("content-type");
      
      if (responseContentType?.includes("text/html")) {
        const html = await externalRes.text();
        return new NextResponse(html, {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
          },
        });
      } else if (responseContentType?.includes("text/csv")) {
        const csvData = await externalRes.text();
        return new NextResponse(csvData, {
          headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": "attachment; filename=results.csv",
          },
        });
      } else {
        return NextResponse.json(await externalRes.json());
      }
    }
    // Handle regular JSON payload (original smart-search)
    else {
      const externalRes = await fetch("https://titan-learn.onrender.com/api/smart-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: authHeader,
        },
        body: JSON.stringify(await req.json()),
      });

      if (!externalRes.ok) {
        const error = await externalRes.json();
        return NextResponse.json(
          { error: error.message || "External API error" },
          { status: externalRes.status }
        );
      }

      return NextResponse.json(await externalRes.json());
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}