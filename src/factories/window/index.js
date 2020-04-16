let currentId = 0;

export default {
  create: (attrs = {}) => {
    const { events = {} } = attrs;

    return {
      id: (currentId += 1),
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
        onBlur: () => {},
        onClick: () => {},
        onMove: () => {},
        ...events,
      },
    };
  },
};
