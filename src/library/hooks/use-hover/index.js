import { useRef, useState, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const elem = ref.current;

    if (elem) {
      elem.addEventListener("mouseover", handleMouseOver);
      elem.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        elem.removeEventListener("mouseover", handleMouseOver);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [ref.current]);

  return { isHovered, ref, setIsHovered };
};
