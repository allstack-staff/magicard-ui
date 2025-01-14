import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#053359",
        secondary: "#00D7D7",
        magicButton: {
          150: "#FFC80026",
          HOVER: "#ffda55",
          DEFAULT: "#FFC700"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
