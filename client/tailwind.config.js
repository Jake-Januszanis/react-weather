
module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
      screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
      },
      extend: {
        backgroundImage: theme => ({
          'bg-main': "url('./src/images/weather-bg.jpg')"
        })
      },
    },
    variants: {},
    plugins: [],
  }