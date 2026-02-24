/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: "#E8E4DD",
                signalRed: "#E63B2E",
                accent: "#E63B2E",
                offWhite: "#F5F3EE",
                black: "#111111",
            },
            fontFamily: {
                sans: ["'Space Grotesk'", "sans-serif"],
                serif: ["'DM Serif Display'", "serif"],
                mono: ["'Space Mono'", "monospace"],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3.5rem',
            }
        },
    },
    plugins: [],
}
