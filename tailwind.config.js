/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'my-image':"url('https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg')",
      },
    },
  },
  plugins: [],
}

