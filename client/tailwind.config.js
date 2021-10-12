

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("https://res.cloudinary.com/devupapp/image/upload/v1633969053/devup/homeimage_jaucdr.png")',
        'setup': 'url("https://res.cloudinary.com/devupapp/image/upload/v1633967360/devup/desk4_d9n5j0.jpg")',
        'gearup': 'url("https://res.cloudinary.com/devupapp/image/upload/v1633979273/devup/devup-headphoneGirl_gzj2iv.png")',
        'levelup': 'url("https://res.cloudinary.com/devupapp/image/upload/v1633979303/devup/desk-asc_iys574.jpg")'
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

    flex: {
      basis: '1 1 33%',
    },

    fontFamily: {
      'serif': ['DM Serif Display', 'serif']
    }

  },
  variants: {
    extend: {
      borderStyle: ['hover'],
    },
  },
  plugins: [],
}
