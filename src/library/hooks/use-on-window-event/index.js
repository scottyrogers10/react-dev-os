import { useEffect } from "react";

export default (eventName, handler) => {
  useEffect(() => {
    window.addEventListener(eventName, handler);

    return () => window.removeEventListener(eventName, handler);
  }, [eventName, handler]);
};
