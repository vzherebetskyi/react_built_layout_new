const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      // publicPath: '/',
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img/',
          },
        },
      },
      {
        test: /\.(woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
          },
        },
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      ],
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
    node: {
      fs: 'empty',
    },
    plugins: [
    new CompressionPlugin({
      test: /\.js$|\.html$/,
    }),
    // new CleanWebpackPlugin(),
    ],
  };
};
