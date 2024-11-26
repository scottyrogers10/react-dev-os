const checkMaxParams = (ctx, fnType) => (node) => {
	const isCallback = node.parent && node.parent.type === "CallExpression";
	const maxParams = 2;

	if (isCallback) return;

	if (node.params.length > maxParams) {
		ctx.report({
			loc: {
				end: node.params[node.params.length - 1].loc.end,
				start: node.params[0].loc.start,
			},
			message: `${fnType} has too many parameters (${node.params.length}). Maximum allowed is ${maxParams}.`,
			node: node.callee,
		});
	}
};

module.exports = {
	create: (ctx) => ({
		ArrowFunctionExpression: checkMaxParams(ctx, "Arrow function"),
		FunctionDeclaration: checkMaxParams(ctx, "Function declaration"),
		FunctionExpression: checkMaxParams(ctx, "Function expression"),
	}),
	meta: {
		docs: { description: "Enforce a maximum number of parameters in function definitions (excluding callbacks)" },
		schema: [{ oneOf: [{ minimum: 0, type: "integer" }] }],
		type: "suggestion",
	},
};
