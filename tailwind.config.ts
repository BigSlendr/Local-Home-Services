import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf7ff",
          100: "#d5ebff",
          500: "#0f5da8",
          700: "#0a3e72",
          900: "#09233f"
        },
        accent: "#f59e0b"
      }
    }
  },
  plugins: [],
};

export default config;
