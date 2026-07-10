import { NextResponse } from "next/server";
import { createProductCheckout } from "@/lib/commerce/service";
import type {
  CheckoutCreateRequest,
  CheckoutCreateResponse,
} from "@/lib/commerce/types";
import {
  parseCheckoutSource,
  parseCommerceTarget,
} from "@/lib/commerce/validation";

export const runtime = "nodejs";

const maxBodyBytes = 4096;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > maxBodyBytes) {
    return json(
      {
        status: "invalid-product",
        message: "This checkout request is not valid.",
      },
      400,
    );
  }

  let body: CheckoutCreateRequest;

  try {
    body = (await request.json()) as CheckoutCreateRequest;
  } catch {
    return json(
      {
        status: "invalid-product",
        message: "This checkout request is not valid.",
      },
      400,
    );
  }

  if (
    body.variantId !== undefined ||
    body.price !== undefined ||
    body.redirectUrl !== undefined
  ) {
    return json(
      {
        status: "invalid-product",
        message: "This checkout request is not valid.",
      },
      400,
    );
  }

  const target = parseCommerceTarget(body.type, body.slug);
  const source = parseCheckoutSource(body.source);

  if (!target || !source) {
    return json(
      {
        status: "invalid-product",
        message: "This checkout request is not valid.",
      },
      400,
    );
  }

  const result = await createProductCheckout({ target, source });

  if (result.status === "success") {
    return json({ status: "success", url: result.url }, 200);
  }

  if (result.status === "invalid-product") {
    return json(
      {
        status: "invalid-product",
        message: "This checkout request is not valid.",
      },
      400,
    );
  }

  if (result.status === "configuration-error") {
    return json(
      {
        status: "configuration-error",
        message: result.reason,
      },
      503,
    );
  }

  if (result.status === "provider-error") {
    return json(
      {
        status: "provider-error",
        message: "Checkout could not be opened right now. Please try again.",
      },
      502,
    );
  }

  return json(
    {
      status: "unavailable",
      message: "Direct purchase is temporarily unavailable.",
    },
    409,
  );
}

function json(body: CheckoutCreateResponse, status: number) {
  return NextResponse.json(body, { status });
}
