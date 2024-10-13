export default ({ css }, { layoutProps }) => ({
	root: { ...css.defaultStyles, ...layoutProps },
});
