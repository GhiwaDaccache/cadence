/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#A00119',
        grey: '#F5F5F5',
        placeholderGrey: '#ACACAC'
      },
      fontFamily: {
        urbanistLight: ["Urbanist-light", "sans-serif"],
        urbanist: ["Urbanist-regular", "sans-serif"],
        urbanistMedium: ["Urbanist-medium", "sans-serif"],
        usemibold: ["Urbanist-semi-b", "sans-serif"],
        urbanistBold: ["Urbanist-bold", "sans-serif"],
      },
    },
  plugins: [],
  }
};


