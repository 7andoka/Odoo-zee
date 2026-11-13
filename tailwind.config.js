/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        odoo: {
          50: '#f5f3f7',
          100: '#ede7f0',
          600: '#714B67',
          700: '#5A3B52',
          800: '#482F41',
        }
      }
    },
  },
  plugins: [],
}
