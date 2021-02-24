module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'gray-650': '#2e303e',
        'gray-750': '#262836',
        'gray-850': '#201e2b',
        'green-850': '#127aed',
        'blue-250': '#242425',
        'blue-970': '#042a3a',
        'blue-950': '#1D0E30',
        'pink-650': '#ea7c69',
        'pink-850': '#2E0D32',
        'pink-950': '#470D35',
        'blue-850': '#127aed',
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
