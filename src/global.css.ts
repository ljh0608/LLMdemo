import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  fontFamily: `Pretendard,  sans-serif,-apple-system, BlinkMacSystemFont, system-ui, Roboto, 
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
});

globalStyle("html, body", {
  boxSizing: "border-box",
  margin: "0 auto",
});

globalStyle("input", {
  outline: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
});

globalStyle("button", {
  font: "inherit",
  background: "none",
  cursor: "pointer",
  border: "none",
});

globalStyle("select", {
  cursor: "pointer",
});

globalStyle("textarea", {
  outline: "none",
  resize: "none",
});

// Reset CSS
globalStyle(
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video",
  {
    // margin: 0,
    // padding: 0,
    // border: 0,
    // fontSize: "100%",
    // font: "inherit",
    // verticalAlign: "baseline",
  }
);

globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  }
);

globalStyle("body", {
  lineHeight: 1,
});

globalStyle("ol, ul", {
  listStyle: "none",
  padding: 0,
});

globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote:before, blockquote:after, q:before, q:after", {
  content: '""',
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});
