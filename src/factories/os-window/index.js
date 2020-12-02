let currentId = 0;

export default {
  create: (attrs = {}) => {
    return {
      isOpaque: true,
      type: "",
      title: "",
      component: () => null,
      position: {
        x: 24,
        y: 24,
      },
      size: {
        height: 200,
        width: 300,
      },
      minSize: {
        height: 24,
        width: 95,
      },
      ...attrs,
      events: {
        onMove: () => {},
        onResize: () => {},
      },
      id: (currentId += 1),
      isFocused: false,
      renderIndex: 0,
    };
  },
};
