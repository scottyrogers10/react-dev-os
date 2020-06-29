import { useState, useEffect } from "react";

export default (store) => {
  return (mapStoreToState, defaultState) => {
    const [state, setState] = useState(defaultState === undefined ? mapStoreToState(store) : defaultState);

    useEffect(() => {
      let isCanceled = false;

      const subscriber = store.subscribe((currentStore) => {
        setTimeout(() => !isCanceled && setState(mapStoreToState(currentStore)), 0);
      });

      return () => {
        isCanceled = true;
        subscriber.unsubscribe();
      };
    }, []);

    return state;
  };
};
