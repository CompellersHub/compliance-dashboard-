// utils/api.ts
const API_BASE_URL = process.env.NEXT_BACKEND;

export const fetchBackend = async <T>(endpoint: string): Promise<T> => {
  if (!API_BASE_URL) {
    throw new Error('NEXT_BACKEND environment variable is not set');
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`);
//   if (!response.ok) {
//     throw new Error(`API request failed: ${response.statusText}`);
//   }
  return response.json();
};