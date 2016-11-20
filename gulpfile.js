var GulpKit = require('gulpkit');

GulpKit(function(kit) {
    kit.scss({
        source: 'scss/theme.scss',
        output: 'dist/theme.css',
        minify: true,
        sourcemap: false,
        autoprefixer: false
    });
});
