import { colors, css } from "@library/styles";

export default {
  view: {
    color: colors.white,
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "left",
    padding: "0px 12px",
    ...css.userSelect.none,
    ...css.textOverflow.ellipsis,
  },
  hovered: (isHovered) => {
    return isHovered && { backgroundColor: colors.blue[800] };
  },
};
