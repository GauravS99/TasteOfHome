let HTMLWebpackPlugin = require('html-webpack-plugin');

let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	mode: 'development',
	entry: __dirname + '/app/index.js',
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:{
					loader: 'babel-loader'
				}
			},
        {
          test:/\.css$/,
          use:['style-loader','css-loader']
        },
        {
          test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
              }]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
              }]
        }
		]
	},
  devServer:{
    historyApiFallback: true,
  },
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build',
    publicPath: '/'
	},
	plugins: [HTMLWebpackPluginConfig]
};