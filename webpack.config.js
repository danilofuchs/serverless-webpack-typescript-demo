const path = require("path");
const slsw = require("serverless-webpack");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: slsw.lib.entries,
  mode: "development",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    plugins: [new TSConfigPathsPlugin()]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};
