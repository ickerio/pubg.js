const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
    // Normal
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'out/pubg.js',
        library: 'pubg',
        libraryTarget: 'window',
    },
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
},
{
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'out/pubg.min.js',
        library: 'pubg',
        libraryTarget: 'window',
    },
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new UglifyJSPlugin({
            uglifyOptions: {
                mangle: {
                    keep_classnames: true,
                },
                output: {
                    comments: false,
                },
            },
        }),
    ],
},
];
