import { extractLayoutProps, getLayoutStyles } from "#library/utils/styles";

export default (props) => {
	const { layoutProps, rest } = extractLayoutProps(props);
	return { layoutProps: getLayoutStyles(layoutProps), rest };
};
