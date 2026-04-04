export async function POST(req) {
  return Response.json({ number: 12345 });
}

export async function GET(req) {
  return new Response("Nothing to see here.");
}
