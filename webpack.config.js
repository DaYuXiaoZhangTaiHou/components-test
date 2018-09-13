'use strict';

require('require-yaml');

var path = require('path');
var webpack = require('webpack');
var px2rem = require('postcss-px2rem');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    context:path.join(__dirname,'src'),
    entry:[
        'babel-polyfill',
        './app.js'
    ],

    output:{
        path:path.join(__dirname,'dist/'),
        publicPath: '/',
        filename:'app.bundle.js'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                    plugins: ["transform-decorators-legacy"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /node_modules/,
                loaders: [
                    'url?limit=1000&hash=sha512&publicPath=/&digest=hex&name=[path][name].[ext]'
                ]
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.web.js', '.js', '.json'],
    },
    postcss: function() {
        return [px2rem({remUnit: 75})];
    },

    devServer: {
        compress: true,
        disableHostCheck: true,

    },

    plugins: [

        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),

        new HtmlWebpackPlugin({
            title:'',
            template:'index.ejs',
            filename:'index.html',
            hash:true
        })

    ]
};
