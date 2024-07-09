/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainbg: "rgb(28, 27, 31)",
        statuslettersmain: "rgb(113, 188, 207)",
        statusbgmain: "rgb(69, 97, 105)",
        statusbordermain: "rgb(113, 188, 207)",
        numberBlack: "#000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-1": "3px 3px 1px rgba(0, 0, 0, 0.6)",
        "custom-2": "1px -1px 1px rgba(185, 181, 181, 0.097)",
        "custom-3": "0px 0px 0px rgba(185, 181, 181, 0.37)",
        "custom-4": "6px -1px 3px rgba(0, 0, 0, 0.8)",
        "custom-5": "0px 0px 0px rgba(0, 0, 0, 0.4)",
      },
      scale: {
        93: "0.93",
        97: "0.97",
      },
      colors: {
        "hsl-250-13-25": "hsl(250, 13%, 25%)",
        "hsl-250-13-75": "hsl(250, 13%, 75%)",
        "hsl-200-30-95": "hsl(200, 30%, 95%)",
        "hsl-195-8-10": "hsl(195, 8%, 10%)",
      },
      opacity: {
        30: "0.3",
      },
    },
  },
  plugins: [],
};
