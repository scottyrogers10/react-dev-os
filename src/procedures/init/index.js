import { serializeTools } from "@shared/serializers";
import store from "@shared/store";

const init = ({ tools }) => {
	store.dispatch("configs.merge", { tools: serializeTools(tools) });
};

export default init;
