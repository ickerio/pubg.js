const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: `webpack/pubg.${require('./package.json').version}.js`
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