const path = require('path');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'name.[contenthash].js',
        assetModuleFilename: 'name.[contenthash][ext]'
    },
    module: {
       rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtactPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator:{
                    filename: path.join('icons', '[name].[contentname][ext]')
                }
            },
       ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtactPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src')
    }
}