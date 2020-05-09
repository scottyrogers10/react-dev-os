import { colors } from "library/styles";

export default {
  view: ({ position: { x, y }, size: { width, height } }) => {
    return {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      height: `${height}px`,
      width: `${width}px`,
      borderRadius: "6px",
      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 15px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    };
  },
  header: {
    minHeight: "22px",
    height: "22px",
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    borderRight: `1px solid ${colors.gray[700]}`,
    borderBottom: `1px solid ${colors.gray[700]}`,
    borderLeft: `1px solid ${colors.gray[700]}`,
    borderRadius: "0px 0px 6px 6px",
    backgroundColor: colors.gray[900],
    overflow: "hidden",
  },
};
