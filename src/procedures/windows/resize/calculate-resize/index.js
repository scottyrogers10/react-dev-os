import { pipe } from "#library/packages";
import validateBottomPosition from "./validate-bottom-position";
import validateLeftPosition from "./validate-left-position";
import validateRightPosition from "./validate-right-position";
import validateTopPosition from "./validate-top-position";

export default (dimensions, shouldDispatch) => {
	const { height, width, x, y } = dimensions;

	if (shouldDispatch) return { position: { x, y }, size: { height, width } };

	return pipe({ position: { x, y }, size: { height, width } })
		.flow(validateTopPosition)
		.flow(validateBottomPosition)
		.flow(validateLeftPosition)
		.flow(validateRightPosition)
		.run();
};
