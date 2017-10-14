const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/client.js',
    output: {
        path: __dirname,
        filename: 'out/pubg.js',
        library: 'pubg',
        libraryTarget: 'window',
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [(new UglifyJSPlugin({
        uglifyOptions: {
            mangle: { keep_classnames: true },
            output: { comments: false },
        },
    })),
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
    new webpack.optimize.ModuleConcatenationPlugin()]
};