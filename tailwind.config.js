module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      colors: {
        'primary-blue': '#1B4DB1',
        'primary-yellow': '#F3F243',
        'primary-pink': '#FF64BC',
        'primary-black': '#000000',
        'primary-blackOpacity': 'rgb(0, 0, 0, 0.6)',
        'primary-blackOpacity3': 'rgb(0, 0, 0, 0.3)',
        'primary-blackLight': '#1A1E2E',
        'primary-grayDark': '#6E6A6C',
        'primary-gray': '#A7A6A7',
        'primary-grayLight': '#D9D9D9',
        'primary-grayLighter': '#F8F7FA',
        'secondary-red': '#EF3F47',
      },
    },
  },
  plugins: [],
};
