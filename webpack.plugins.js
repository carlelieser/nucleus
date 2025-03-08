"use strict";
exports.__esModule = true;
exports.plugins = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
exports.plugins = [
    new ForkTsCheckerWebpackPlugin({
        logger: 'webpack-infrastructure'
    })
];
