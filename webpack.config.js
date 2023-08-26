import webpack from "webpack";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: "development",
  entry: ["@babel/polyfill", "./samples/index.js"],
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js"
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        resolve: {
          fullySpecified: false,
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    host: "localhost",
    static: './public',
    hot: true
  }
};

export default config;