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
        "main-orange": "#EC4B18",
        "main-black": "#111111",
        "main-white": "#FAFAFA",
        "main-gray": "#262424",
      },
    },
  },
  plugins: [],
};
