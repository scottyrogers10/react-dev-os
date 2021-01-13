import { useOnMount, useOnUnmount } from "@library/hooks";

export default (eventName, handler) => {
	useOnMount(() => window.addEventListener(eventName, handler));
	useOnUnmount(() => window.removeEventListener(eventName, handler));
};
