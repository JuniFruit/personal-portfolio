const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
    ;
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                additional: {
                    200: "var(--additional-200)",
                    500: "var(--additional-500)",
                    600: "var(--additional-600)",
                    700: "var(--additional-700)",
                    800: "var(--additional-800)",
                    900: "var(--additional-900)",
                },
                complimentary: {
                    200: "var(--complimentary-200)",
                    500: "var(--complimentary-500)",
                    600: "var(--complimentary-600)",
                    700: "var(--complimentary-700)",
                    800: "var(--complimentary-800)",
                    900: "var(--complimentary-900)",
                },
                secondary: {
                    200: "var(--secondary-200)",
                    500: "var(--secondary-500)",
                    600: "var(--secondary-600)",
                    700: "var(--secondary-700)",
                    800: "var(--secondary-800)",
                    900: "var(--secondary-900)",
                },
                main: {
                    200: "var(--main-200)",
                    500: "var(--main-500)",
                    600: "var(--main-600)",
                    700: "var(--main-700)",
                    800: "var(--main-800)",
                    900: "var(--main-900)"
                },
                'box-bg': "var(--box-bg)",
                'syntax-highlight': 'var(--syntax-highlight)',
                'syntax-keyword': 'var(--syntax-keyword)',
                'syntax-func': 'var(--syntax-func)',
                'syntax-arg': 'var(--syntax-arg)',
                'syntax-string': 'var(--syntax-string)'

            },
            boxShadow: {
                DEFAULT: "0px 3px 6px 0px rgb(1, 4, 9),0px 1px 1px 0px rgba(0, 0, 0, 0.1)",
                md: "0px 3px 6px 0px rgb(1, 4, 9), 0px 1px 1px 0px rgba(0, 0, 0, 0.3)",
                lg: "0px 3px 6px 0px rgb(1, 4, 9), 0px 1px 1px 0px rgba(0, 0, 0, 0.5)"
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opactiy: 1 }
                },
                scaleIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(0.9)'
                    },
                    '50%': {
                        opacity: 0.3
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'scale(1)'
                    }
                },
                enterFromBottom: {
                    "0%": {
                        opacity: 0,
                        transform: 'translateY(100%)'
                    },
                    "100%": {
                        opacity: 1,
                        transform: 'translateY(0%)'
                    }
                }
            },
            fontSize: {
                tiny: '.85rem',
                sm: '.9rem',
                xs: '1rem',
                md: '1.2rem',
                base: '1.4rem',
                lg: '1.5rem',
                xl: '1.5rem',
                '2xl': '1.75rem',
                '3xl': '1.9rem',
                '4xl': '2.5rem',
                '5xl': '3.5rem',
                '6xl': '4.5rem',
                '7xl': '5.5rem'
            },
            animation: {
                fadeIn: 'fadeIn .5s ease-in-out',
                scaleIn: 'scaleIn .35s ease-in-out',
                enterFromBottom: 'enterFromBottom .5s ease-in-out'

            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            }
        },
    },
}
