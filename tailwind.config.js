/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      clipPath: {
        'diagonal':'polygon(0 0, 85% 0, 100% 20%, 100% 100%, 0 100%)'
      }
    },
  },
  plugins: [],
}
