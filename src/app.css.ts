import { style } from "@vanilla-extract/css";
import { colorDefault, font } from "./theme.css";

export const appWrapper = style({
  display: "flex",
  justifyContent: "center",

  width: "100%",
  color: "black",
});

export const navWrapper = style({
  padding: "10px",
  width: "200px",
  position: "relative",
  top: "70px",
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

export const formStyle = style({
  position: "absolute",
});

export const formWrapper = style({
  boxSizing: "border-box",
  marginTop: "20px",
  height: "fit-content",

  display: "flex",
  flexDirection: "column",

  border: `1px solid ${colorDefault.mainGray}`,
  width: "960px",

  // backgroundColor: colorDefault.backgroundGray,
});

export const inputWrapper = style({
  display: "flex",
  borderBottom: `1px solid ${colorDefault.mainGray}`,
  // padding: "12px 10px",
  alignItems: "center",
  height: "65px",
  width: "100%",
  border: "",
});

export const labelStyle = style({
  display: "flex",
  width: "200px",

  height: "100%",
  alignItems: "center",
  backgroundColor: colorDefault.backgroundGray,
  paddingLeft: "20px",
});

export const inputStyle = style({
  width: "75%",
  // height: "40px",
  // padding: "0 26px 0 8px",
  // borderRadius: "4px",
  // border: `1px solid ${colorDefault.btn}`,
  // color: colorDefault.h,
  // fontSize: font.p1,
  padding: "8px",
  margin: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",

  boxSizing: "border-box",
  // vertical-align: top;
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
  position: "absolute",
  right: 0,
});
