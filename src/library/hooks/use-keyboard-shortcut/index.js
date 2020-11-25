import { useRef } from "react";
import { useOnWindowEvent } from "@library/hooks";
import isActive from "./is-active";
import isInputElement from "./is-input-element";

export default (shortcuts, onShortcut) => {
  const keyMap = useRef({});
  const isFired = useRef(false);

  const handleKeyDown = (event) => {
    const { keyCode, target } = event;
    keyMap.current = { ...keyMap.current, [keyCode]: true };

    if (!isFired.current && isActive(shortcuts, keyMap.current) && !isInputElement(target)) {
      onShortcut(event);
      isFired.current = true;
    }
  };

  const handleKeyUp = (event) => {
    const { keyCode, target } = event;
    keyMap.current = { ...keyMap.current, [keyCode]: false };

    if (isFired.current && !isActive(shortcuts, keyMap.current) && !isInputElement(target)) {
      isFired.current = false;
    }
  };

  useOnWindowEvent("keydown", handleKeyDown);
  useOnWindowEvent("keyup", handleKeyUp);
};
