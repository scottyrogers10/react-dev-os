import { closeBrowser, openBrowser, toggleBrowser } from "./actions";

export default {
	actions: { closeBrowser, openBrowser, toggleBrowser },
	name: "tools",
	state: { isBrowserOpen: false },
};
