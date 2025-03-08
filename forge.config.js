"use strict";
exports.__esModule = true;
var plugin_auto_unpack_natives_1 = require("@electron-forge/plugin-auto-unpack-natives");
var plugin_webpack_1 = require("@electron-forge/plugin-webpack");
var webpack_main_config_1 = require("./webpack.main.config");
var webpack_renderer_config_1 = require("./webpack.renderer.config");
var config = {
    packagerConfig: {
        asar: true
    },
    rebuildConfig: {},
    makers: [],
    plugins: [
        new plugin_auto_unpack_natives_1.AutoUnpackNativesPlugin({}),
        new plugin_webpack_1.WebpackPlugin({
            mainConfig: webpack_main_config_1.mainConfig,
            renderer: {
                config: webpack_renderer_config_1.rendererConfig,
                entryPoints: [
                    {
                        html: './src/index.html',
                        js: './src/renderer.ts',
                        name: 'main_window'
                    },
                ]
            }
        }),
    ]
};
exports["default"] = config;
