import { colors, css } from "@library/styles";

export default {
  view: {
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
    color: colors.white,
    ...css.userSelect.none,
    ...css.textOverflow.ellipsis,
  },
};
