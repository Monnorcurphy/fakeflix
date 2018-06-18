var path = require("path");

module.exports = {
  context: __dirname,
  entry: ["./frontend/act_flix.jsx"],
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-regenerator"]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["*", ".js", ".jsx" ]
  }
};
