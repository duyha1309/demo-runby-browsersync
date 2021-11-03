var { src, dest, watch, series } = require('gulp');
var browserSync = require('browser-sync').create();

function browserSyncServer(cb) {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
    cb();
}

function browserSyncServerReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch('*.html', browserSyncServerReload)
}

exports.default = series(
  browserSyncServer,
  watchTask
)