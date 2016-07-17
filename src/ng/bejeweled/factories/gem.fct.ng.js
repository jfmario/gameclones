
app.factory ( '$$GemFct', [ '$$SettingsSvc', function ( $$SettingsSvc )
{
    var Gem = function ( )
    {
        
    };
    Gem.prototype = {
        getGem: function ( n, x, y )
        {
            if ( n > $$SettingsSvc.NUMGEMTYPES ) throw "GemIndexOutOfBounds";
            if ( n == 1 ) return this.makeRedPentagon ( x, y );
            if ( n == 2 ) return this.makeGreenX ( x, y );
        },
        makeRedPentagon: function ( x, y )
        {
            var shape = new createjs.Shape ()
            shape.graphics.beginFill ( '#f00' )
                .moveTo ( x + 25, y + 5 ).lineTo ( x + 45, y + 25 )
                .lineTo ( x + 37, y + 45 )
                .lineTo ( x + 13, y + 45 ).lineTo ( x + 5, y + 25 )
                .lineTo ( x + 25, y + 5 );
            return shape;
        },
        makeGreenX: function ( x, y )
        {
            var shape = new createjs.Shape ();
            shape.graphics.beginFill ( '#0f0' )
                .moveTo ( x + 10, y + 5 ).lineTo ( x + 25, y + 20 )
                .lineTo ( x + 40, y + 5 )
                .lineTo ( x + 45, y + 10 ).lineTo ( x + 30, y + 25 )
                .lineTo ( x + 45, y + 40 )
                .lineTo ( x + 40, y + 45 ).lineTo ( x + 25, y + 30 )
                .lineTo ( x + 10, y + 45 )
                .lineTo ( x + 5, y + 40 ).lineTo ( x + 20, y + 25 )
                .lineTo ( x + 5, y + 10 )
                .lineTo ( x + 10, y + 5 );
            return shape;
        },
        makeBlueTriangle: function ( x, y )
    };
    return new Gem ();
}]);