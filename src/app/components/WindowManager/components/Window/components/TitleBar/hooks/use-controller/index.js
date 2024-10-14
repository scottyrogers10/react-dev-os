import { useStore } from "#hooks";
import { useOnMove } from "#library/hooks";
import windows from "#procedures/windows";

export default ({ id, refs }) => {
	const { isFocused, isOpaque, title } = useStore((store) => store.getState("windows").byId[id], ["windows"]);

	const doubleClick = () => store.dispatch("windows.update", { id, isOpaque: !isOpaque });

	const move = (event) => {
		windows.move({ elem: refs.window.current, event, id });

		event.stopPropagation();
		event.preventDefault();
	};

	const moveEnd = (event) => {
		windows.move({ elem: refs.window.current, event, id, shouldDispatch: true });
		refs.content.current && (refs.content.current.style.pointerEvents = "");

		event.stopPropagation();
		event.preventDefault();
	};

	const moveStart = () => {
		refs.content.current && (refs.content.current.style.pointerEvents = "none");
	};

	const mouseDown = useOnMove({ onMove: move, onMoveEnd: moveEnd, onMoveStart: moveStart });

	return { handlers: { doubleClick, mouseDown }, state: { isFocused, title } };
};
