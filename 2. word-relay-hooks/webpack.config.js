const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name:'word-relay-hooks',
    mode:'development',
    devtool:'eval',

    resolve:{
       extensions: ['.jsx','.js']
    },
    
    entry:{
        app: ['./client.jsx']
    },
    
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env','@babel/preset-react'],
                plugins:['react-refresh/babel'],
            }


        }]

    },
    plugins:[
        new RefreshWebpackPlugin()
    ],

    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js',
        publicPath:'/dist/'
    },
    devServer:{
        publicPath:'/dist/',
        port:8081,
        hot:true
    }


}