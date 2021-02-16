module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'blue-970': '#110E2E',
        'blue-950': '#1D0E30',
        'pink-850': '#2E0D32',
        'pink-950': '#470D35',
        'red-850': '#AD0A42',
      }),
    },
    flex: {
      '2-1': '2 1 0%',
      '3-1': '3 1 0%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
