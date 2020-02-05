import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  scaleRatio: 3.5,
  googleFonts: [
    {
      name: "Syncopate",
      styles: ["700"],
    },
    {
      name: "VT323",
      styles: ["400"],
    },
    {
      name: "Roboto Mono",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Syncopate", "Arial", "sans-serif"],
  bodyFontFamily: ["Roboto Mono", "VT323", "serif"],
})
export default typography
