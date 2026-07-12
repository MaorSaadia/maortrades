export type NavigationItem = {
  label: string;
  href: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Books", href: "/books" },
  { label: "Collections", href: "/collections" },
  { label: "Start Here", href: "/start-here" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
];

export const footerNavigation = {
  books: [
    { label: "All Books", href: "/books" },
    { label: "Collections", href: "/collections" },
    { label: "Start Here", href: "/start-here" },
  ],
  resources: [
    { label: "Articles", href: "/articles" },
    { label: "Free Resources", href: "/resources" },
    { label: "Newsletter", href: "/resources#newsletter" },
  ],
  about: [
    { label: "About Maor", href: "/about" },
    { label: "Educational Philosophy", href: "/about#approach" },
    { label: "The Library", href: "/about#library" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Access Purchases", href: "/purchase/access" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} satisfies Record<string, NavigationItem[]>;
