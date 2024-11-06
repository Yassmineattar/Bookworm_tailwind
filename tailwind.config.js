/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        beige: {
          100: '#f5f5dc', // Exemple de couleur beige clair
          200: '#e4d1b2', // Beige clair
          300: '#d1b89a', // Beige moyen
          400: '#c2b280',
        },
      },
    },
  },
  plugins: [],
}

