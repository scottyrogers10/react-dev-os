import calculateBottomLeftResize from "./calculate-bottom-left-resize";
import calculateBottomResize from "./calculate-bottom-resize";
import calculateBottomRightResize from "./calculate-bottom-right-resize";
import calculateLeftResize from "./calculate-left-resize";
import calculateRightResize from "./calculate-right-resize";
import calculateTopLeftResize from "./calculate-top-left-resize";
import calculateTopResize from "./calculate-top-resize";
import calculateTopRightResize from "./calculate-top-right-resize";

const calculateResizeByPosition = {
	bottom: calculateBottomResize,
	bottomLeft: calculateBottomLeftResize,
	bottomRight: calculateBottomRightResize,
	left: calculateLeftResize,
	right: calculateRightResize,
	top: calculateTopResize,
	topLeft: calculateTopLeftResize,
	topRight: calculateTopRightResize,
};

export default ({ elem, event, minSize, resizePosition }) => {
	if (!elem) return { height: 0, width: 0, x: 0, y: 0 };
	return calculateResizeByPosition[resizePosition]({ elem, event, minSize });
};
