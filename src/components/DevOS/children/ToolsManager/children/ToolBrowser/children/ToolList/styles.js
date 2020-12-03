import { colors } from "@library/styles";

export default {
  view: {
    display: "flex",
    flexDirection: "column",
    borderRight: `1px solid ${colors.gray[700]}`,
    backgroundColor: "rgba(33, 33, 33, .90)",
  },
  title: {
    color: colors.white,
    fontSize: "10px",
    fontWeight: "700",
    height: "28px",
    lineHeight: "28px",
    paddingLeft: "16px",
  },
  list: {
    flex: 1,
    overflowY: "auto",
    overflowX: "none",
  },
  item: (isSelected, themeColors) => {
    const highlightColor = themeColors.primaryColor || colors.blue[800];

    return {
      backgroundColor: isSelected && highlightColor,
      height: "28px",
      lineHeight: "28px",
      padding: "0px 12px 0px 16px",
    };
  },
};
