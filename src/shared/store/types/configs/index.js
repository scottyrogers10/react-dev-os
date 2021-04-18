import { merge, update } from "../../shared/actions";

export default {
	actions: { merge, update },
	name: "configs",
	state: {
		theme: {
			colors: {
				primary: null,
			},
		},
		tools: [],
	},
};
