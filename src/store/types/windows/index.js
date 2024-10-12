import { add, focus, remove, removeAll, update } from "./actions";

export default {
	actions: { add, focus, remove, removeAll, update },
	name: "windows",
	state: { byId: {}, focusedId: null, ids: [], maxRenderIndex: 0 },
};
