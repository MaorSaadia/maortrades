import { Heading, Link, Text } from "react-email";
import { EmailFooter } from "@/emails/components/EmailFooter";
import { EmailLayout } from "@/emails/components/EmailLayout";

const linkStyle = {
  color: "#14213d",
  fontWeight: "700",
  textDecoration: "underline",
} as const;

export function WelcomeToMaorTradesEmail({
  startHereUrl,
  booksUrl,
  collectionsUrl,
  articlesUrl,
  resourcesUrl,
}: {
  startHereUrl: string;
  booksUrl: string;
  collectionsUrl: string;
  articlesUrl: string;
  resourcesUrl: string;
}) {
  return (
    <EmailLayout preview="Books, frameworks, trading education, and structured development.">
      <Heading
        as="h1"
        style={{
          color: "#14213d",
          fontFamily: "Georgia, serif",
          fontSize: "30px",
          lineHeight: "36px",
          margin: "0 0 16px",
        }}
      >
        Welcome to MaorTrades
      </Heading>
      <Text style={{ color: "#67645e", fontSize: "16px", lineHeight: "27px" }}>
        Thanks for joining the MaorTrades Letter.
      </Text>
      <Text style={{ color: "#14213d", fontSize: "18px", lineHeight: "29px" }}>
        Trading information is everywhere. Structure is rare.
      </Text>
      <Text style={{ color: "#67645e", fontSize: "16px", lineHeight: "27px" }}>
        The Letter will share selected new educational articles, book updates,
        trading frameworks, practical resources, and ideas on execution, risk,
        psychology, and professional development.
      </Text>
      <Text style={{ color: "#67645e", fontSize: "15px", lineHeight: "28px" }}>
        <Link href={startHereUrl} style={linkStyle}>
          Start Here
        </Link>
        {" · "}
        <Link href={booksUrl} style={linkStyle}>
          Explore Books
        </Link>
        {" · "}
        <Link href={collectionsUrl} style={linkStyle}>
          Collections
        </Link>
        {" · "}
        <Link href={articlesUrl} style={linkStyle}>
          Journal
        </Link>
        {" · "}
        <Link href={resourcesUrl} style={linkStyle}>
          Free Resources
        </Link>
      </Text>
      <EmailFooter />
    </EmailLayout>
  );
}
