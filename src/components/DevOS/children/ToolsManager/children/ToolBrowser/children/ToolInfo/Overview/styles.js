import { colors } from "@library/styles";

export default {
  view: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "96px",
    width: "96px",
    marginBottom: "10px",
    overflow: "hidden",
  },
  label: {
    fontSize: "20px",
    fontWeight: 600,
    color: colors.white,
  },
  version: {
    fontSize: "12px",
    fontWeight: 500,
    color: colors.gray[400],
  },
};
