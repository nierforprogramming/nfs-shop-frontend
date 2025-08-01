/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      'accent-color':'#42b883',
      'text-color': '#414141'
     }
    },
  },
  plugins: [],
}