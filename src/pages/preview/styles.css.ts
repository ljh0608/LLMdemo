// styles.css.ts
import { style } from "@vanilla-extract/css";
import { colorDefault } from "../../theme.css";

export const wrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const container = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  padding: "16px",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#333",

  width: "960px",
});

export const section = style({
  borderBottom: "1px solid #ddd",
  paddingBottom: "16px",
  marginBottom: "16px",
});

export const jdTitle = style({
  height: "50px",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  fontSize: "18px",
  backgroundColor: colorDefault.backgroundGray,
});

export const title = style({
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
});

export const row = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
});

export const label = style({
  fontWeight: "bold",
  color: "#555",
});

export const actions = style({
  display: "flex",
  gap: "8px",
});

export const button = style({
  padding: "8px 16px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  background: "#f9f9f9",
  cursor: "pointer",
  transition: "background 0.3s",

  selectors: {
    "&:hover": {
      background: "#f0f0f0",
    },
  },
});

// Additional styles for the second view
export const jobDescription = style({
  padding: "16px",
  borderRadius: "8px",
  marginBottom: "16px",
  width: "960px",
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "16px",
});

export const tableHeader = style({
  backgroundColor: colorDefault.backgroundGray,
  fontWeight: "bold",
  textAlign: "left",

  height: "50px",

  alignItems: "center",
  padding: "0 10px",
  fontSize: "18px",
  borderBottom: "1px solid #ddd",
});

export const tableRow = style({});

export const tableCell = style({
  width: "200px",
  padding: "8px",
  height: "70px",
  fontSize: "14px",
  // borderBottom: "1px solid #ddd",
  // borderRight: "1px solid #ddd",
  // borderLeft: "1px solid #ddd",
  // borderBottom: "1px solid #ddd",
  // borderRight: "1px solid #ddd",
});

export const tableInner = style({
  borderRight: "1px solid #ddd",
});
