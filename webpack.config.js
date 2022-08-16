const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //Entry point of the app
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  target: "web", // By default it is web, but server side set to node
  devServer: {
    port: 9500,
    static: ["./public"], // Define static files folders, add as many to array as needed
    open: true, //Open browser after server starts, defaults to false
    hot: true, //Allow hot reloading
    liveReload: true, //Allow live reload - refreshes page
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"], //This is what enables users to leave off the extension when importing
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //Tell what files to transpile
        exclude: /node_modules/, //Don't transpile node modules, code inside is already transpiled
        use: "babel-loader",
      },
      {
        test: /\.(gif|svg|jpg|png)$/, //Tells other assets files
        loader: "resolve-url-loader",
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
    }),
  ],
};
