import type { Config } from "tailwindcss";

import daisyui from "daisyui";
import aspectratio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        maintheme: {
          primary: "#D5258F",
          secondary: "#ffffff",
          accent: "#b3d135",
          neutral: "#f0f6fb",
          "base-100": "#5A12AA",
          info: "#67e8f9",
          success: "#4ade80",
          warning: "#fde047",
          error: "#fca5a5",
        },
      },
    ],
  },
  plugins: [aspectratio, daisyui],
};
export default config;
