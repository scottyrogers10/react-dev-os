export default ({ prevState }) => {
	return { ...prevState, isOpen: !prevState.isOpen };
};
