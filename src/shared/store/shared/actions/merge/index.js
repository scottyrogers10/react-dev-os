const merge = ({ prevState }, nextState) => {
	return { ...prevState, ...nextState };
};

export default merge;
