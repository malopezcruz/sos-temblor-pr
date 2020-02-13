module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    margin: ['responsive', 'first'],
    alignContent: ['responsive'],
    transitionProperty: ['responsive', 'hover'],
    transitionDuration: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
  corePlugins: {
    float: false,
  },
};
