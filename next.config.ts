import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const headers = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), browsing-topics=()" },
      { key: "Content-Security-Policy-Report-Only", value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self' https://app.lemonsqueezy.com; script-src 'self' 'unsafe-inline' https://app.lemonsqueezy.com https://www.googletagmanager.com https://s.pinimg.com; connect-src 'self' https://api.lemonsqueezy.com https://app.lemonsqueezy.com https://www.google-analytics.com https://region1.google-analytics.com https://ct.pinterest.com https://api.pinterest.com; img-src 'self' data: https://www.google-analytics.com https://ct.pinterest.com https://i.pinimg.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-src https://app.lemonsqueezy.com" },
    ];
    if (process.env.NODE_ENV === "production") headers.push({ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" });
    return [{ source: "/(.*)", headers }];
  },
};

export default nextConfig;
