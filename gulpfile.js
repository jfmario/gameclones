
var fs = require ( 'fs' );
var gulp = require ( 'gulp' );
var concat = require ( 'gulp-concat' );
var ngAnnotate = require ( 'gulp-ng-annotate' );
var sourcemaps = require ( 'gulp-sourcemaps' );
var uglify = require ( 'gulp-uglify' );
var webserver= require ( 'gulp-webserver' );
var nunjucks = require ( 'nunjucks' );
var settings = require ( './build/settings' );

var env = nunjucks.configure('./src/html/', {
    tags: {
        blockStart: '{%',
        blockEnd: '%}',
        variableStart: '<$',
        variableEnd: '$>',
        commentStart: '<#',
        commentEnd: '#>'
    }
});

// build the HTML files
gulp.task ( 'html', function ()
{

    console.log ( 'Building html...' );

    for ( var i = 0; i < settings.games.length; ++i )
    {

        fs.writeFileSync ( './site/index.html',
            env.render ( 'index.html', settings ) );
        var game = settings.games [i];

        if ( !game.divider )
        {
            settings.currentGameName = game.name;
            settings.currentGameSlug = game.slug;
            fs.writeFileSync ( './site/games/' + game.slug + '/index.html',
                env.render ( game.slug + '.html', settings ) );
        }
    }
});
// kick off the server - does not work
gulp.task ( 'serve', function ()
{
    gulp.src ( 'site' )
        .pipe ( webserver ( {
            livereload: true,
            directoryListing: true
        }));
});
// build the minimized AngularJs files
gulp.task ( 'ng', function ()
{

    console.log ( 'Building js...' );
    for ( var i = 0; i < settings.games.length; ++i )
    {
        var game = settings.games [i];
        if ( !game.divider )
        {
            gulp.src ( game.ng )
                .pipe ( concat ( game.slug + '.min.js' ) )
                .pipe ( ngAnnotate () )
                .pipe ( uglify () )
                .pipe ( sourcemaps.write () )
                .pipe ( gulp.dest ( './site/js/games/' ) );
        }
    }
});

gulp.task ( 'build', ['html', 'ng'] );
