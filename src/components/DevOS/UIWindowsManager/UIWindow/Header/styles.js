import { colors, css } from "@library/styles";

export default {
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 6px",
    backgroundColor: colors.gray[750],
    overflow: "hidden",
    borderTop: `1px solid ${colors.gray[600]}`,
    borderRight: `1px solid ${colors.gray[600]}`,
    borderLeft: `1px solid ${colors.gray[600]}`,
    borderRadius: "6px 6px 0px 0px",
  },
  focused: (isFocused) => {
    return isFocused && { backgroundColor: colors.gray[800] };
  },
  actionButtons: {
    flex: 1,
    paddingRight: "16px",
  },
  title: {
    color: colors.gray[50],
    fontSize: "13px",
    fontWeight: 700,
    paddingRight: "16px",
    ...css.userSelect.none,
    ...css.textOverflow.ellipsis,
  },
  flexSpacer: {
    flex: 1,
  },
};
