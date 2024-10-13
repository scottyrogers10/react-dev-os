import { useRef } from "react";

const cursorByPosition = {
	bottom: "ns-resize",
	bottomLeft: "nesw-resize",
	bottomRight: "nwse-resize",
	left: "ew-resize",
	right: "ew-resize",
	top: "ns-resize",
	topLeft: "nwse-resize",
	topRight: "nesw-resize",
};

export default ({ onResize, onResizeEnd, onResizeStart, position }) => {
	const cursor = cursorByPosition[position];
	const isMouseDown = useRef(false);

	const mouseDown = (event) => {
		document.body.style.cursor = cursor;
		document.body.style.userSelect = "none";
		isMouseDown.current = true;
		onResizeStart(event);

		window.addEventListener("mousemove", mouseMove);
		window.addEventListener("mouseup", mouseUp);
	};

	const mouseMove = (event) => {
		if (isMouseDown.current) {
			event.stopImmediatePropagation();
			requestAnimationFrame(() => onResize(event, position));
		}
	};

	const mouseUp = (event) => {
		document.body.style.cursor = "auto";
		document.body.style.userSelect = "";
		window.removeEventListener("mousemove", mouseMove);
		window.removeEventListener("mouseup", mouseUp);

		if (isMouseDown.current) {
			isMouseDown.current = false;
			onResizeEnd(event);
		}
	};

	return { handlers: { mouseDown }, state: { cursor } };
};
