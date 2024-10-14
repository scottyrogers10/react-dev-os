import { useRef } from "react";

export default ({ onMove = () => {}, onMoveEnd = () => {}, onMoveStart = () => {} }) => {
	const isMouseDown = useRef(false);

	const mouseDown = (event) => {
		isMouseDown.current = true;
		onMoveStart(event);
		window.addEventListener("mouseup", mouseUp);
		window.addEventListener("mousemove", mouseMove);
	};

	const mouseMove = (event) => isMouseDown.current && onMove(event);

	const mouseUp = (event) => {
		isMouseDown.current = false;
		onMoveEnd(event);
		window.removeEventListener("mouseup", mouseUp);
		window.removeEventListener("mousemove", mouseMove);
	};

	return mouseDown;
};
