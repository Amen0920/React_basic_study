const path = require('path');
const RefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name:'RPS-setting',
    mode:'development',
    devtool:'inline-source-map',
    resolve:{
        extensions:['.js','.jsx']
    },

    entry:{
        app:['./client']
    },
    module:{
        rules:[{
            test:[/\.jsx?/],
            loader:'babel-loader',
            options:{
                preset:['@babel/preset-env','@babel/preset-react'],
                plugins:['react-refresh']
            }
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
        port:8081,
        hot:true,
        publicPath:'/js/'
    }
    

}