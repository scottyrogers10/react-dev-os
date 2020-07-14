import { useState, useEffect } from "react";

export default (store) => {
  return (mapStoreToState, defaultState) => {
    const [state, setState] = useState(defaultState === undefined ? mapStoreToState(store) : defaultState);

    useEffect(() => {
      let isCanceled = false;

      const subscriber = store.subscribe((currentStore) => {
        !isCanceled && setState(mapStoreToState(currentStore));
      });

      return () => {
        isCanceled = true;
        subscriber.unsubscribe();
      };
    }, []);

    return state;
  };
};
