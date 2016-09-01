var path = require('path');
module.exports = {
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.(png|jpg|gif|svg|eot|ttf|woff)(\?.*)*$/, loader: 'url-loader'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            component: path.join(__dirname, '../component'),
            service:path.join(__dirname, '../service'),
            api:path.join(__dirname, '../api'),
            images:path.join(__dirname, '../common/images'),
            views:path.join(__dirname, '../views')
        }
    }
};
