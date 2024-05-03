/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#252B42',
      green:'#96BB7C',
      grey:'#737373',
      dangerred:'#E21B1B',
     orange:'#FFAB71',
      mutedgrey:'#BDBDBD',
      yellow:'#fde047',
      pink:'#FFF2F3',
      lightgrey:'#E6E6E6',
      lightgreyw:'#FAFAFA',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}