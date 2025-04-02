import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Permite ativar o modo escuro via classe "dark" no <html>
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#EBF2FC",
        lightBg2: "#EEF8F9",
        darkBg: "#040918",
        darkBg2: "#091540",
      },
    },
  },
  plugins: [],
};

export default config;
