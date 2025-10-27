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
      },
      animation: {
        'blink-red': 'blink-red 1s ease-in-out infinite',
      },
      keyframes: {
        'blink-red': {
          '0%, 100%': { backgroundColor: '#ef4444', color: 'white' },
          '50%': { backgroundColor: 'transparent', color: '#ef4444' },
        },
      },
      clipPath: {
        'triangle': 'polygon(50% 0%, 0% 100%, 100% 100%)',
      },
    }
  },
  plugins: []
};
