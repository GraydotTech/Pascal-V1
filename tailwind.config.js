/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headers: "#050F3A",
        pTag: "#88858B",
        deepBB: "#0072DB",
      },
      boxShadow: {
        expenses: "0px 2px 100px 0px rgba(47, 47, 47, 0.05)",
      },
      keyframes: {
        progressBarLoader: {
          "0%": {
            transform: "translateX(calc(-100% + 10px))",
          },

          "50%": {
            transform: "translateX(calc(200px - 10px))",
          },

          "100%": {
            transform: "translateX(calc(-100% + 10px))",
          },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        progressBarLoader: "progressBarLoader 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
