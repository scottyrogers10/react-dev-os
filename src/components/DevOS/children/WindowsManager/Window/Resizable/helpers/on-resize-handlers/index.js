import { osWindows } from "@procedures";

export default ({ contentRef, id, osWindowRef }) => {
	const handleResize = (dimensions, event) => osWindows.resize({ dimensions, elem: osWindowRef.current, event, id });

	const handleResizeEnd = (event) => {
		if (osWindowRef.current) {
			const dimensions = osWindowRef.current.getBoundingClientRect();
			osWindows.resize({ dimensions, elem: osWindowRef.current, event, id, shouldDispatch: true });
		}

		contentRef.current && (contentRef.current.style.pointerEvents = "");
	};

	const handleResizeStart = () => {
		contentRef.current && (contentRef.current.style.pointerEvents = "none");
	};

	return { handleResize, handleResizeEnd, handleResizeStart };
};
