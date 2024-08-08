const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./common.js");

module.exports = merge(commonConfig, {
	mode: "production",
	plugins: [new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })],
});
