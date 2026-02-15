import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const required = ["name", "phone", "zip", "service"] as const;

  for (const field of required) {
    if (!body[field] || !String(body[field]).trim()) {
      return NextResponse.json({ ok: false, error: `${field} is required` }, { status: 400 });
    }
  }

  console.log("Quote submission:", body);
  return NextResponse.json({ ok: true });
}
