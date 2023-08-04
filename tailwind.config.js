/** @type {import('tailwindcss').Config} */

import { colors as _colors } from "tailwindcss/defaultTheme";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      background: "#11172B",
      backgroundLight: "#1B2138",
      primary: "#0EE7B7",
      secondary: "#7AC7E3",
      text: "#848DA0",
      textHighlight: "#444B5B",
      textLight: "#C4C4C4",
      border: "#313958",
      inputBackground: "#1E253E",
      ..._colors,
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      jetBrains: ["JetBrains Mono", "monospace"],
    },
    animation: {
      rightIn: "rightIn .5s",
      leftIn: "leftIn .6s",
      pulse: "pulse .7s cubic-bezier(0.4, 0, 0.6, 1)",
    },
    keyframes: {
      rightIn: {
        from: {
          right: "-333px",
        },
        to: {
          right: "0px",
        },
      },
      leftIn: {
        from: {
          left: "-333px",
        },
        to: {
          left: "0px",
        },
      },
    },
  },
};
export const plugins = [];
