import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/background.jpeg')",
      },
      colors: {
        brownish: "#69443c",
        light: "#f3ede4",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        seasons: ["var(--font-seasons)"],
        epilogue: ["var(--font-epilogue)"],
      },
    },
  },
  plugins: [],
};
export default config;
