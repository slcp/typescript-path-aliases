const path = require("path");
const { resolveTsAliases } = require("resolve-ts-aliases");

const tsConfigLocation = path.resolve(__dirname, "tsconfig.json");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts",
  target: "node",
  resolve: {
    alias: resolveTsAliases(tsConfigLocation),
    extensions: [".mjs", ".ts", ".js"],
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
};
