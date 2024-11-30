/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainColor: "#b70d0d",
            },
            boxShadow: {
                customLogo: " rgba(99, 99, 99, 0.2) 0px 1px 4px 0px;",
                customCategory: '10px 0px 15px black',
                customPizzaItem: '0 0 1rem 0 rgba(0,0,0,.12)'
            },
        },
    },
    plugins: [],
};
