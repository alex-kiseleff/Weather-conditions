const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		path: paths.build,
		publicPath: '/',
		filename: 'js/[name].js',
		clean: true,
	},
	devServer: {
		static: {
			directory: paths.public,
			publicPath: '/public',
		},
		historyApiFallback: true,
		open: {
			app: {
				name: 'chrome',
			},
		},
		compress: true,
		hot: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.(c|sc)ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${paths.public}/index.html`,
			filename: `index.html`,
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true
			}
		}),
	],
});
