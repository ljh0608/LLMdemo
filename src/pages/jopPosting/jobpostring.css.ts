import { composeStyles, style } from "@vanilla-extract/css";
import { colorDefault, font } from "../../theme.css";

export const container = style({
  padding: "20px 0",
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",

  borderRadius: "8px",
});

export const tbodyStyle = style({
  width: "100%",
  border: `1px solid ${colorDefault.mainGray}`,
});

export const label = style({
  paddingRight: "20px",
  paddingLeft: "20px",
  backgroundColor: "#f8f8f8",
  width: "200px",
});

export const input = style({
  padding: "8px",
  margin: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "95%",

  boxSizing: "border-box",
});

export const textarea = style({
  padding: "8px",
  margin: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "95%",
  boxSizing: "border-box",
  height: "100px",
});

export const select = style({
  padding: "8px",
  margin: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "200px",
  boxSizing: "border-box",
  borderBottom: `1px solid ${colorDefault.mainGray}`,
});

export const trStyle = style({
  borderBottom: `1px solid ${colorDefault.mainGray}`,

  height: "40px",
});

export const formWrapper = style({
  boxSizing: "border-box",
  marginTop: "20px",
  height: "fit-content",

  display: "flex",
  flexDirection: "column",

  width: "960px",
});

export const btnStyle = style({
  // position: "relative",
  backgroundColor: colorDefault.mainBlue,
  padding: "12px",
  marginLeft: "auto",

  border: "none",
  borderRadius: "8px",
  fontWeight: 600,
  color: "white",

  marginTop: "10px",
});

export const tdFlexStyle = style({
  display: "flex",

  alignItems: "center",
  padding: "10px",
  height: "100%",
  textAlign: "center",

  gap: "12px",
});

export const tdFlexColumnStyle = style({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  height: "100%",

  gap: "6px",
});

export const tdInput = style({
  padding: "8px",
  margin: "5px",
  borderRadius: "4px",
  border: `1px solid #ccc`,
});

export const subText = style({
  fontFamily: font.p2,
  color: colorDefault.fontGray,
  marginLeft: "6px",
});

// export const td;

export const exprience = style({
  display: "flex",

  alignItems: "center",

  height: "30px",
  textAlign: "center",

  gap: "12px",
});

export const copyBtn = style({
  borderRadius: "4px",

  width: "60px",
  backgroundColor: `${colorDefault.backgroundGray}`,
  border: `1px solid ${colorDefault.mainGray}`,
  fontSize: `${font.p2}`,
  height: "34px",
});

export const copyBtnWithMargin = composeStyles(
  copyBtn,
  style({
    marginTop: "5px",
  })
);

export const copyWrapper = style({
  display: "flex",
  alignItems: "center",
  padding: "0 5px 0 0",
});

export const copyWrapperAlignStart = style({
  display: "flex",

  padding: "0 5px 0 0",
});
