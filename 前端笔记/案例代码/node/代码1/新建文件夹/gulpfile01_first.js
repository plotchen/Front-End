// 引用gulp模块
const gulp = require('gulp');

// 使用gulp.task建立任务
// 1.任务的名称
// 2.任务的回调函数
gulp.task('first', () => {
	console.log('我们人生中的第一个gulp任务执行了');
	// 1.使用gulp.src获取要处理的文件
	gulp.src('./src/css/base.css')
		.pipe(gulp.dest('dist/css'));
});
