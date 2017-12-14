 const path = require('path');
 const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
 const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
 let pathsToClean = ['bin']; // if there are more paths to clean then add here
 
 module.exports = {
	entry: {
		helloworld:'./src/helloworld.js',
		waituntil:'./src/waitUntil.js'
	},
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: '[name].bundle.js' // name will be the key from entry object.
	},
	plugins: [
		new CleanWebpackPlugin(pathsToClean),
		new UglifyJsPlugin()
	],
	module:{
		loaders:[{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015'] // refer to https://babeljs.io/docs/plugins for understanding presets. This is not available in package.json as babel bydefault has es2015 preset
			}
		}]
	}
 };