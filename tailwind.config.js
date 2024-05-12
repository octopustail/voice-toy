/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      colors:{
        'main': "rgba(19, 35, 47, 0.9)"}
    },
  },
  plugins: [],
}

