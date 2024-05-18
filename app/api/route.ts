import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  return Response.json({ data: "Text sent from the route handler" })
}
