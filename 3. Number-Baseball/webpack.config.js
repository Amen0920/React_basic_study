const path = require('path');
const RefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name : 'NumberBaseball-setting',
    mode : 'development',
    devtool : 'eval',
    resolve:{
        extensions:['.jsx','.js']
    },

    entry:{
        app:['./client']
    },

    module:{
        rules:{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env','@babel/preset-react'],
                plugins:['react-refresh/babel']
            }

        }

    },
    plugins:[
        new RefreshWebpack()
    ],
    
    output:{
        path:path.join(__dirname,'js'),
        filename:'app.js',
        publicPath:'/js/'
    },

    devServer:{
        port:8081,
        hot:true,
        publicPath:'/js/'
    }


}