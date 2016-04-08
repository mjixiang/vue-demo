var gulp = require('gulp');
var named = require("vinyl-named");
var webpack = require("webpack-stream");
var webpackConfig = require("./webpack.config.js");
var buildPath = "./dist";
//使用webpack打包
gulp.task("webpack",[],function(){
    return gulp.src(['src/index.js','src/views/**/*.js','!src/router.config.js','src/components/**/*.js'])
        .pipe(named(function(file){
            //返回路径
            return file.path.substring(0,file.path.lastIndexOf('.')).replace('\\src','');
        }))
        .pipe(webpack(webpackConfig))       //使用webpack打包
        .pipe(gulp.dest(buildPath));
});
//直接拷贝
gulp.task("build_static", [], function(){
   return gulp.src(["src/**/*.*",'!src/views/**','!src/index.js','!src/components/**','!src/router.config.js'])
        .pipe(named())
        .pipe(gulp.dest(buildPath));
});
//所有css合并成1个文件
// gulp.task("build_css", [], function(){
//    return gulp.src('src/**/*.css')
//         .pipe(webpack(webpackConfig))       //使用webpack打包
//         .pipe(gulp.dest(buildPath/all.css));
// });

//监控
gulp.task("gwatch",function(){
    gulp.watch('src/**/*.*', ['webpack','build_static']);
});
gulp.task("default",['gwatch','webpack','build_static']);