const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', 'wwwroot', 'dist')
    },
    mode: 'development',
    devtool: 'source-map'
});