import "server-only";

import { existsSync } from "node:fs";
import path from "node:path";
import type { FreeResource } from "@/types/resource";

export type ResourceDeliveryState =
  | { status: "email-gated"; fileUrl: string; fileName: string }
  | { status: "direct-download"; fileUrl: string; fileName: string }
  | { status: "coming-soon" }
  | { status: "unavailable"; reason: string };

export function getResourceDeliveryState(
  resource: FreeResource,
): ResourceDeliveryState {
  if (resource.access.status === "coming-soon") {
    return { status: "coming-soon" };
  }

  if (resource.access.status === "unavailable") {
    return { status: "unavailable", reason: "Resource access is unavailable." };
  }

  const fileUrl = normalizePublicFilePath(resource.access.filePath);

  if (!fileUrl) {
    return {
      status: "unavailable",
      reason: "No verified downloadable file is configured for this resource.",
    };
  }

  const publicFilePath = path.join(process.cwd(), "public", fileUrl);

  if (!existsSync(publicFilePath)) {
    return {
      status: "unavailable",
      reason: "The configured downloadable file could not be verified.",
    };
  }

  return {
    status: resource.access.status,
    fileUrl,
    fileName: resource.access.fileName ?? path.basename(fileUrl),
  };
}

export function isResourceEmailDeliverable(resource: FreeResource) {
  return getResourceDeliveryState(resource).status === "email-gated";
}

function normalizePublicFilePath(filePath?: string) {
  if (!filePath || !filePath.startsWith("/") || filePath.includes("..")) {
    return null;
  }

  return filePath.replace(/\\/g, "/");
}
