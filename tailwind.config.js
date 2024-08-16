import { M } from 'vite/dist/node/types.d-aGj9QkWt';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080808',
        secondary: '#57F98E',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      screens: {
        sm: '314px',
        md: '416px',
        lg: '',
        xl: '',
        '2xl': '',
      },
      backgroundImage: {
        setting: 'url("./assets/settingBg.png")'
      },
      logoImage: {
        wagwaglogo: 'url("./assets/wagwaglogo.png")'
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html, body': {
          'overflow-x': 'hidden',
          // 'overflow-y': 'hidden',
          // 'height': '100%',
          // 'margin': '0',
        },
      });
    },
  ],
}

