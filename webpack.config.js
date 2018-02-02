var path = require('path');
 var webpack = require('webpack');
 var HtmlWebpackPlugin = require('html-webpack-plugin');
 var ExtractTextPlugin = require("extract-text-webpack-plugin");
     
 module.exports = {
     entry: './src/app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },

     plugins: [
        new HtmlWebpackPlugin({
        title: 'Home',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
       // excludeChunks:['users'],
        template: './src/index.html',
    }),
],


     stats: {
         colors: true
     },
     devtool: 'source-map'
 };