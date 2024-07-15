/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '769px',
        'md': '1024px',
        'lg': '1280px'
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right,  #774ba0, #347dbf)',
      },
    },
  },
  plugins: [],
};
