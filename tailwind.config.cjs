const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.svelte", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Fredoka", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
