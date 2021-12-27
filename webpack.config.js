/**
 * webpack.config.js webpack的配置文件
 * 作用： 指示webpack干哪些活，当你运行webpack指令的时候，首先活找到这个配置文件，然后加载里面的配置
 *
 * 所有构建工具都是基于nodejs平台运行的， 模块化才用commonjs
 * 而我们的代码是放在src，才用的是ES6的模块化
 */
const { resolve } = require("path");
const { DllPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
// const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // webpack的核心配置
  //入口起点
  entry: "./src/index.js",
  // 输出
  output: {
    // 输出的文件名
    filename: "bundle.js",
    // 输出路径: __dirname   是nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, "build"),
    clean: true,
  },
  devtool: "inline-source-map",
  // loader 配置
  module: {
    rules: [
      // 详细的loader配置
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.less|css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // 将less文件编译成css文件
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          esModule: false,
        },
      },

      // 打包其他资源，除了html, js, css资源以外的资源
      {
        exclude: /\.(css|js|less|html)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
        },
      },
    ],
  },
  // 插件配置
  plugins: [
    // 详细的plugins的配置
    new HtmlWebpackPlugin({
      template: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // new webpack.ProvidePlugin({
    //   React: "react",
    // }),
    // new CopyPlugin({
    //   patterns: [{ from: "assets", to: "assets" }],
    // }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css",
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new CleanWebpackPlugin(),
    new DllPlugin({
      name: "[name].manifest.json",
      path: resolve(__dirname, "../dll/[name].manifest.json"),
    }),
  ],
  devServer: {
    static: "./build",
    compress: true,
    port: 3000,
    open: true,
  },
  mode: "development",
};
