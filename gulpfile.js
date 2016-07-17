
var fs = require ( 'fs' );
var gulp = require ( 'gulp' );
var concat = require ( 'gulp-concat' );
var ngAnnotate = require ( 'gulp-ng-annotate' );
var sourcemaps = require ( 'gulp-sourcemaps' );
var uglify = require ( 'gulp-uglify' );
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

gulp.task ( 'ng', function ()
{
    for ( var i = 0; i < settings.games.length; ++i )
    {
        var game = settings.games [i];
        console.log ( game );
        if ( !game.divider )
        {
            gulp.src ( game.ng )
                .pipe ( concat ( game.slug + '.min.js' ) )
                .pipe ( ngAnnotate () )
                .pipe ( sourcemaps.write () )
                .pipe ( gulp.dest ( './site/js/games/' ) );
        }
    }
});
