"use strict";
exports.__esModule = true;
exports.rules = void 0;
var autoProcess_1 = require("svelte-preprocess/dist/autoProcess");
exports.rules = [
    {
        test: /native_modules[/\\].+\.node$/,
        use: 'node-loader'
    },
    {
        test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
        parser: { amd: false },
        use: {
            loader: '@vercel/webpack-asset-relocator-loader',
            options: {
                outputAssetBase: 'native_modules'
            }
        }
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
                preprocess: (0, autoProcess_1.sveltePreprocess)({
                    typescript: true,
                    postcss: true
                })
            }
        }
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
                transpileOnly: true
            }
        }
    },
];
