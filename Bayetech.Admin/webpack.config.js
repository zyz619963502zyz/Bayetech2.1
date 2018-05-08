/// <binding BeforeBuild='Run - Development' />
"use strict";

//let path = require('path')

module.exports = {
    entry: {
        //main:"./Scripts/TestES6.js",
        check1: "./Scripts/app/GoodCheck.js",
        check2: "./Scripts/app/GoodCheck.js",
        //check3: "./Scripts/app/GoodCheck.js",
    },
    output: {
        //path: path.join(__dirname, 'Scripts'),
        path: __dirname + '/Scripts/app/Processes',
        filename: "[name].js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    //module: {
    //    loaders: [
    //        {
    //            test: /\.jsx?$/,
    //            loader: "babel-loader"
    //        }
    //    ]
    //}
};