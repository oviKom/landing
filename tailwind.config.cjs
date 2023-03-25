const Color = require('color');

const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#504394',
                    hover: darken('#504394', 0.25)
                },
                black: '#1C2126',
            },
            fontFamily: {
                'navbar': ['"Noto Sans"', 'Courier'],
                'body': ['Montserrat', 'Courier'],
            },
            borderRadius: {
                '100': '100px'
            },
        },
    },
    plugins: [],
};
