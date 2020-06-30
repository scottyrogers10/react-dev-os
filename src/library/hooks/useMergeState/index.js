import { useState } from "react";

export default (defaultState = {}) => {
  const [state, setState] = useState(defaultState);

  const mergeState = (updatedState) => {
    if (updatedState instanceof Function) {
      setState((prevState) => ({ ...prevState, ...updatedState(prevState) }));
    } else {
      setState((prevState) => ({ ...prevState, ...updatedState }));
    }
  };

  return [state, mergeState];
};
