// import { NextApiRequest, NextApiResponse } from 'next';
// import { fetchBackend } from '@/utils/api';
// import { ApiResponse, AlertAnalysisData } from '@/types/api';
// // import { AlertAnalysisData } from 

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ApiResponse<AlertAnalysisData[]>>
// ) {
//   try {
//     if (req.method !== 'GET') {
//       return res.status(405).json({ 
//         success: false, 
//         status: 405, 
//         data: [] 
//       });
//     }

//     const data = await fetchBackend<ApiResponse<AlertAnalysisData[]>>('/alert-analysis');
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error in /api/alert-analysis:', error);
//     res.status(500).json({ 
//       success: false, 
//       status: 500, 
//       data: [] 
//     });
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const backendUrl = `${process.env.NEXT_BACKEND}/api/alert-analysis`;
    console.log('Fetching from:', backendUrl);

    const response = await fetch(backendUrl);
    const data = await response.json();

    console.log('Received data:', JSON.stringify(data, null, 2));

    return new NextResponse(JSON.stringify(data, null, 2), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      }
    });

  } catch (error) {
    console.error("Error in /api/recent-alerts:", error);
    
    // Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return new NextResponse(JSON.stringify({
      error: "Failed to fetch recent alerts",
      details: errorMessage
    }, null, 2), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}