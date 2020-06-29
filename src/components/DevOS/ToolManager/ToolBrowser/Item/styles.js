import { css } from "@library/styles";

export default {
  view: {
    cursor: "pointer",
    padding: "3px 8px",
    fontSize: "13px",
    fontWeight: "700",
    color: "#fff",
    ...css.userSelect.none,
  },
  stripe: (index) => {
    const isOddIndex = index % 2 !== 0;

    return isOddIndex && { backgroundColor: "#333333" };
  },
  selected: (isSelected) => {
    return isSelected && { backgroundColor: "#1565c0" };
  },
};
