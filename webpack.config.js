var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src');
var TEST_DIR = path.resolve(__dirname, 'tests');

var config = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: [APP_DIR, TEST_DIR],
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;