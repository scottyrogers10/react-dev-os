import moveWindow from "@procedures/windows/move";

export default ({ contentRef, id, windowRef }) => {
  const handleMove = (event) => {
    moveWindow({ elem: windowRef.current, event, id });

    event.stopPropagation();
    event.preventDefault();
  };

  const handleMoveEnd = (event) => {
    moveWindow({ elem: windowRef.current, event, id, shouldDispatch: true });
    contentRef.current && (contentRef.current.style.pointerEvents = "");

    event.stopPropagation();
    event.preventDefault();
  };

  const handleMoveStart = () => {
    contentRef.current && (contentRef.current.style.pointerEvents = "none");
  };

  return { onMove: handleMove, onMoveEnd: handleMoveEnd, onMoveStart: handleMoveStart };
};
