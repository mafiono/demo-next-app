module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary100)',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '769px',
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
  },
  plugins: [],
}
