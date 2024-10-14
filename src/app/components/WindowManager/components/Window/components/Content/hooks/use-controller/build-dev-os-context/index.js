import windows from "#procedures/windows";

export default (id) => {
	return {
		addEventListener: (type, handler) => windows.addEventListener(id, { handler, type }),
		closeWindow: () => windows.close(id),
		createWindow: windows.create,
		id,
	};
};
