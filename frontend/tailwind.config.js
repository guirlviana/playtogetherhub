/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2196f3",
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
        },
        secondary: {
          DEFAULT: "#DFEAFC",
          100: "#D2E2F8",
          200: "#C6DAF4",
          300: "#BAD2F0",
          400: "#ADC9EC",
          600: "#A1C1E8",
          700: "#95B9E4",
          800: "#88B1E0",
          900: "#7CA8DC",
        },
      },
    },
  },
  plugins: [],
};
