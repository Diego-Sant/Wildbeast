
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
window
  .getComputedStyle(element)
  .getPropertyValue(style)

const initialColors = {
  bg: getStyle(html, "--bg"),
  bgHfq: getStyle(html, "--bg-hfq"),
  colorText: getStyle(html, "--color-text"),
  colorSpan: getStyle(html, "--color-span"),
  colorSides: getStyle(html, "--color-sides"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorSetas: getStyle(html, "--color-setas"),
  colorBgSide: getStyle(html, "--color-bgside"),
  colorHoverSide: getStyle(html, "--color-hoverside"),
}

const darkMode = {
  bg: "#222222",
  bgHfq: "linear-gradient(135deg, #8844ee, #b07dfb)",
  colorText: "#fff",
  colorSpan: "#b07dfb",
  colorSides: "#101010",
  colorHeadings: "#3664FF",
  colorSetas: "#fff",
  colorBgSide: "#222222",
  colorHoverSide: "#4c2882",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {

  Object.keys(colors).map(key => 
    html.style.setProperty(transformKey(key), colors[key]) 
)
}



checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})