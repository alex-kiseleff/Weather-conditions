const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	output: {
		path: paths.build,
		publicPath: '/',
		filename: 'js/[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(c|sc)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
					},
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/[name].css',
			chunkFilename: '[id].css',
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), '...'],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});
