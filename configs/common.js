const { resolvePath } = require("./utils/index");

module.exports = {
  entry: resolvePath("./src/main.ts"),
  output: {
    filename: "[name][contenthash:6].js",
    path: resolvePath("./dist"),
    clean: true
  },
  resolve: {
    extensions: ['.ts','.tsx', '.jsx', '...']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
};
