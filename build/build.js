/**
 * Script for rendering html src into site output.
 * @file build.js
 */

var child_process = require ( 'child_process' );
var fs = require ( 'fs' );
var fsExtra = require ( 'fs-extra' );
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
fs.mkdir ( '../site/js' );
fs.mkdir ( '../site/js/games' );
fs.mkdir ( '../site/images' );
var ngAppText = fs.readFileSync ( '../src/ng/global/app.ng.js' ).toString ();

for ( var i = 0; i < settings.games.length; ++i )
{
    var game = settings.games [i];
    console.log ( 'Building', game.name );
    settings.currentGameSlug = game.slug;
    settings.currentGameName = game.name;
    if ( !game.divider )
    {
        fs.mkdirSync ( '../site/games/' + game.slug + '/' );
        fs.writeFileSync ( '../site/games/' + game.slug + '/index.html',
            env.render ( game.slug + '.html', settings ) );
        if ( game.ng )
        {
            
            var ngText = [ ngAppText ];
            
            for ( var j = 0; j < game.ng.length; ++j )
            {
                ngText.push ( fs.readFileSync ( '../src/ng/' +
                    game.ng [j] ).toString () );
            }
            
            fs.writeFileSync ( '../site/js/games/' + game.slug + '.ng.js',
                ngText.join ( '\n' ) );
        }
        if ( game.images )
        {
            fs.mkdirSync ( '../site/images/' + game.slug );
            for ( var j = 0; j < game.images.length; ++j )
            {
                fsExtra.copySync ( '../src/images/' + game.slug + '/' +
                    game.images [j], '../site/images/' + game.slug + '/' +
                    game.images [j] );
            }
        }
    }
}