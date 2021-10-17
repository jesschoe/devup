module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {

        'hero': 'url("https://res.cloudinary.com/devupapp/image/upload/v1633969053/devup/homeimage_jaucdr.png")',
        'setup': 'url("https://res.cloudinary.com/devupapp/image/upload/v1634405589/devup/kadyn-pierce-PruhDU1m1Yk-unsplash_qhny7j.jpg")',
        'gearup': 'url("https://res.cloudinary.com/devupapp/image/upload/v1633979273/devup/devup-headphoneGirl_gzj2iv.png")',
        'levelup': 'url("https://res.cloudinary.com/devupapp/image/upload/v1633979303/devup/desk-asc_iys574.jpg")',
        'blog': 'url("https://www.hdnicewallpapers.com/Walls/Big/Computers/Superb_HD_Laptop_Background_Wallpaper.jpg")',
      }

    },
    colors: {
      background: "#262626",
      primary: "#FFFFFF",
      orange: "#FFA800",
      purple: "#B371DB",
      white: "#ffffff",
      black: "#000000",
    },

    flex: {
      basis: "1 1 33%",
    },

    fontFamily: {
      serif: ["DM Serif Display", "serif"],
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover"],
    },
  },
  plugins: [],
};
