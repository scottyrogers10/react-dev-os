import React from "react";
import { Text, View } from "@library/components";
import { useOnMove } from "@library/hooks";
import { useStore } from "@tools/hooks";
import store from "@store";
import { ActionButtons } from "./children";
import { onMoveHandlers } from "./helpers";
import styles from "./styles";

const Header = ({ contentRef, id, style, osWindowRef }) => {
	const { events } = useOnMove(onMoveHandlers({ contentRef, id, osWindowRef }));
	const { isFocused, isOpaque, title } = useStore((store) => store.getState("osWindows").byId[id]);

	const handleDoubleClick = () => store.dispatch("osWindows.update", { id, isOpaque: !isOpaque });

	return (
		<View
			style={{ ...styles.view, ...style, ...styles.focused(isFocused) }}
			onDoubleClick={handleDoubleClick}
			{...events}
		>
			<ActionButtons style={styles.actionButtons} isFocused={isFocused} id={id} />
			<Text style={styles.title}>{title}</Text>
			<View style={styles.flexSpacer} />
		</View>
	);
};

Header.defaultProps = {
	contentRef: null,
	id: null,
	style: {},
	osWindowRef: null,
};

export default Header;
