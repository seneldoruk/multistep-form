import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  daisyui:{
    themes: ["dark"]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}