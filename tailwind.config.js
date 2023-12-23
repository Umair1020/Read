/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          100: "#505050",
          200: "rgba(80, 80, 80, 0.5)",
        },
        gray: {
          100: "#fafafa",
          200: "#111827",
          300: "rgba(255, 255, 255, 0.5)",
        },
        mediumslateblue: "#6366f1",
        blueviolet: "#7150f5",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        jomolhari: "Jomolhari",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "6xl": "25px",
      "26xl": "45px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-colors-white-1": "#fcfcff",
        "main-colors-dark-2-primary-text": "#1a1b29",
        "main-colors-dark-5": "#c9cad6",
        "main-colors-dark-6-border-also": "#d8d9e5",
        "button-color": "#3843d0",
        "main-colors-dark-3-secondry-text": "#85858f",
        "main-colors-white-2": "#f7f7f7",
        "tints-shades-tones-all-shades-shade-4": "#535785",
        forestgreen: "rgba(40, 167, 69, 0.1)",
        crimson: "rgba(220, 53, 69, 0.1)",
        cadetblue: "rgba(23, 162, 184, 0.1)",
        mediumslateblue: "rgba(56, 67, 208, 0.1)",
        "main-colors-white-3": "#ebebeb",
        gradient: "#4a56ee",
        "main-colors-dark-4": "#b6b7c2",
      },
      spacing: {
        "spacing-32": "32px",
        "spacing-16": "16px",
        "spacing-8": "8px",
        "spacing-12": "12px",
        "spacing-24": "24px",
        "spacing-4": "4px",
        "spacing-2": "2px",
      },
      fontFamily: {
        "body-16-medium": "Inter",
      },
      borderRadius: {
        "981xl": "1000px",
        "roundness-12": "12px",
        "roundness-16": "16px",
        "roundness-8": "8px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      "5xl": "24px",
      xl: "20px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
