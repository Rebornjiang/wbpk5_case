const { resolvePath } = require("./utils/index");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ env, argv }) => {
  
  const { mode } = env;
  const devMode = mode !== "production" ? true : false;

  return {
    entry: resolvePath("./src/main.ts"),
    output: {
      filename: "[name][contenthash:6].js",
      path: resolvePath("./dist"),
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".jsx", "..."],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset',
          generator: {
            filename: 'images/[hash][ext][query]'
          },
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024 // 4kb
            }
          }

        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: devMode ? "Development" : "系统名称",
        template: resolvePath("./public/index.html"),
        favicon: resolvePath("./public/favicon.ico"),
      }),
    ],
  };
};
