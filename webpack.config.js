/**
 * Created by MagicLizi on 2016/11/14.
 */
var path = require('path');


var config = {
    entry: [path.resolve(__dirname,'./public/javascripts/component/app.js')],

    output:{
        path :path.resolve(__dirname,'./public/javascripts/build'),
        filename :'bundle.js',
    },

    module:{
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    //
    watch:true,
}

module.exports = config;