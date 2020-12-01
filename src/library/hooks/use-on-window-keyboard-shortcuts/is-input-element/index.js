export default (target) => {
  const { isContentEditable, tagName } = target;
  return tagName === "INPUT" || tagName === "TEXTAREA" || isContentEditable;
};
