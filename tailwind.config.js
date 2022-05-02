module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      'light-blue': '#A6CFD5',
      'aero-blue': '#C2E7D9',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      xiketic: '#0D0221',
      'light-blue': '#A6CFD5',
      'aero-blue': '#C2E7D9',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
