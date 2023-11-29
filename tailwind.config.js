module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono", "monospace"],
        fkDisplay: ["FKDisplay", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        timberwolf: "#D8CFCA",
        seashell: "#FEF4EE",
        ghostWhite: "#EEF0F6",
        onyx: "#403F3E",
        smoky: "#0F0F0F",
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
