const hexColorRegex = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b/g;

const checkLowercaseHexCode = (ctx) => (node) => {
	let text, nodeStart;

	if (node.type === "TemplateElement") {
		text = node.value.raw;
		nodeStart = node.loc.start;
	} else {
		const sourceCode = ctx.getSourceCode();

		text = sourceCode.getText(node);
		nodeStart = node.loc.start;
	}

	const matches = [...text.matchAll(hexColorRegex)];

	for (const match of matches) {
		const hexValue = match[0];

		if (hexValue !== hexValue.toLowerCase()) {
			const startColumn = nodeStart.column + match.index;
			const endColumn = startColumn + hexValue.length;

			ctx.report({
				fix: (fixer) => {
					return fixer.replaceTextRange(
						[node.range[0] + match.index, node.range[0] + match.index + hexValue.length],
						hexValue.toLowerCase()
					);
				},
				loc: {
					end: { column: endColumn, line: nodeStart.line },
					start: { column: startColumn, line: nodeStart.line },
				},
				message: `Hex color value "${hexValue}" should be in lowercase.`,
				node,
			});
		}
	}
};

module.exports = {
	create(ctx) {
		return { Literal: checkLowercaseHexCode(ctx), TemplateElement: checkLowercaseHexCode(ctx) };
	},
	meta: {
		docs: { description: "Enforce lowercase hex values in CSS" },
		fixable: "code",
		type: "suggestion",
	},
};
