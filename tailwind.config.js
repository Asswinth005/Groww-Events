/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6ca3bd",
        "primary-light": "#8cb9d0",
        "primary-dark": "#4f7e94",
        "accent-beige": "#E1D0B3",
        "bg-warm": "#FFFFFF",
        "neutral-dark": "#2A2A2A",
        "neutral-light": "#F5F5F5",
        "dark-bg": "#0a0a0a",
        "dark-card": "#1e1e1e",
        "dark-surface": "#2a2a2a",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
        alt: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
