import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { corsHeaders } from "@/lib/cors";

export const GET = async (req: Request) => {
// Handle CORS preflight
if (req.method === 'OPTIONS') {
return new Response(null, {
status: 204,
headers: corsHeaders(),
});
}

const session = await getServerSession(authOptions);
const response = NextResponse.json({ authenticated: !!session });
// Add CORS headers
Object.entries(corsHeaders()).forEach(([key, value]) => {
response.headers.set(key, value);
});
return response;
}