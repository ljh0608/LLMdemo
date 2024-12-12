// styles.css.ts
import { style } from "@vanilla-extract/css";
import { colorDefault, font } from "../../theme.css";

export const wrapper = style({
  width: "960px",
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
  lineHeight: "130%",
  // borderBottom: "1px solid #ddd",
  // borderRight: "1px solid #ddd",
  // borderLeft: "1px solid #ddd",
  // borderBottom: "1px solid #ddd",
  // borderRight: "1px solid #ddd",
});

export const tableInner = style({
  borderRight: "1px solid #ddd",
});

export const headerStyle = style({
  height: "45px",
  width: "100%",

  display: "flex",
  padding: "0 50px",
  backgroundColor: colorDefault.header,
});

export const menuHeader = style({
  display: "flex",
  justifyContent: "space-between",

  alignItems: "center",
  height: "40px",
  width: "100%",

  padding: "0 20px",
});

export const headerSmFont = style({
  fontSize: font.p2,
  color: colorDefault.fontGray,
});

export const headerMdFont = style({
  fontSize: font.p3,
});

export const headerList = style({
  fontSize: font.p3,
  cursor: "pointer",

  color: colorDefault.fontGray,
  ":hover": {
    textDecoration: "underline",
  },
});

export const headerListWrapper = style({
  display: "flex",
  gap: "10px",
});

export const headerBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "140px",
  height: "100%",

  fontSize: font.h3,
  cursor: "pointer",
});

export const logoWrapper = style({
  width: "100%",
  height: "70px",
  alignItems: "center",
  display: "flex",
  padding: "30px 40px",
});

export const gnb = style({
  borderTop: `1.5px solid ${colorDefault.mainGray}`,
  borderBottom: `1.5px solid ${colorDefault.mainGray}`,

  height: "50px",
  display: "flex",
  alignItems: "center",
  padding: "0 30px",
  gap: "6px",
});

export const gnbText = style({
  fontFamily:
    "NanumGothic, '나눔고딕',  'Malgun Gothic', '맑은 고딕', Dotum, '돋움', sans-serif",

  color: colorDefault.fontGray,

  fontSize: "14px",
});

export const titleWrapper = style({
  width: "960px",
  display: "flex",
  justifyContent: "space-between",
});

export const previewWrapper = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "60px",
});

export const iconWrapper = style({
  display: "flex",

  gap: "8px",
  cursor: "pointer",
});
