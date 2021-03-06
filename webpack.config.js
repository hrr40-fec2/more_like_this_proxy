const path = require('path');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: {
    more: path.join(__dirname, '../more_like_this_service/client/src/index.jsx'),
    photos: path.join(__dirname, '../Photo-Carousel/client/src/index.jsx'),
    itemoverview: path.join(__dirname, '../item-data-service/client/src/index.jsx')
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader:'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'vendors'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components')
    }
  }
};