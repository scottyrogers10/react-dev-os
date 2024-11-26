import { windows } from "#core";

export default (id) => {
	return {
		addEventListener: (type, handler) => windows.addEventListener(id, { handler, type }),
		closeWindow: () => windows.close(id),
		createWindow: windows.create,
		id,
	};
};
