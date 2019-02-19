var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'); //本地安装gulp-less所用到的地方
console.log('-----------------', gulp)

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function() {
    gulp.src('./randomSnow.less') //该任务针对的文件，你需要编译的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./randomSnow_css')); //将会在css下生成index.css
});

gulp.task('default', ['testLess']);