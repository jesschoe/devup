

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("https://res.cloudinary.com/devupapp/image/upload/v1633969053/devup/homeimage_jaucdr.png")'
        'setup': 'url("")'
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
