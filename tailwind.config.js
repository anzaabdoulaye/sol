/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['*.{html,js}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      sm: '20px',
      lg: '30px',
      xl: '40px',
      }
    },
    screens: {
      sm: '648px',
      md: '768px',
      lg: '968px',
      xl: '1338px',
    },
    extend: {
      colors: {
        primary: '#367cc3',
        secondary: '#898989',
        accent: {
          DEFAULT: '#367cc3',
          secondary: '#508ccb',
          tertiary: '#7dacdc',
        },
        grey: '#ebc405',
      },
      fontFamily: {
        primary: 'Poppins'
      },
      boxShadow: {
        custom1: '8px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '8px 8px 30px 0px rgba(8, 73, 81,  0.06)',
      },
       backgroundImage: {
        services: 'url(../../assets/img/services/9076068.jpg)',
        testimonials: 'url(../../assets/img/testimonials/bg.svg)',
        departements: 'url(../../assets/img/departements/bg.svg)',
        quoteLeft: 'url(../../assets/icon/testimonials/quote-left.svg)',
        quoteRight: 'url(../../assets/icon/testimonials/quote-right.svg)',
        client: 'url(../../assets/icon/stats/icon5.png)',
        stats: 'url(../../assets/img/stats/bag.jpg)',
      } 
    },
  },
  plugins: [],
});

