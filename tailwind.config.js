module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'midnight-sky': '#291720',
        'rose': '#D90368',
        'light-yellow': '#FFFBDB',
        'moss-green': '#625834',
        'dark-forest': '#30362F',
        'olive-green': '#A59132',
        xiketic: '#0D0221',
        orange: '#DA7422',
      },
      borderRadius: {
        'large': '2rem',
      }
    },
    fontFamily: {
      gloock: ['Gloock', 'serif'],
      'martian-mono': ['Martian Mono', 'monospace'] ,
      staatliches: ['Staatliches', 'serif'],
      nunito: ['Nunito', 'serif'],
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      'light-blue': '#A6CFD5',
      'aero-blue': '#C2E7D9',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      'dark-ruby': '#820263',
      'rose': '#D90368',
      xiketic: '#0D0221',
      'light-blue': '#A6CFD5',
      'aero-blue': '#C2E7D9',
    }),
    ringColor: (theme) => ({
      ...theme('colors'),
      xiketic: '#0D0221',
      'light-blue': '#A6CFD5',
      'aero-blue': '#C2E7D9',
      'rose': '#D90368',
      'moss-green': '#625834',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
