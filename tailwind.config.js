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
        'main-bg-color': "#f5f5f5",
        'secondary-bg-color': '#eef0eb',
        // 'secondary-bg-color': '#dee2e6',
        'card-bg-color':'#fff'
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
        '50px': '50px'
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
        '55px': '55px'
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
        '35px': '35px',
        '40px':'40px',
        '45px':'45px',
        '50px':'50px',
        '55px':'55px',
        '60px':'60px'
      },
      width: {
        '27rem': '27rem',
        '432px': '432px',
        '50%': '50%',
        '80vw': '80vw',
        '70vw': '70vw',
        '65vw': '65vw',
        '10vw': '10vw',
        '30vw': '30vw',
        '35vw': '35vw',
        '25vw': '25vw',
        '20vw': '20vw',
        '37vw': '37vw',
        '50vw': '50vw',
        '74%': '74%',
        '65%':'65%',
        '55%':'55%',
        '20%':'20%',
        '80%':'80%',
        '100%':'100%',
        '660px':'660px',
        '200px':'200px',
        '385px':'385px',
        '70px':'70px',
        '6%':'6%',
        '94%':'94%'

      },
      height: {
        '27rem': '27rem',
        '432px': '432px',
        '80vw': '80vw',
        '65vw': '65vw',
        '100%':'100%',
        '20%':'20%',
        '350px':'350px',
        '215px':'215px',
        '50px':'50px',
        '70px':'70px'

      },
      boxShadow: {
        'degreediv': '5px 5px 5px #d9dbdf',
      },
      textColor: ['hover']
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
      '2xl': {'min': '1201px'}
    },

  },
  plugins: [],
}
