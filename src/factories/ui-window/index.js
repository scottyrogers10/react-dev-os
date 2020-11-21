let currentId = 0;

export default {
  create: (attrs = {}) => {
    const { events = {} } = attrs;

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
        width: 300,
        height: 200,
      },
      ...attrs,
      events: {
        onMove: () => {},
        onResize: () => {},
        ...events,
      },
      id: (currentId += 1),
      isFocused: false,
      renderIndex: 0,
    };
  },
};
