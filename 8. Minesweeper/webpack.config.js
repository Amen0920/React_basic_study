const path = require('path');
const RefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name : 'Minesweeper-setting',
    mode : 'development',
    devtool : 'eval',
    resolve :{
        extensions:['.js','.jsx']
    },

    entry:{
        app:['./client']
    },

    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            presets:['@babel/preset-env','@babel/preset-react'],
            plugins:['react-refresh/babel'],

        }]
    },

    plugins:[
        new RefreshWebpack(),
    ],

    output:{
        path:path.join(__dirname,'js'),
        filename:'app.js',
        publicPath:'/js/'
    },

    devServer:{
        host:true,
        port:8081,
        publicPath:'/js/'
    }

}