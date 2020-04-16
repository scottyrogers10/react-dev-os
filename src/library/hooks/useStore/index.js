import { useState, useEffect } from "react";

export default (store) => {
  return (mapStoreToState, defaultState) => {
    const [state, setState] = useState(defaultState === undefined ? mapStoreToState(store) : defaultState);

    useEffect(() => {
      const subscriber = store.subscribe((currentStore) => {
        setState(mapStoreToState(currentStore));
      });

      return subscriber.unsubscribe;
    }, []);

    return state;
  };
};
