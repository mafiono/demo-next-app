module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary100)',
        danger: 'var(--radical-red)',
        accent: 'var(--primary300)',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '770px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1140px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
