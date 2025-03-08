import type {Configuration} from 'webpack';

import {rules} from './webpack.rules';
import {plugins} from './webpack.plugins';
import * as path from "path";

export const rendererConfig: Configuration = {
	target: "electron-renderer",
	module: {
		rules,
	},
	plugins,
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte/src/runtime') // Svelte 3: path.resolve('node_modules', 'svelte'),
		},
		mainFields: ['svelte', 'browser', 'module', 'main'],
		conditionNames: ['svelte', 'browser', 'import'],
		extensions: ['.js', '.ts', '.css', '.mjs', '.svelte'],
	},
};
