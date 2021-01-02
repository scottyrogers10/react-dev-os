import close from "./close";
import open from "./open";
import toggle from "./toggle";

export default {
	actions: {
		close,
		open,
		toggle,
	},
	name: "toolBrowser",
	state: {
		isOpen: false,
	},
};
