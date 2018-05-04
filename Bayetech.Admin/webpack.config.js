/// <binding BeforeBuild='Run - Development' />
"use strict";

module.exports = {
    entry: "./Scripts/TestES6.js",
    output: {
        //path: path.join(__dirname, 'Scripts'),
        filename:  "./Scripts/bundle.js"
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