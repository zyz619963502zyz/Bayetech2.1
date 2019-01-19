"use strict";

const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');//解决Make sure to include VueLoaderPlugin in your webpack config问题


module.exports = {
    entry:{
        Login:"./Scripts/app/Login",//登录页
        //权限
        Auth_CustomerManage:"./Scripts/app/Auth_CustomerManage",//注册客户管理
        Auth_NavigationManage:"./Scripts/app/Auth_NavigationManage.js",//导航菜单
        Auth_RolesManage:"./Scripts/app/Auth_RolesManage.js",//角色管理
        Auth_DicsManage:"./Scripts/app/Auth_DicsManage.js",//数据字典
        Auth_AdminManage: "./Scripts/app/Auth_AdminManage.js",//管理员设置
        Auth_ButtonsManage:"./Scripts/app/Auth_ButtonsManage.js",//按钮管理
        Auth_DepartmentManage: "./Scripts/app/Auth_DepartmentManage.js",//部门管理

        //业务
        GoodCheck: "./Scripts/app/GoodCheck.js",

        //字典
        GameMenu:"./Scripts/app/GameMenu.js",
        GameProperty: "./Scripts/app/GameProperty.js",
        Setting: "./Scripts/app/Setting.js",
        

        //流程
        WFManage:"./Scripts/app/WFManage.js"
    },
    output: {
        //path: path.join(__dirname, 'Scripts'),
        filename: "./Scripts/app/TranslateContent/[name]_ES5.js"

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
        extensions: ['.js', '.json', '.vue'],
        alias: {
            COM: path.resolve('./Scripts/common.js')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            comCompnent: 'COM' //全局引用COM插件已经跑通。
        })
    ]
};