import { style } from "@vanilla-extract/css";
import { colorDefault, font } from "./theme.css";

export const appWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  color: "black",
});

export const navWrapper = style({
  padding: "10px",
  width: "200px",
});

export const navList = style({
  display: "flex",
  flexDirection: "column",
});

export const navItem = style({
  padding: "12px 10px",
  width: "100%",
  cursor: "pointer",
  borderRadius: "8px",
  color: colorDefault.p,
  ":hover": {
    backgroundColor: colorDefault.backgroundGray,
  },
});

export const mainText = style({
  fontSize: font.h2,
  color: colorDefault.h,
  width: "960px",
});

export const hrStyle = style({
  border: `1px solid ${colorDefault.mainGray}`,
  width: "960px",
});

export const formWrapper = style({
  boxSizing: "border-box",
  marginTop: "20px",
  height: "fit-content",

  display: "flex",
  flexDirection: "column",

  border: `1px solid ${colorDefault.mainGray}`,
  width: "960px",
  borderRadius: "8px",
  backgroundColor: colorDefault.backgroundGray,
  padding: "20px",
});

export const inputWrapper = style({
  display: "flex",

  padding: "12px 0",
  alignItems: "center",
  height: "65px",
  width: "100%",
});

export const labelStyle = style({
  display: "block",
  width: "140px",
});

export const inputStyle = style({
  width: "100%",
  height: "40px",
  padding: "0 26px 0 8px",
  borderRadius: "4px",
  border: `1px solid ${colorDefault.btn}`,
  color: colorDefault.h,
  fontSize: font.p1,
  // vertical-align: top;
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
});
