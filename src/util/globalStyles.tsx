import { createGlobalStyle, css } from "styled-components"

export const CSSReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
  }`

export const activeBorder = css`
  background: linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%));
`

export const colors = {
  white: "hsl(0, 0%, 100%)",
  lightGrey: "hsl(270, 3%, 87%)",
  darkGrey: "hsl(279, 6%, 55%)",
  darkViolet: "hsl(278, 68%, 11%)",
  red: "rgba(184, 0, 0, 1)",
}

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
