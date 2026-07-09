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
  ],
  legal: [
    { label: "Privacy", href: "#legal" },
    { label: "Terms", href: "#legal" },
    { label: "Refund Policy", href: "#legal" },
    { label: "Disclaimer", href: "#legal" },
  ],
} satisfies Record<string, NavigationItem[]>;
