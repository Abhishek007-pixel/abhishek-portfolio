import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#121212",
        // These are the "Electric Blue" and "Purple" colors from your design
        primary: "#3b82f6", 
        secondary: "#8b5cf6",
        accent: "#8b5cf6",
        textMain: "#ededed",
        textMuted: "#a1a1aa",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;