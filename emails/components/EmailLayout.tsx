import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
} from "react-email";

const styles = {
  body: {
    margin: "0",
    backgroundColor: "#f7f4ed",
    color: "#25282d",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: "620px",
    margin: "0 auto",
    padding: "36px 20px",
  },
  panel: {
    backgroundColor: "#fffdf8",
    border: "1px solid #d6d0c3",
    padding: "34px",
  },
  brand: {
    color: "#14213d",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
    margin: "0 0 28px",
  },
} as const;

export function EmailLayout({
  preview,
  children,
}: {
  preview: string;
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.panel}>
            <p style={styles.brand}>MAORTRADES</p>
            {children}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
