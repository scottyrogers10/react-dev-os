import { colors } from "@library/styles";

export default {
  view: (center) => {
    return {
      display: "flex",
      position: "absolute",
      left: `${center - 340}px`,
      top: "120px",
      height: "366px",
      width: "680px",
      borderRadius: "12px",
      boxShadow: "rgba(0, 0, 0, 0.38) 0px 20px 20px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      border: `1px solid ${colors.gray[700]}`,
      backgroundColor: colors.gray[900],
    };
  },
  toolList: {
    width: "290px",
    height: "100%",
  },
  toolInfo: {
    flex: 1,
    padding: "24px",
  },
};
