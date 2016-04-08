var webpack = require("webpack");
module.exports = {
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader' },
            // { test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/, loader: 'file-loader?name=./[path][name].[ext]?v=[md5:hash:base64:7]' }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            DEBUG: false
        }),
        //代码压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:false
            }
        })
    ]
};