const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  whitelist: [
    'text-gray-900',
    'antialiased',
    'text-purple-800',
    'body',
    'bg-gray-700',
    'bg-purple-700',
    'bg-indigo-700',
    'bg-teal-700',
    'bg-green-700',
    'bg-blue-700',
    'bg-red-700',
    'bg-yellow-700',
    'bg-pink-700',
    'bg-orange-700',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});
module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
});
