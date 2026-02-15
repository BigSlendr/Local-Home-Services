import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("[North Peak Lead Submission]", body);
  // TODO: Replace console logging with email delivery (Resend/Formspree) for production.
  // TODO: Add spam prevention (honeypot + rate limiting) before going live.

  return NextResponse.json({ ok: true });
}
