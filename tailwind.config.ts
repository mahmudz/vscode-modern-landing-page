import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          "2xl": "100px",
        },
      },
      colors: {
        background: "#010b13",
        accent: "#355bad",
      },
    },
  },
  plugins: [
    scrollbar({
      preferredStrategy: "pseudoelements",
    }),
  ],
};
export default config;
