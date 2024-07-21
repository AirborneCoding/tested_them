import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

      extend: {
        fontFamily: { satoshi: "Satoshi" },
        colors: {
          fitred: "#C2272D",
          fitred2: "#FE0000",
          // fitgray: "#1A1A1A",
          fitgray: "#4B4C4F",
          fitwhite: "#EFEFEF"
        }
      },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ["black", "garden"],
  },
};
export default config;
