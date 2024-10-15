/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{css,js,jsx,ts,tsx,vue}',
    "public/index.html",
    "public/about.html",
    "public/contact.html"
  ],

  theme: {
    extend: {
      colors: {
        sunset: {
          100: "#735c78",
          200: "#c9b2cf",
          300: "#353444",
          400: "#4a4877",
          500: "#1f1e30"
        }

      },
      fontFamily: {
        title: ['Abril Fatface'],
        body: ['Merriweather'],
        subtitle: ['Anton']
      },
      backgroundImage: {
        'LavenderSkies': "url('https://i.imgur.com/dEbZDos.jpeg')",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

    },
    plugins: [],
  }
}
