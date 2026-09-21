import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#16241A",
        ivory: "#F3EFE3",
        ochre: "#D8A13B",
        moss: "#3A5A40",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        sans: ["var(--font-work-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
