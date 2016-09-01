var gulp = require('gulp');
var connect = require('gulp-connect');
var RevAll = require("gulp-rev-all");
var gulpReplace = require("gulp-replace");
var path = require("path");
var named = require("vinyl-named");
var webpack = require("webpack-stream");
var webpackConfig = gulp.env.dev ? require("./config/webpack.dev.config.js") : require("./config/webpack.build.config.js");
var fs = require("fs");
var config = require('./config/base.config.js');
//文件版本号
var version = {};
//文件发布路径
var buildPath = config.BUILD_PATH;
gulp.task("webpack", function(){
    var rev = new RevAll({
        transformFilename: function (file, hash) {
            version["."+file.path.substring(file.base.length).replace(/\\/g,'/')] = hash.substr(0, 7);
            return file.path;
        }
    });
    return gulp.src(['main.js','views/**/*.vue'])
        .pipe(named(function(file){
            return file.path.substring(0,file.path.lastIndexOf('.'));
        }))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(buildPath))
        .pipe(rev.revision());
});

gulp.task("static", [], function () {
    return gulp.src(['api/**/*.*'])
        .pipe(named())
        .pipe(gulp.dest(path.join(buildPath, "api")));
});


gulp.task("version", ['webpack','static'], function(){
    var newVersion = 'window.VERSION = '+JSON.stringify(version);
    fs.writeFileSync(buildPath+"/version.js", newVersion);
    return gulp.src('./index.html')
            .pipe(gulpReplace('</head>','\t<script src="'+'./version.js?t='+Date.now()+'"></script>\r\n</head>'))
            .pipe(gulpReplace(/main\.js(\?v=\w{7}){0,1}/,'main.js?v=' + version['./main.js']))
            .pipe(gulp.dest(buildPath));
});

//开发模式
gulp.task("devtask", function(){
    fs.exists(buildPath+'/index.html',function(exists){
        if(!exists){
            gulp.src('./index.html').pipe(gulp.dest(buildPath));
        }
    });
    //开启服务器
    connect.server({
        root:buildPath,  
        host:'localhost',
        port:'8080'
    })
    //监听api内文件改变
    gulp.env.dev && gulp.watch('api/**/*.json',['static']);
});

var defaultTask = ['version']
gulp.env.dev && defaultTask.push('devtask');
gulp.task("default",defaultTask);