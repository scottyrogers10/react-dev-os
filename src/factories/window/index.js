let currentId = 0;

export default {
  create: (attrs = {}, label = "") => {
    const { contextMenu = {}, events = {} } = attrs;

    return {
      id: (currentId += 1),
      isOpaque: true,
      type: label.toUpperCase().replace(/\s+/g, "_"),
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
      contextMenu: { items: [], width: 100, ...contextMenu },
      events: {
        onMove: () => {},
        ...events,
      },
    };
  },
};
