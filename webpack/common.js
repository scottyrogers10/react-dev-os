const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: ["./src/index.js"],
	externals: { react: "react", reactDOM: "react-dom" },
	module: {
		rules: [
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
		],
	},
	output: {
		filename: "bundle.js",
		library: "components",
		libraryTarget: "umd",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/",
	},
	plugins: [new CleanWebpackPlugin(), new webpack.ProgressPlugin()],
	resolve: { extensions: ["*", ".js"] },
	target: "web",
};
