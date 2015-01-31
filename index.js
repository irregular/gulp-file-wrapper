var through = require('through2'),
    fs      = require('fs');

function layout (layoutFileName, options) {
  if( typeof options === 'undefined' ){
    options = { pattern: '%%yield%%' };
  }
  return through.obj(function (file, enc, cb) {
    var layoutContent = fs.readFileSync(layoutFileName),
        src = file.contents.toString();

   // strip utf-8 BOM  https://github.com/joyent/node/issues/1918
   layoutContent = layoutContent.toString('utf-8').replace(/\uFEFF/, '');
   src = layoutContent.replace(options.pattern || '%%yield%%', src);

    file.contents = new Buffer(src);
    this.push(file);
    cb();
  });
}

module.exports = layout;
