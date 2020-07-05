import { colors } from "library/styles";

export default {
  view: ({ isMoving, isResizing }) => {
    return {
      flex: 1,
      borderRight: `1px solid ${colors.gray[700]}`,
      borderBottom: `1px solid ${colors.gray[700]}`,
      borderLeft: `1px solid ${colors.gray[700]}`,
      borderRadius: "0px 0px 6px 6px",
      backgroundColor: colors.gray[900],
      overflow: "hidden",
      pointerEvents: isMoving || isResizing ? "none" : "auto",
    };
  },
};
