import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        light: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        dark: {
          background: "var(--foreground)",
          foreground: "var(--background)",
        },
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
