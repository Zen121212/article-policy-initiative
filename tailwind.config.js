/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1248px',
  },
  },
  plugins: [
        require("tailwindcss-animate"),
        require("tailwindcss-animated"),

  ],
}

