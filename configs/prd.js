const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ env, argv }) => {
  return {
    mode: "production",
    optimization: {
      minimize: false,
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name][contenthash:6].css",
      }),
    ],
  };
};
