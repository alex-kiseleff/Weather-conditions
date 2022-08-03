const paths = require('./paths');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
	entry: {
		main: `${paths.client}/index.tsx`
	},
	plugins: [
		new ESLintPlugin({
			files: ['.', 'client'],
			extensions: ['ts', 'tsx', 'js', 'jsx'],
			fix: true,
		}),
		new StylelintPlugin({
			fix: true,
		}),
		new PrettierPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/i,
				type: 'asset/inline',
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-typescript']
					}
				},
			},
		],
	},
	resolve: {
		modules: [paths.client, 'node_modules'],
		extensions: ['.js', '.tsx', '.jsx', '.ts', '.json'],
	},
};
