import { Heading, Text } from "react-email";
import { EmailButton } from "@/emails/components/EmailButton";
import { EmailFooter } from "@/emails/components/EmailFooter";
import { EmailLayout } from "@/emails/components/EmailLayout";

export function ConfirmSubscriptionEmail({
  confirmUrl,
  resourceTitle,
}: {
  confirmUrl: string;
  resourceTitle?: string;
}) {
  const isResourceRequest = Boolean(resourceTitle);
  const preview = isResourceRequest
    ? `Confirm your email to receive ${resourceTitle}.`
    : "Confirm your email to join the MaorTrades Letter.";

  return (
    <EmailLayout preview={preview}>
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
        Confirm your email
      </Heading>
      <Text style={{ color: "#67645e", fontSize: "16px", lineHeight: "27px" }}>
        {isResourceRequest
          ? "Confirm your email address to complete your subscription and receive access to the requested MaorTrades resource."
          : "Thanks for joining the MaorTrades Letter."}
      </Text>
      <Text style={{ color: "#67645e", fontSize: "16px", lineHeight: "27px" }}>
        Confirm your email address to receive new articles, book updates,
        educational frameworks, and selected trading resources.
      </Text>
      <EmailButton href={confirmUrl}>Confirm Subscription</EmailButton>
      <Text style={{ color: "#67645e", fontSize: "14px", lineHeight: "24px" }}>
        If you did not request this, you can ignore this email.
      </Text>
      <EmailFooter />
    </EmailLayout>
  );
}
