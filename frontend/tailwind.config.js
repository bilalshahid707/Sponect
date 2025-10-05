/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#111827",
          hover: "#1f2937", 
        },
        primary: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb", 
        },
        white: {
          DEFAULT: "#ffffff",
          hover: "#f9fafb", 
        },
      },
    },
  },
  plugins: [],
};
