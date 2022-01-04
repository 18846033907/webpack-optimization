/**
 * webpack.config.js webpack的配置文件
 * 作用： 指示webpack干哪些活，当你运行webpack指令的时候，首先活找到这个配置文件，然后加载里面的配置
 *
 * 所有构建工具都是基于nodejs平台运行的， 模块化才用commonjs
 * 而我们的代码是放在src，才用的是ES6的模块化
 */
const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin=require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const notifier = require("node-notifier");
// const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const SpeedMeasureWebpack5Plugin = require("speed-measure-webpack5-plugin");
const PurgecssWebpackPlugin=require('purgecss-webpack-plugin')
const smw = new SpeedMeasureWebpack5Plugin();
const bootstrap = resolve(
  __dirname,
  "node_modules/bootstrap/dist/css/bootstrap.css"
);

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
  context: process.cwd(),
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: { bootstrap },
    modules: ["c:/node_modules", "node_modules"], //指定查找目录s
  },
  externals: {
    jquery: "jQuery",
  },
  optimization:{
    minimizer:[new TerserPlugin()]//压缩js
  },
  // loader 配置
  module: {
    rules: [
      // 详细的loader配置
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          { loader: "thread-loader", options: { worker: 3 } },
          { loader: "babel-loader", options: { cacheDirectory: true } },
        ],
      },
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              // "cache-loader",
              // "style-loader",
              MiniCssExtractPlugin.loader,
              "css-loader",
              // 将less文件编译成css文件
              "postcss-loader",
            ],
          },
          {
            test: /\.less$/,
            use: [
              // "style-loader",
              MiniCssExtractPlugin.loader,
              "css-loader",
              // 将less文件编译成css文件
              "postcss-loader",
              "less-loader",
            ],
          },
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
      template: "./index.html",
      minify:{
        collapseWhitespace:true,
        removeComments:true,
      }
    }),
    // new FriendlyErrorsWebpackPlugin({
    //   onErrors: (severity, errors) => {
    //     let error = errors[0];
    //     notifier.notify({
    //       title: "webpack编译失败",
    //       message: severity + ":" + error.name,
    //       subtitle: error.file || "",
    //     });
    //   },
    // }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "disabled",
    //   generateStatsFile: true,
    // }),

    // new webpack.ProvidePlugin({
    //   React: "react",
    // }),
    // new CopyPlugin({
    //   patterns: [{ from: "assets", to: "assets" }],
    // }),
    new MiniCssExtractPlugin({filename:'[name].css'}),
    new OptimizeCssAssetsWebpackPlugin(),//压缩css
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),

    // new DllPlugin({
    //   name: "[name].manifest.json",
    //   path: resolve(__dirname, "../dll/[name].manifest.json"),
    // }),
  ],
  devServer: {
    static: "./build",
    compress: true,
    port: 3000,
    open: true,
  },
  mode: "development",
};
