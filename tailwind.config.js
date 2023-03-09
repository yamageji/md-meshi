// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["content/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
        "w-sans": ["Work Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": ".625rem",
      },
    },
    screens: {
      sm: "540px",
      md: "820px",
      lg: "1024px",
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      accent: {
        primary: "var(--color-red-400)",
        secondary: "var(--color-red-500)",
        tertiary: "var(--color-red-100)",
      },
      surface: {
        primary: "var(--color-gray-100)",
        secondary: "var(--color-gray-50)",
        tertiary: "var(--color-gray-200)",
        quaternary: "var(--color-gray-700)",
      },
      text: {
        primary: "var(--color-gray-900)",
        secondary: "var(--color-gray-700)",
        tertiary: "var(--color-gray-500)",
        accent: {
          primary: "var(--color-red-500)",
          secondary: "var(--color-red-400)",
        },
      },
      border: {
        primary: "var(--color-gray-400)",
        secondary: "var(--color-gray-200)",
        tertiary: "var(--color-gray-300)",
      },
      shadow: {
        primary: "var(--color-gray-300)",
      },
    },
  },
  plugins: [],
};
