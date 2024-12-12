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
  header: null,
});

const fontContrast = createThemeContract({
  h1: null,
  h2: null,
  h3: null,
  p1: null,
  p2: null,
  p3: null,
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
  header: "#62d492",
};

export const font: Record<keyof typeof fontContrast, string> = {
  h1: " 32px; font-weight: 600; line-height: 40px;",
  h2: " 28px; font-weight: 600; line-height: 40px;", // h2 스타일 적용
  h3: "20px; font-weight: 600; line-height: 40px;",
  p1: "16px; line-height: 28px; ",
  p2: "12px; line-height: 28px;",
  p3: "14px; line-height: 28px;",
};
