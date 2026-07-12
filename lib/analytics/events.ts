export type AnalyticsItem = { itemId: string; itemName: string; itemType: "book" | "collection"; category: string; series?: string; price?: number; currency?: string; quantity: number };
type Context = { product_type?: "book" | "collection"; product_slug?: string; source?: string };
export type AnalyticsEvent =
  | { name: "page_view"; page_path: string; page_location: string; page_title: string }
  | { name: "view_catalogue"; item_list_id: string; item_list_name: string; items: AnalyticsItem[] }
  | { name: "select_catalogue_item"; item_list_id: string; item_list_name: string; items: [AnalyticsItem]; source: string }
  | { name: "view_commerce_item"; items: [AnalyticsItem] }
  | { name: "article_view"; article_slug: string; article_category?: string }
  | { name: "resource_view"; resource_slug: string; resource_type?: string; resource_category?: string }
  | { name: "start_here_recommendation_selected"; recommendation_type: string; target_type: string; target_slug: string; reader_situation?: string }
  | { name: "newsletter_confirmation_requested"; source: string }
  | { name: "newsletter_confirmed" }
  | { name: "resource_requested" | "resource_confirmed"; resource_slug: string; resource_type?: string }
  | ({ name: "checkout_started"; items: [AnalyticsItem]; event_id: string; checkout_source: string } & Context)
  | ({ name: "my_orders_clicked" | "purchase_access_help_opened" | "start_here_clicked_after_purchase"; target_slug?: string } & Context)
  | ({ name: "post_purchase_article_clicked" | "post_purchase_resource_clicked"; target_slug: string } & Context);

export type CheckoutAnalyticsContext = { analytics_consent: boolean; marketing_consent: boolean; ga_client_id?: string; pinterest_click_id?: string };
