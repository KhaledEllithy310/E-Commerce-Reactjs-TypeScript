/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "3rem",
      },
      center: true,
    },
    colors: {
      text: "#0B4A72",
      background: "#0B4A72",
      primary: "#E98316",
      secondary: "#3F3F3F",
      accent: "#F3F3F3",
      primary2: "var(--primary2)",
    },
  },
};
