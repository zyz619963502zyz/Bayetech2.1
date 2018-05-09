/// <binding BeforeBuild='Run - Development' />
"use strict";

module.exports = {
    entry:{
        //TestES6: "./Scripts/TestES6.js",
        GoodCheck: "./Scripts/app/GoodCheck.js"
    },
    output: {
        //path: path.join(__dirname, 'Scripts'),
        filename: "./Scripts/components/TranslateContent/[name].js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};