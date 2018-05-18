/// <binding BeforeBuild='Run - Development' />
"use strict";

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');//解决Make sure to include VueLoaderPlugin in your webpack config问题

module.exports = {
    entry:{
        //权限
        Auth_CustomerManage:"./Scripts/Auth_CustomerManage",//注册客户管理
        Auth_NavigationManage:"./Scripts/Auth_NavigationManage.js",//导航菜单
        Auth_RolesManage:"./Scripts/Auth_RolesManage.js",//角色管理
        Auth_DicsManage:"./Scripts/Auth_DicsManage.js",//数据字典
        Auth_AdminManage: "./Scripts/Auth_AdminManage.js",//管理员设置
        Auth_ButtonsManage:"./Scripts/Auth_ButtonsManage.js",//按钮管理
        //业务
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