const Babel = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
    plugins: [['@babel/plugin-transform-react-jsx', {runtime: 'automatic'}]]
  }
};

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [Babel]
  },
  devServer: {
    static: './src',
    historyApiFallback: true
  }
};
