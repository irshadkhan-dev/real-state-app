/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      visibility: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".visibility-visible": {
          visibility: "visible",
        },
        ".visibility-hidden": {
          visibility: "hidden",
        },
      });
    },
  ],
};
