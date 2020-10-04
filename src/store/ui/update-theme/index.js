export default ({ prevState }, updatedTheme) => {
  const theme = { ...prevState.theme, ...updatedTheme };
  return { ...prevState, theme };
};
