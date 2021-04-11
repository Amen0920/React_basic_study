const path = require('path');

module.exports = {
    name : 'wordrelay-setting',
    mode : 'development', //실서비스에서는 production
    devtool : 'eval',
    resolve:{
        extensions:['.js','.jsx'],
        // fallback: { "url":false,  "util": false , "path" :false ,"os":false ,
        // "http":false, "vm" :false, "https":false, "crypto":false, "constants":false ,"stream":false,"buffer":false, "assert": false
        // ,"querystring": false},
    },

    entry:{
        // app: ['./client.jsx', './WordRelay.jsx']
        app:['./client']
    }, // 입력 

    module:{
        rules:[{
            test:/\.jsx?/,
            // exclude:/node_modules/,
            loader:'babel-loader',
            options:{
                presets:["@babel/preset-env","@babel/preset-react"],
                plugins:[
                    '@babel/plugin-proposal-class-properties'
                    // ["transform-class-properties", { "spec": true }],
                
                
                ],
            }
        }]
    },

    output:{
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    }, //출력 


}