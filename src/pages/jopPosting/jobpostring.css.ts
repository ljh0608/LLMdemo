import { style } from "@vanilla-extract/css";
import { colorDefault } from "../../theme.css";
// import { colorDefault, font } from "../../theme.css";

export const container = style({
  padding: "20px 0",
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  border: `1px solid ${colorDefault.mainGray}`,
  borderRadius: "8px",
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
  width: "100%",
  boxSizing: "border-box",
  borderBottom: `1px solid ${colorDefault.mainGray}`,
});

export const trStyle = style({
  borderBottom: `1px solid ${colorDefault.mainGray}`,
  padding: "20px 0",
  height: "60px",
});

export const formWrapper = style({
  boxSizing: "border-box",
  marginTop: "20px",
  height: "fit-content",

  display: "flex",
  flexDirection: "column",

  // border: `1px solid ${colorDefault.mainGray}`,
  width: "960px",

  // backgroundColor: colorDefault.backgroundGray,
  // padding: "20px 0",
});

export const btnStyle = style({
  // position: "relative",
  backgroundColor: colorDefault.mainBlue,
  padding: "10px",
  marginLeft: "auto",
  width: "65px",
  border: "none",
  borderRadius: "8px",
  fontWeight: 600,
  color: "white",

  marginTop: "10px",
});
