import { osWindows } from "@procedures";

export default ({ contentRef, id, osWindowRef }) => {
	const handleMove = (event) => {
		osWindows.move({ elem: osWindowRef.current, event, id });

		event.stopPropagation();
		event.preventDefault();
	};

	const handleMoveEnd = (event) => {
		osWindows.move({ elem: osWindowRef.current, event, id, shouldDispatch: true });
		contentRef.current && (contentRef.current.style.pointerEvents = "");

		event.stopPropagation();
		event.preventDefault();
	};

	const handleMoveStart = () => {
		contentRef.current && (contentRef.current.style.pointerEvents = "none");
	};

	return { onMove: handleMove, onMoveEnd: handleMoveEnd, onMoveStart: handleMoveStart };
};
