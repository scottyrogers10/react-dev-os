import { useRef } from "react";
import calculateResizeDimensions from "./calculate-resize-dimensions";

export default ({ minSize, onResize, onResizeEnd, onResizeStart }) => {
	const resizableRef = useRef(null);

	const resize = (event, resizePosition) => {
		const elem = resizableRef.current;
		const dimensions = calculateResizeDimensions({ elem, event, minSize, resizePosition });

		return onResize(event, dimensions);
	};

	return {
		handlers: { resize, resizeEnd: onResizeEnd, resizeStart: onResizeStart },
		refs: { resizable: resizableRef },
	};
};
