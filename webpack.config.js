
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    const ExtractTextPlugin = require("extract-text-webpack-plugin");

    module.exports = {
        entry: './src/app.js',
        output: {
            filename: './dist/app.bundle.js'
        },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
            plugins: [new HtmlWebpackPlugin({
                title: 'Project demo',
                minify: {
                    collapseWhitespace: true
                },
                hash: true,
                template: './src/index.html',
            }),
            new ExtractTextPlugin({
                filename: 'app.css',
                disable: false,
                allChunks: true,
            })
            ]
        }
    };
