import { useRef, useState } from "react";
import { useOnMount, useOnUnmount } from "@library/hooks";
import store from "@shared/store";

const useStore = (mapStoreToState, typeDependencies = []) => {
	const isCanceled = useRef(false);
	const subscriber = useRef({});
	const initState = mapStoreToState(store);
	const [state, setState] = useState(initState);

	useOnMount(() => {
		subscriber.current = store.subscribe((currentStore, { typeName }) => {
			if (typeDependencies.includes(typeName) || typeDependencies.length === 0) {
				!isCanceled.current && setState(mapStoreToState(currentStore));
			}
		});
	});

	useOnUnmount(() => {
		subscriber.current.unsubscribe();
		isCanceled.current = true;
	});

	return state;
};

export default useStore;
