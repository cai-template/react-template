const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;


const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "../app"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    { 
                        loader: 'babel-loader',
                        options: {
                            presets: ['react','es2015','stage-0']
                        }
                    }
                ],
                exclude: /node_modules/,
                
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader?modules", {
                    loader: "postcss-loader",
                    options: {
                        plugins: [
                            require('autoprefixer')(),
                            require('postcss-pxtorem')({
                                rootValue: 100,
                                propWhiteList: [],
                                minPixelValue: 2,
                            })
                        ]
                    }
                }, "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../app/index.html')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 8099,
        inline: true,
        hot: true
    }
}