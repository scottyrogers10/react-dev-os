import windows from "#procedures/windows";

export default ({ id, refs }) => {
	const resize = (event, dimensions) => windows.resize({ dimensions, elem: refs.window.current, event, id });

	const resizeEnd = (event) => {
		if (refs.window.current) {
			const dimensions = refs.window.current.getBoundingClientRect();
			windows.resize({ dimensions, elem: refs.window.current, event, id, shouldDispatch: true });
		}

		refs.content.current && (refs.content.current.style.pointerEvents = "");
	};

	const resizeStart = () => {
		refs.content.current && (refs.content.current.style.pointerEvents = "none");
	};

	return { handlers: { resize, resizeEnd, resizeStart } };
};
