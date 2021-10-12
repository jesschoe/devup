

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("client/src/images/homeimage_jaucdr.png")'
      }
    },
    colors: {
      background: '#262626',
      primary: '#BABABA',
      orange: '#FFA800',
      purple: '#B371DB',
      white: '#ffffff',
      black: '#000000'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
