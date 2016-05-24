config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query:{
          presets: ['react', 'es2015'],
        }
      }
    ]
  }
}

          // plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
module.exports = config;
