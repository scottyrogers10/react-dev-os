import { initializeWindow } from "./actions";

export default {
  name: "windows",
  state: {
    byId: {},
    orderedIds: [],
  },
  actions: {
    initializeWindow,
  },
};
