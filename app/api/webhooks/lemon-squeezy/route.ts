import { NextResponse } from "next/server";
import { handleLemonSqueezyWebhook } from "@/lib/commerce/webhooks";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-signature");
  const result = await handleLemonSqueezyWebhook({ rawBody, signature });

  if (result.status === "ok") {
    return NextResponse.json({ ok: true });
  }

  if (result.status === "configuration-error") {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  if (result.status === "invalid-json") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
