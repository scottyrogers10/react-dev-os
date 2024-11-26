export default (ctx) => {
	const maxLeft = -(ctx.size.width - 30);
	const position = { x: ctx.position.x < maxLeft ? maxLeft : ctx.position.x, y: ctx.position.y };

	return { ...ctx, position };
};
