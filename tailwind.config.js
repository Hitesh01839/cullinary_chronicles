/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "main-bg": "#1A1A1A",
      "nav-bg": "#333333",
      "secondary-bg": "#242424",
      "btn-bg": "#FF5722",
      "main-text-color": "#FFFFFF",
      "disabled-text-color": "#BDBDBD",
    },
  },
  plugins: [],
};
