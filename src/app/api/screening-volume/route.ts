// import { NextApiRequest, NextApiResponse } from 'next';
// import { fetchBackend } from '@/utils/api';
// import { ApiResponse, ScreeningVolumeData } from '@/types/api';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ApiResponse<ScreeningVolumeData[]>>
// ) {
//   try {
//     if (req.method !== 'GET') {
//       return res.status(405).json({ 
//         success: false, 
//         status: 405, 
//         data: [] 
//       });
//     }

//     const data = await fetchBackend<ApiResponse<ScreeningVolumeData[]>>('/screening-volume');
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error in /api/screening-volume:', error);
//     res.status(500).json({ 
//       success: false, 
//       status: 500, 
//       data: [] 
//     });
//   }
// }

import { NextResponse } from 'next/server';
import { fetchBackend } from '@/utils/api';
import { ApiResponse, ScreeningVolumeData } from '@/types/api';

export async function GET() {
  try {
    const data = await fetchBackend<ApiResponse<ScreeningVolumeData[]>>('/screening-volume');
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in /api/screening-volume:', error);
    return NextResponse.json({ 
      success: false, 
      status: 500, 
      data: [] 
    }, { status: 500 });
  }
}

// Add this to explicitly disallow other methods
export async function POST() {
  return NextResponse.json(
    { success: false, status: 405, data: [] },
    { status: 405 }
  );
}