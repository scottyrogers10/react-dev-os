import merge from "lodash/merge";

const deepMerge = ({ prevState }, nextState) => {
	return merge(prevState, nextState);
};

export default deepMerge;
