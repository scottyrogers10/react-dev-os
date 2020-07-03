import { useEffect, useRef } from "react";
import { useMergeState } from "@library/hooks";

export default ({ isActive }) => {
  const ref = useRef(null);
  const [state, setState] = useMergeState({ isOpen: false, position: { x: 0, y: 0 } });

  const handleContextMenu = (event) => {
    if (isActive && !state.isOpen) {
      setState({
        isOpen: true,
        position: { x: event.clientX, y: event.clientY },
      });
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const closeMenu = () => setState({ isOpen: false });
  const handleClick = () => closeMenu();
  const handleMouseDown = () => closeMenu();

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("click", handleClick);
    };
  }, [state.isOpen]);

  useEffect(() => {
    const elem = ref.current;

    if (elem) {
      elem.addEventListener("contextmenu", handleContextMenu);
      return () => {
        elem.removeEventListener("contextmenu", handleContextMenu);
      };
    }
  }, [ref.current, isActive]);

  return { ref, ...state };
};
