/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#313638',
        'main-bg-color': "#f5f5f5"
      },
      fontFamily: {
        'main-font': ['GoogleSans-Regular', 'sans-serif'],
        'code-font': ['Agustina Regular', 'sans-serif']
      },
      margin: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
      },
      padding: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
      },
      fontSize: {
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
        '21px': '21px',
        '22px': '22px',
        '23px': '23px',
        '24px': '24px',
        '25px': '25px',
        '26px': '26px',
        '27px': '27px',
        '28px': '28px',
        '29px': '29px',
        '30px': '30px',
        '40px':'40px',
        '50px':'50px',
        '55px':'55px',
        '60px':'60px'
      },
      width: {
        '27rem': '27rem',
        '432px': '432px',
        '50%': '50%',
        '80vw': '80vw',
        '65vw': '65vw'
      },
      height: {
        '27rem': '27rem',
        '432px': '432px',
        '80vw': '80vw',
        '65vw': '65vw'
      },
    },
    screens: {
      // mobile:
      'sm': { 'min': '200px', 'max': '480px' },

      // tablets
      'md': { 'min': '481px', 'max': '768px' },

      // Laptops
      'lg': { 'min': '769px', 'max': '1024px' },

      // Big Screeened Laptops
      'xl': {'min': '1025px', 'max': '1200px'},

      // Extra large screens
      '2xl': {'min': '1201px'},
    },

  },
  plugins: [],
}
