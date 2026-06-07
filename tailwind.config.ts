import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy & Cream — light theme (cream page, navy ink)
        bg: "#FAF6EE", // page background (cream)
        surface: "#E8DFCF", // raised panels / cards
        primary: "#1F3252", // deep navy — dominant ink + dark bands
        accent: "#1F3252", // brand accent (navy family)
        contrast: "#0E1C33", // darkest navy
        ink: "#0E1C33", // body/heading ink
        cream: "#FAF6EE", // light text on navy bands
        "bg-contrast": "#0E1C33",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-figtree)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
