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
                        transform: 'translateY(10%)'
                    },
                    "100%": {
                        opacity: 1,
                        transform: 'translateY(0%)'
                    }
                },
                slideInLeft: {
                    '0%': {
                        transform: 'translateX(-10%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateX(0%)',
                        opacity: '1'
                    }
                },
                slideInTop: {
                    '0%': {
                        transform: 'translateY(-10%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0%)',
                        opacity: '1'
                    }
                },
                slideInRight: {
                    '0%': {
                        transform: 'translateX(10%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateX(0%)',
                        opacity: '1'
                    }
                },
                type: {
                    '0%': {
                        width: '0',
                        opacity: '0'
                    },
                    "1%": {
                        opacity: "1"
                    },
                    "99.9%": {
                        borderRight: '.15em solid var(--additional-500)'
                    },
                    "100%": {
                        borderRight: 'none',
                        opacity: "1"
                    }

                },
                curtainSlide: {
                    '0%': {
                        transform: 'translateX(-100%)',

                    },
                    '100%': {
                        transform: 'translateX(500%)',

                    }
                },
                shipFlyIn: {
                    "0%": {
                        transform: 'translate(-600%, -200%)'
                    },
                    "30%": {
                        transform: 'translate(-200%, -50%)'
                    },
                    "40%": {
                        transform: 'translate(-250%, 0%)'
                    },
                    "50%": {
                        transform: 'translate(-100%, -30%)'
                    },
                    "60%": {
                        transform: 'translate(-50%,  0%)'
                    },
                    "100%": {
                        transform: 'translate(0%, 0%)'
                    }


                },
                float: {
                    "0%": {
                        transform: 'translateY(-10%)'
                    },
                    '100%': {
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
                enterFromBottom: 'enterFromBottom .5s ease-in-out',
                slideInLeft: 'slideInLeft .35s ease',
                slideInRight: 'slideInRight .35s ease',
                slideInTop: 'slideInTop .35s ease',
                curtainSlide: 'curtainSlide .35s ease .55s',
                type: "type 1s ease",
                shipFlyIn: "shipFlyIn 4s ease",
                float: 'float 2s ease'

            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            }
        },
    },
}
