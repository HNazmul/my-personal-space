const { fontFamily, screens } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.svelte", "./index.html"],
    theme: {
        screens: {
            xs: "350px",
            ...screens,
        },
        extend: {
            fontFamily: {
                sans: ["Fredoka", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
