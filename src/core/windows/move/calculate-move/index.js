import { pipe } from "#library/packages";
import validateBottomPosition from "./validate-bottom-position";
import validateLeftPosition from "./validate-left-position";
import validateRightPosition from "./validate-right-position";
import validateTopPosition from "./validate-top-position";

export default ({ elem, event, window }) => {
	const { x: prevX, y: prevY } = elem.getBoundingClientRect();

	return pipe({ position: { x: prevX + event.movementX, y: prevY + event.movementY }, size: window.size })
		.flow(validateTopPosition)
		.flow(validateBottomPosition)
		.flow(validateLeftPosition)
		.flow(validateRightPosition)
		.run();
};
