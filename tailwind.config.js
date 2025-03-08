/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,svelte}"],
    safelist: [{
        pattern: /^bg-/,
        variants: ["hover"]
    }, {
        pattern: /^text-/,
        variants: ["hover"]
    }],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '0 25px 60px -12px rgb(0 0 0 / 0.35)',
            }
        },
        fontFamily: {
            'sans': ['sofia-pro']
        }
    },
    plugins: [],
}

