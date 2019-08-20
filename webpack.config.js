var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    OpenBrowserPlugin=require('open-browser-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './app'),
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
            {
              test: /\.js/ ,
              exclude: /node_modules/,
               use: {
                loader: 'babel-loader',
                options: {
                  presets: ['react','es2015','stage-0'],
                  plugins: [
                    "transform-runtime"
                   ]
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
	],
  devServer:{
    contentBase:'./app',
    host:'172.16.244.100',
    port:8088,
    inline:true,
    hot:true,
    proxy: {
      '/loanweb':{
        target: 'http://loan.huishuaka.com',
        changeOrigin: true
      }
    }
  }
}