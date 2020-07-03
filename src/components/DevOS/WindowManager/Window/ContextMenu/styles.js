import { colors } from "@library/styles";

export default {
  view: ({ position: { x, y }, width }) => {
    return {
      position: "absolute",
      top: `${y}px`,
      left: `${x}px`,
      width: `${width}px`,
      display: "flex",
      flexDirection: "column",
      borderRadius: "6px",
      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 15px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      border: `1px solid ${colors.gray[600]}`,
      backgroundColor: colors.gray[800],
      overflow: "hidden",
      padding: "6px 0px",
    };
  },
};
