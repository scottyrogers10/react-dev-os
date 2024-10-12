import { useRef, useState } from "react";
import { useOnMount, useOnUnmount } from "#library/hooks";

export default (store) =>
	(mapStoreToState, typeDependencies = []) => {
		const isCanceled = useRef(false);
		const subscriber = useRef({});

		const initState = mapStoreToState(store);
		const [state, setState] = useState(initState);

		useOnMount(() => {
			isCanceled.current = false;
			subscriber.current = store.subscribe((currentStore, { typeName }) => {
				if (typeDependencies.includes(typeName) || typeDependencies.length === 0) {
					!isCanceled.current && setState(mapStoreToState(currentStore));
				}
			});
		});

		useOnUnmount(() => {
			isCanceled.current = true;
			subscriber.current.unsubscribe();
		});

		return state;
	};
