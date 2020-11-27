import { useRef } from "react";
import { useOnWindowEvent } from "@library/hooks";
import isActive from "./is-active";
import isInputElement from "./is-input-element";

// {
// 	closeToolBrowser: {keyBindings: [], onShortcut: () => {}}
// }

export default (shortcuts) => {
  const keyMap = useRef({});
  const isFiredMap = useRef({});

  const handleKeyDown = (event) => {
    const { keyCode, target } = event;
    keyMap.current = { ...keyMap.current, [keyCode]: true };

    Object.entries(shortcuts).forEach(([key, { keyBindings, onShortcut }]) => {
      if (!isFiredMap.current[key] && isActive(keyBindings, keyMap.current) && !isInputElement(target)) {
        onShortcut(event);
        isFiredMap.current[key] = true;
      }
    });
  };

  const handleKeyUp = (event) => {
    const { keyCode, target } = event;
    keyMap.current = { ...keyMap.current, [keyCode]: false };

    Object.entries(shortcuts).forEach(([key, { keyBindings }]) => {
      if (isFiredMap.current[key] && !isActive(keyBindings, keyMap.current) && !isInputElement(target)) {
        isFiredMap.current[key] = false;
      }
    });
  };

  useOnWindowEvent("keydown", handleKeyDown);
  useOnWindowEvent("keyup", handleKeyUp);
};
