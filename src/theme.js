// Modular scale
const ms = (v = 0, r = Math.sqrt(2)) => Math.pow(r, v);

// Space separated values
const ssv = f => (...v) => v.map(f).join(" ");

const theme = {
  colors: {
    white: "#fff",
    gray: "#bebdbd",
    bodygray: "#595959",
    darkgrey1: "#3e3e3e",
    lightgrey1: "#f9f9f9",
    lightgrey2: "#f1f1f1",
    lightgrey3: "#c5c5c5",
    black: "#000",
    nav: "#232323"
  },
  lineHeights: {
    solid: 1,
    title: 1.3,
    copy: 1.4
  },
  fontFamilies: {
    sans: '"Karla", sans-serif',
    serif: '"PT Serif", serif',
    serif2: "Nanum Myeongjo, serif"
  },
  fontSize: s => ms(s / 2) + "rem",
  mediaSizes: {
    t: "20rem",
    s: "30rem",
    m: "48rem",
    ml: "55rem",
    l: "60rem",
    x: "78rem",
    xx: "90rem"
  },
  radius: ssv(s => (typeof s === "number" ? ms(s / 2) + "rem" : s)),
  spacing: ssv(s => (typeof s === "number" ? ms(s) + "rem" : s)),
  transition: "150ms"
};

theme.mediaQueries = Object.keys(theme.mediaSizes).reduce((acc, curr) => {
  acc[curr] = `@media (min-width: ${theme.mediaSizes[curr]})`;
  return acc;
}, {});

// Shortcuts
theme.c = theme.colors;
theme.f = theme.fontSize;
theme.ff = theme.fontFamilies;
theme.lh = theme.lineHeights;
theme.mq = theme.mediaQueries;
theme.ms = theme.mediaSizes;
theme.r = theme.radius;
theme.s = theme.spacing;
theme.t = theme.transition;

export default theme;
