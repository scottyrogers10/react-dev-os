import { tool as toolFactory } from "@factories";

export default (tools) => {
  return tools.map((tool) => {
    return toolFactory.create(tool);
  });
};
