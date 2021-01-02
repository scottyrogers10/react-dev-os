import { osWindows } from "@procedures";
import store from "@store";

export default (id) => {
	return {
		closeWindow: () => osWindows.close(id),
		createWindow: osWindows.create,
		events: {
			addListener: (eventName, handler) => {
				osWindows.addEventListener(id, { name: eventName, handler });
			},
		},
		id,
		theme: store.getState("ui").theme,
	};
};
