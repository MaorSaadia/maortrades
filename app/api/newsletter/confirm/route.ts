import { NextRequest, NextResponse } from "next/server";
import { confirmSubscription } from "@/lib/email/service";
import { getSiteUrl } from "@/lib/site-url";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return redirectToStatus("invalid");
  }

  const result = await confirmSubscription(token);

  return redirectToStatus(result.status, result.resourceSlug);
}

function redirectToStatus(status: string, resourceSlug?: string) {
  const url = new URL("/newsletter/confirmed", getSiteUrl());
  url.searchParams.set("status", status);

  if (resourceSlug) {
    url.searchParams.set("resource", resourceSlug);
  }

  return NextResponse.redirect(url);
}
