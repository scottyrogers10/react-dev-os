export default {
  create: (attrs = {}) => {
    return {
      author: "",
      createdDate: "",
      description: "",
      hotKey: null,
      icon: null,
      label: "",
      version: "0.0.0",
      window: {},
      ...attrs,
    };
  },
};
