var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

// const env = process.env.NODE_ENV
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const reqSvgs = require.context("./components/images", false, /\.svg$/);

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'sass-loader']
            })
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // presets: ['env']
                }
            }
        },
        {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: 'raw-loader'
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          loader: 'file-loader',
          options: {
            name: './images/[name].[hash].[ext]',
          },
        },
        {
          test: /\.(ico)$/,
          loader: 'file-loader',
          options: {
            name: './[name].[ext]',
          },
        }]
    },
    output: {
        filename: "transformed.js",
        path: __dirname + '/build'
    },
    plugins: [
        HTMLWebpackPluginConfig, new ExtractTextPlugin('main.css')]
};