const Color = require('color');

const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4525F2',
                    hover: darken('#4525F2', 0.25),
                },
                black: '#1C2126',
                'custom-gray': '#737373',
                card: {
                    gray: '#F2F4F8',
                    purple: '#B4A8F9'
                },
                footer: {
                    gray: '#D7DCDE'
                }
            },
            fontFamily: {
                'navbar': ['"Noto Sans"', 'Courier'],
                'body': ['Montserrat', 'Courier'],
            },
            borderRadius: {
                '100': '100px',
            },
            screens: {
                '3xl': '1750px',
                '4xl': '1950px',
                '5xl': '2150px',
                '6xl': '2450px',
                '7xl': '2850px',
                '8xl': '3300px',
              }
        },
    },
    plugins: [],
};
