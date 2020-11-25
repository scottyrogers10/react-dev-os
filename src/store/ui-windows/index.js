import add from "./add";
import focus from "./focus";
import remove from "./remove";
import removeAll from "./remove-all";
import update from "./update";

export default {
  actions: {
    add,
    focus,
    remove,
    removeAll,
    update,
  },
  name: "uiWindows",
  state: {
    byId: {},
    focusedId: null,
    ids: [],
    maxRenderIndex: 0,
  },
};
