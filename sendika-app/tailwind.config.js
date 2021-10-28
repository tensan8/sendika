module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      staatliches: ['Staatliches', 'sans-serif']
    },
    extend: {
      colors: {
        sendika: {
          text: {
            white: '#FEFFFF',
            black: '#17252A'
          },
          grey: '#1f2525',
          teal: '#2B7A78',
          primary: '#3AAFA9',
          inactive: '#AEC7C5'
        }
      }
    }
  },
  variants: {
    extend: {
      outline: ['focus'],

    },
  },
  plugins: [],
}
