/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-width: 912px)' },
        'tallM': {'raw': '(max-width: 767px)'}
      },
      backgroundImage:{
        'bg-cardPlayer':"url('./src/components/image/background/bg01.jpg')",
        'footer-texture': "url('./src/components/image/wave2.png')",
      },
    },
    plugins: [],
  }
}

