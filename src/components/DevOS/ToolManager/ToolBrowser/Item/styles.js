import { colors, css } from "@library/styles";

export default {
  view: {
    cursor: "pointer",
    padding: "3px 8px",
    fontSize: "13px",
    fontWeight: "700",
    color: colors.white,
    ...css.userSelect.none,
  },
  stripe: (index) => {
    const isOddIndex = index % 2 !== 0;

    return isOddIndex && { backgroundColor: colors.gray[800] };
  },
  hovered: (isHovered) => {
    return isHovered && { backgroundColor: colors.blue[800] };
  },
};
