const path = require('path');
//const webpack = require('webpack');

module.exports = {
    entry: './src/app/main.js',
    output: {
        path: path.resolve(__dirname, './src/public'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
     {
       test: /\.js$/,
       use: {
         loader: "babel-loader",
         options: { presets: ["es2015"] }
       }
     }]
    },
    /*devServer: {
      contentBase: './src/app/main.js',
      hot: true
    },
*/
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
