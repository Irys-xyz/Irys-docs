module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono", "monospace"],
      },
    },
  },
  variants: {},
  plugins: [],
};
