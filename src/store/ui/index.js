import updateTheme from "./update-theme";

export default {
  actions: {
    updateTheme,
  },
  name: "ui",
  state: {
    theme: {
      colors: {
        primaryColor: null,
      },
    },
  },
};
