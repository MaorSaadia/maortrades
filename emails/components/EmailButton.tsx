import { Button } from "react-email";

export function EmailButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      href={href}
      style={{
        backgroundColor: "#14213d",
        color: "#f7f4ed",
        display: "inline-block",
        fontSize: "14px",
        fontWeight: "700",
        margin: "22px 0",
        padding: "14px 22px",
        textDecoration: "none",
      }}
    >
      {children}
    </Button>
  );
}
