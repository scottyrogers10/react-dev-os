import windows from "#procedures/windows";

export default (id) => {
	const close = () => windows.close(id);
	const minimize = () => windows.minimize(id);
	const toggleExpand = () => windows.toggleExpand(id);

	return { handlers: { close, minimize, toggleExpand } };
};
