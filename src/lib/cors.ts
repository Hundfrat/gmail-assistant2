export function corsHeaders() {
return {
'Access-Control-Allow-Origin': 'chrome-extension://hcbcmkbjfieakpdcejeoanepgkephicm',
'Access-Control-Allow-Credentials': 'true',
'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
}

export async function corsMiddleware(request: Request, response: Response) {
if (request.method === 'OPTIONS') {
return new Response(null, {
status: 204,
headers: corsHeaders(),
});
}
}