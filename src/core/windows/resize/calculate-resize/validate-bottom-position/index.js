export default (ctx) => {
	const maxBottom = window.innerHeight - 30;
	const position = { x: ctx.position.x, y: ctx.position.y > maxBottom ? maxBottom : ctx.position.y };

	return { ...ctx, position };
};
