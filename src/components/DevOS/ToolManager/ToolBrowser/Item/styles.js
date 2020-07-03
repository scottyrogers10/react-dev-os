import { colors, css } from "@library/styles";

export default {
  view: {
    flex: 1,
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
  selected: (isSelected) => {
    return isSelected && { backgroundColor: colors.blue[800] };
  },
};
