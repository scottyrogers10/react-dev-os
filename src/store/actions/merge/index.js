export default ({ prevState }, nextState) => {
	return { ...prevState, ...nextState };
};
