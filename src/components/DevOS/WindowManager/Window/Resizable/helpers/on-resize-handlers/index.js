import resizeWindow from "@procedures/windows/resize";

export default ({ contentRef, id, windowRef }) => {
  const handleResize = (dimensions, event) => resizeWindow({ dimensions, elem: windowRef.current, event, id });

  const handleResizeEnd = () => {
    if (windowRef.current) {
      const dimensions = windowRef.current.getBoundingClientRect();
      resizeWindow({ dimensions, elem: windowRef.current, id, shouldDispatch: true });
    }

    contentRef.current && (contentRef.current.style.pointerEvents = "");
  };

  const handleResizeStart = () => {
    contentRef.current && (contentRef.current.style.pointerEvents = "none");
  };

  return { handleResize, handleResizeEnd, handleResizeStart };
};
