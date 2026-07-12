export {};
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: {
      (command: "js", date: Date): void;
      (command: "config", id: string, parameters: { send_page_view: false; debug_mode?: boolean }): void;
      (command: "consent", action: "update", parameters: { analytics_storage: "granted" | "denied"; ad_storage: "granted" | "denied" }): void;
      (command: "event", name: string, parameters?: Record<string, unknown>): void;
      (command: "get", id: string, field: "client_id", callback: (value: unknown) => void): void;
    };
    pintrk?: (command: "load" | "page" | "track", tagOrEvent: string, parameters?: Record<string, unknown>) => void;
  }
}
