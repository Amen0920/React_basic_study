const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스에서는 production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },


    entry: {
        app: ['./client'],
    }, // 입력

    module:{
        rules:[{
            test: /\.jsx?/,    // 규칙적용할 파일들
            loader: 'babel-loader',
            options:{
                presets:['@babel/preset-env','@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            }
        }],
    },
    
    plugins:[
         new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath:'/dist/' 
    }, // 출력
    
    devServer:{
        publicPath:'/dist/',
        hot:true,
        port:8081
    },

};