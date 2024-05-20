import type { Config } from "tailwindcss";

import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "155": "1.55",
        "160": "1.6",
        "165": "1.65",
        "170": "1.7",
        "175": "1.75",
        "180": "1.8",
        "185": "1.85",
        "190": "1.9",
        "195": "1.95",
        "200": "2",
      },
      boxShadow: {
        neon: "0 0 7px #20FECB, 0 0 7px #20FECB, 0 0 7px #20FECB, 0 0 7px #20FECB",
        neonpink:
          "0 0 7px #FB26FF, 0 0 7px #FB26FF, 0 0 7px #FB26FF, 0 0 7px #FB26FF",
      },
      ringColor: {
        neon: "#20FECB",
        neonpink: "#FB26FF",
      },
      ringOffsetColor: {
        neon: "#20FECB",
        neonpink: "#FB26FF",
      },
      ringOffsetWidth: {
        "3": "3px",
      },
      ringWidth: {
        "2": "2px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        maintheme: {
          primary: "#5A12AA",
          secondary: "#ffffff",
          accent: "#b3d135",
          neutral: "#f0f6fb",
          "base-100": "#5A12AA",
          info: "#ffffff",
          success: "#4ade80",
          warning: "#FF9C28",
          error: "#fca5a5",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
