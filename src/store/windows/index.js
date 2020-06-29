import add from "./add";
import focus from "./focus";
import remove from "./remove";
import update from "./update";

export default {
  actions: {
    add,
    focus,
    remove,
    update,
  },
  name: "windows",
  state: {
    byId: {},
    orderedIds: [],
  },
};
