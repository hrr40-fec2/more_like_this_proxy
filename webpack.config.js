const path = require('path');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = [
  {
    entry: {
      more: path.join(__dirname, '../more_like_this_service/client/src/index.js'),
    },
    output: {
      filename: '[name].js',
      path: DIST_DIR,
      libraryTarget: 'var',
      library: 'More'
    },
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
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
    }
  },

  {
    entry: {
      photos: path.join(__dirname, '../Photo-Carousel/client/src/index.js'),
    },
    module: {
      rules: [
        {
          test: [/\.(js|jsx)$/],
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
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
    output: {
      filename: '[name].js',
      path: DIST_DIR,
      libraryTarget: 'var',
      library: 'App'
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
    }
  },

  {
    entry: {
      itemoverview: path.join(__dirname, '../item-data-service/client/src/index.js'),
    },
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    },
    output: {
      filename: '[name].js',
      path: DIST_DIR,
      libraryTarget: 'var',
      library: 'ItemOverview'
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
    }
  }
];