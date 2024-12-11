import { createThemeContract } from "@vanilla-extract/css";

const colorContrast = createThemeContract({
  mainBlue: null,
  backgroundGray: null,
  mainGray: null,
  fontGray: null,
  btn: null,
  body: null,
  h: null,
  p: null,
});

const fontContrast = createThemeContract({
  h1: null,
  h2: null,
  h3: null,
  p1: null,
  p2: null,
});

export const colorDefault: Record<keyof typeof colorContrast, string> = {
  mainBlue: "#4d65e1",
  backgroundGray: "#f8f8f8",
  mainGray: "#dddddd",
  btn: "#757575",
  fontGray: "#868296",
  body: "#333333",
  h: "#111",
  p: "#555",
};

export const font: Record<keyof typeof fontContrast, string> = {
  h1: "font-size: 32px; font-weight: 600; line-height: 40px;",
  h2: "font-size: 28px; font-weight: 600; line-height: 40px;", // h2 스타일 적용
  h3: "font-size: 20px; font-weight: 600; line-height: 40px;",
  p1: "line-height: 28px;font-size: 16px;",
  p2: "line-height: 28px;font-size: 12px;",
};
