module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "Helvetica Neue", "sans-serif"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
