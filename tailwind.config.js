/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.15) 1px 1px 4px",
        "4xl": "rgba(0, 0, 0, 0.1) 4px 4px 5px 0px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "hsla(42, 100%, 50%, 1)",
        bgWhite: "hsla(0, 0%, 100%, 1)",
        textPrimary: "hsla(0, 0%, 17%, 1)",
        textSecondary: "hsla(0, 1%, 37%, 1)",
        border: "hsla(0, 0%, 85%, 1)",
      },
    },
  },
  plugins: [],
};
