const path = require('path');
const RefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports ={
    name : 'Response-Test-Setting',
    mode : 'development',
    devtool: 'inline-source-map',
    resolve:{
        extensions:['.js','.jsx']
    },

    entry:{
        app:['./client']
    },
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env','@babel/preset-react'],
                plugins:['react-refresh/babel','@babel/plugin-proposal-class-properties'],

            }
        }]
    },
    plugins:[
        new RefreshWebpack()
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