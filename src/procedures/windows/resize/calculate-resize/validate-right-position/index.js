export default (ctx) => {
	const maxRight = window.innerWidth - 24;
	const position = { x: ctx.position.x > maxRight ? maxRight : ctx.position.x, y: ctx.position.y };

	return { ...ctx, position };
};
