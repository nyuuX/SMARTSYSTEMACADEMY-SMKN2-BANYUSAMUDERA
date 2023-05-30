/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner1': "url('./assets/background.png')",
        'banner3': "url('./assets/services.png')",
        'banner4': "url('./assets/banner3.png')",
        'banner5': "url('./assets/banner4.png')",
        'banner6': "url('./assets/banner5.png')",
        'bannerssa': "url('./assets/ssabannera.png')",
      },
      colors: {
        'gray-card': 'rgba(69,68,79,255)',
      },
    },

    screens: {
      'sm': '320px',
      'md': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [

  ],
}