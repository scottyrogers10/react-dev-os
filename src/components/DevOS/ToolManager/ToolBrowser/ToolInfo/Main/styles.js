import { colors } from "@library/styles";

export default {
  view: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    height: "96px",
    width: "96px",
    marginBottom: "10px",
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
