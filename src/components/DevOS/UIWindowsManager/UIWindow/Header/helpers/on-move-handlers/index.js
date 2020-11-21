import { uiWindows } from "@procedures";

export default ({ contentRef, id, uiWindowRef }) => {
  const handleMove = (event) => {
    uiWindows.move({ elem: uiWindowRef.current, event, id });

    event.stopPropagation();
    event.preventDefault();
  };

  const handleMoveEnd = (event) => {
    uiWindows.move({ elem: uiWindowRef.current, event, id, shouldDispatch: true });
    contentRef.current && (contentRef.current.style.pointerEvents = "");

    event.stopPropagation();
    event.preventDefault();
  };

  const handleMoveStart = () => {
    contentRef.current && (contentRef.current.style.pointerEvents = "none");
  };

  return { onMove: handleMove, onMoveEnd: handleMoveEnd, onMoveStart: handleMoveStart };
};
