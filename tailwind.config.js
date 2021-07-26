module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto',],
      },
      colors: {
        blue: {
          950: '#2D3D4C'
        }
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
