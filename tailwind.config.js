/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9936A", // Replace with your primary color hex code
        secondary: "#450505", // Replace with your secondary color hex code
        background: "#FAF0E6", // Replace with your background color hex code
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
