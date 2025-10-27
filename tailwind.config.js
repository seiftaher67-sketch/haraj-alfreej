module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#f2b400',
        primaryDark: '#d19b00',
        dark: '#0b0b0b'
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
};
