/**
 * Script for rendering html src into site output.
 * @file build.js
 */

var child_process = require ( 'child_process' );
var fs = require ( 'fs' );
var nunjucks = require ( 'nunjucks' );
var settings = require ( './settings' );
// allow angular by converting variable syntax to <$ var $> instead of
// {{ var }}
var env = nunjucks.configure('../src/html/', {
    tags: {
        blockStart: '{%',
        blockEnd: '%}',
        variableStart: '<$',
        variableEnd: '$>',
        commentStart: '<#',
        commentEnd: '#>'
    }
});

child_process.execSync ( 'rm ../site/* -rf' );

fs.writeFileSync ( '../site/index.html',
    env.render ( 'index.html', settings ) );
fs.mkdir ( '../site/games' );

for ( var i = 0; i < settings.games.length; ++i )
{
    var game = settings.games [i];
    if ( !game.divider )
    {
        fs.mkdirSync ( '../site/games/' + game.slug + '/' );
        fs.writeFileSync ( '../site/games/' + game.slug + '/index.html',
            env.render ( game.slug + '.html', settings ) );
    }
}