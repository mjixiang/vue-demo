var gulp = require('gulp');
var named = require("vinyl-named");
var webpack = require("webpack-stream");
var webpackConfig = require("./webpack.config.js");
var concat = require('gulp-concat');
var buildPath = "./dist";
//使用webpack打包
gulp.task("build_js",[],function(){
    return gulp.src(['src/**/*.js','!src/config/**'])
        .pipe(named(function(file){
            //返回路径
            return file.path.substring(0,file.path.lastIndexOf('.')).replace('\\src','');
        }))
        .pipe(webpack(webpackConfig))       //使用webpack打包
        .pipe(gulp.dest(buildPath));
});
//直接拷贝
gulp.task("build_static", [], function(){
   return gulp.src(["src/**/*.*","!src/**/*.css",'!src/views/**','!src/index.js','!src/components/**','!src/config/**'])
        .pipe(named())
        .pipe(gulp.dest(buildPath));
});
//将src/css文件夹内的css合并成1个文件
gulp.task("build_css", [], function(){
   return gulp.src('src/css/**/*.css')
    .pipe(concat('index.css'))
    .pipe(gulp.dest(buildPath+'/css'))
});

//监控
gulp.task("gwatch",function(){
    gulp.watch('src/**/*.*', ['build_js','build_static','build_css']);
});
gulp.task("default",['gwatch','build_js','build_static','build_css']);