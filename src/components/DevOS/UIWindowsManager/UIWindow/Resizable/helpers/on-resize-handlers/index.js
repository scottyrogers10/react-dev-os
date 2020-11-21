import { uiWindows } from "@procedures";

export default ({ contentRef, id, uiWindowRef }) => {
  const handleResize = (dimensions, event) => uiWindows.resize({ dimensions, elem: uiWindowRef.current, event, id });

  const handleResizeEnd = (event) => {
    if (uiWindowRef.current) {
      const dimensions = uiWindowRef.current.getBoundingClientRect();
      uiWindows.resize({ dimensions, elem: uiWindowRef.current, event, id, shouldDispatch: true });
    }

    contentRef.current && (contentRef.current.style.pointerEvents = "");
  };

  const handleResizeStart = () => {
    contentRef.current && (contentRef.current.style.pointerEvents = "none");
  };

  return { handleResize, handleResizeEnd, handleResizeStart };
};
