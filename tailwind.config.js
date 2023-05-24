/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'manrope':'Manrope, sans-serif',
                'rubick':'Rubik, sans-serif'
            }
        },
    },
    plugins: [],
}
