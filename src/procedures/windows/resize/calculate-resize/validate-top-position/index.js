export default (ctx) => {
	const maxTop = 0;
	const position = { x: ctx.position.x, y: ctx.position.y < maxTop ? maxTop : ctx.position.y };

	return { ...ctx, position };
};
