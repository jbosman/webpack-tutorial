const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry:  './src/index.js', // This is a relatiee path
	output: {
		path: path.resolve( __dirname, 'build'), // Thist has to be an absoulte path hence using path
		filename: 'bundle.js',
		publicPath: 'build/'	// Uses this to correct image file path names
	},
	module: { 		// Pre webpack2 this was called loader
		rules: [
			{	// Babel configuration
				use: 'babel-loader',
				test: /\.js$/  // Test takes a regex. This specifies to look at all files that end with .js
			},  // .babelrc contains presets for what babel should do with these files. Essentially this is what does the ES6 -> ES5
			{
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}),
				test: /\.css$/
			},
			// {
			// 	test: /\.(jpe?g|png|gif|svg)$/,
			// 	use: [ 
			// 	{ 
			// 		loader: 'url-loader',
			// 		options: { limit: 40000 }
			// 	}, 
			// 	'image-webpack-loader' ]
			// }
		]
	},
	plugins: [ // This looks for any files that were transformed by ExtractTextPlugin and puts them into style.css
		new ExtractTextPlugin('style.css')
	]
}

module.exports = config;