var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    OpenBrowserPlugin=require('open-browser-webpack-plugin');

module.exports = {
	entry: {
        app: path.resolve(__dirname, './app'),
        verdor: [
            'react-dom',
            'react',
            'react-router',
            'react-router-dom',
            'whatwg-fetch'
        ]
    },
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
            { test: /\.scss/ , use: ExtractTextWebpackPlugin.extract({
            	fallback: 'style-loader',
            	use: ['css-loader',{
                loader: 'postcss-loader',
                options: {
                  plugins: [require('autoprefixer')(),require('postcss-pxtorem')()]
                         }
              },'sass-loader']
            })}, 
            {test: /\.js/ , use: {
                loader: 'babel-loader',
                options: {
                  presets: ['react','es2015','stage-0']
                }

            }},
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
	plugins: [
          new ExtractTextWebpackPlugin('styles.css'),
          new HtmlWebpackPlugin({
               template: __dirname + '/app/index.tmpl.html'
          }),
          // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    // new webpack.optimize.OccurenceOrderPlugin(),
    
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                warnings: false
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'js/[name].[chunkhash:7].js'
              }),
              new webpack.DefinePlugin({
                __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
              }),
              new webpack.optimize.AggressiveMergingPlugin()//合并块 没啥吊用
	],
  devServer:{
    contentBase:'./app',
    host:'10.0.10.64',
    port:8088,
    inline:true,
    hot:true,
  }
}