import { createGlobalStyle, css } from "styled-components";

export const CSSReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif;
  }`;

export const activeBorder = css`
  background: linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%));
`;

export const colors = {
  white: "hsl(0, 0%, 100%)",
  lightGrey: "hsl(270, 3%, 87%)",
  darkGrey: "hsl(279, 6%, 55%)",
  darkViolet: "hsl(278, 68%, 11%)",
};
