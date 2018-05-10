// инициализируем переменные
var gulp            = require('gulp');
    less            = require('gulp-less'),
    plumber         = require('gulp-plumber'), //не дает останавливаться gulp при ошибках
    autoprefixer    = require('gulp-autoprefixer'),
    concatCSS       = require('gulp-concat-css'),
    cleanCSS        = require('gulp-clean-css'), //минификация css
    path            = require('path'),
    browserSync     = require('browser-sync'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglifyjs'),
    // sourcemaps      = require('gulp-sourcemaps'),
    rename          = require('gulp-rename'),
    del             = require('del'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    cache           = require('gulp-cache'),
    spritesmith     = require('gulp.spritesmith'),
// имя переменной = функция инициализации ('название плагина как забивали в cmd')


// компиляция less
gulp.task('less', function () {
    return gulp.src('src/less/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer(['last 25 versions', '>5%', 'ie 10', 'ie 9'], {cascade: true}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}))
});


// инициализируем релоад сервера
gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'src',
            index: 'messenger.html'
        },
        notify: false
    });
});


// запускаем watch
gulp.task('watch', ['browser-sync', 'less'], function (){
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/*.js', browserSync.reload);
    // gulp.watch('src/libs/**/*.css', browserSync.reload);
    // gulp.watch('src/libs/**/*.js', browserSync.reload);
});



/*  --------------БИЛД---------------  */


//удаляем папку dist перед билдом
gulp.task('cleen', function(){
    return del.sync('dist');
});

gulp.task('clear', function(){
    return caache.clearAll();
});


//оптимизация изображений
gulp.task('img', function(){
    return gulp.src('src/img/**/*')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeVievBox: false}],
        une: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});


// конкатиенация style css
gulp.task('style-css', function () {
    gulp.src([
            // 'src/css/grid.css',
            'src/css/main.css',
            'src/css/media.css',
        ])
    .pipe(concatCSS('style.css'))
    // .pipe(cleanCSS({
    //     keepBreaks : true, 
    //     advanced : false,
    //     aggressiveMerging : false,
    //     processImportFrom : ['local'],
    //     roundingPrecision : 1
    // }))
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'));
});


// конкатенация libs css
gulp.task('libs-css', function () {
    gulp.src([
          'src/libs/perfect-scrollbar-master/docs/perfect-scrollbar.min.css',
        ])

    .pipe(concatCSS('libs.css'))
    // .pipe(sourcemaps.init())
    .pipe(cleanCSS({
        keepBreaks : true, 
        advanced : false,
        aggressiveMerging : false,
        processImportFrom : ['local'],
        roundingPrecision : 1
    }))
    .pipe(rename({suffix: '.min'}))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'));
});


// конкатенация libs js 
gulp.task('scripts', function(){
    return gulp.src([
        'src/libs/perfect-scrollbar-master/docs/perfect-scrollbar.min.js',
        'src/libs/autosize-master/dist/autosize.js',
    ])
    // .pipe(sourcemaps.init())
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});


// билд
gulp.task('build', ['cleen', 'img', 'style-css', 'libs-css', 'scripts'], function(){

    var buildFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('src/js/**/*')
    .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});



//генератор спрайтов 
gulp.task('sprite', function () {
  var spriteData = gulp.src('layout/sprite/*.png').pipe(spritesmith({
    imgName: 'icons.png',
    cssName: 'icons.css'
  }));
  return spriteData.pipe(gulp.dest('layout/sprite'));
});