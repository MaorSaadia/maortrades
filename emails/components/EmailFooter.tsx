import { Hr, Text } from "react-email";

export function EmailFooter() {
  return (
    <>
      <Hr style={{ borderColor: "#d6d0c3", margin: "28px 0 18px" }} />
      <Text style={{ color: "#67645e", fontSize: "13px", lineHeight: "22px" }}>
        MaorTrades
        <br />
        Books · Frameworks · Execution · Discipline
      </Text>
    </>
  );
}
