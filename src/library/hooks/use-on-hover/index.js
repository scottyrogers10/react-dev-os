import { useState } from "react";

export default () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseOver = () => setIsHovered(true);

  const events = {
    onMouseLeave: handleMouseLeave,
    onMouseOver: handleMouseOver,
  };

  return { events, isHovered, setIsHovered };
};
