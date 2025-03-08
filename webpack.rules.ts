import type {ModuleOptions} from 'webpack';

import {sveltePreprocess} from "svelte-preprocess/dist/autoProcess";

export const rules: Required<ModuleOptions>['rules'] = [
	{
		test: /native_modules[/\\].+\.node$/,
		use: 'node-loader',
	},
	{
		test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
		parser: {amd: false},
		use: {
			loader: '@vercel/webpack-asset-relocator-loader',
			options: {
				outputAssetBase: 'native_modules',
			},
		},
	},
	{
		test: /\.css/,
		use: ["style-loader", "css-loader", "postcss-loader"]
	},
	{
		test: /\.(svelte)$/,
		use: {
			loader: 'svelte-loader',
			options: {
				hotReload: true,
				preprocess: sveltePreprocess({
					typescript: true,
					postcss: true
				})
			},
		},
	},
	{
		test: /node_modules\/svelte\/.*\.mjs$/,
		resolve: {
			fullySpecified: false
		}
	},
	{
		test: /\.tsx?$/,
		exclude: /(node_modules|\.webpack)/,
		use: {
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
			},
		},
	},
];
