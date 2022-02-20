module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'light-blue': '#A6CFD5',
    }),
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      'light-blue': '#A6CFD5',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      xiketic: '#0D0221',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
