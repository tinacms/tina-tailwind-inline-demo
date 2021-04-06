const chroma = require("chroma-js");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.blue,
      teal: colors.cyan,
      green: colors.emerald,
      red: colors.rose,
      purple: colors.purple,
      pink: colors.pink,
      yellow: colors.yellow,
      orange: colors.orange,
    },
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1500px",
      "2xl": "1800px",
    },
    extend: {
      spacing: {
        128: "32rem",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    /* https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574 */
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          if (value === "transparent" || value === "currentColor") return;

          const newVars =
            typeof value === "string"
              ? {
                  [`--color${colorGroup}-${colorKey}`]: value,
                  [`--color-rgb${colorGroup}-${colorKey}`]: chroma(value)
                    .rgb()
                    .toString(),
                }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};
