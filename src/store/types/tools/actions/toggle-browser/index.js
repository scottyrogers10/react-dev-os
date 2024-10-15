export default ({ prevState }) => {
	return { ...prevState, isBrowserOpen: !prevState.isBrowserOpen };
};
