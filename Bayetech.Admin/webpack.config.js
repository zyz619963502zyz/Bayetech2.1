/// <binding BeforeBuild='Run - Development' />
"use strict";

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');//解决Make sure to include VueLoaderPlugin in your webpack config问题

module.exports = {
    entry:{
        //TestES6: "./Scripts/TestES6.js",
        GoodCheck: "./Scripts/app/GoodCheck.js"
    },
    output: {
        //path: path.join(__dirname, 'Scripts'),
        filename: "./Scripts/app/TranslateContent/[name].js"

    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                }
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ],
    },
    resolve:{
        extensions:['.js','.json','.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};