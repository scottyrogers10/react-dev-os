const { merge } = require("webpack-merge");
const commonConfig = require("./common.js");

module.exports = merge(commonConfig, { devtool: "inline-source-map", mode: "development" });
