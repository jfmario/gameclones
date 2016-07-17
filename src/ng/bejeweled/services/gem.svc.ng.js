
app.service ( '$$GemSvc', [ '$$SettingsSvc', function ( $$SettingsSvc )
{
    this.getGem = function ( n, x, y )
    {
        
        if ( ( n > $$SettingsSvc.NUMGEMTYPES ) || ( n <= 0 ) ) 
            throw "GemIndexOutOfBounds";
        
        var shape;
        if ( n == 1 ) shape = this.makeRedPentagon ( x, y );
        else if ( n == 2 ) shape =  this.makeGreenX ( x, y );
        else if ( n == 3 ) shape = this.makeBlueTriangle ( x, y );
        else if ( n == 4 ) shape = this.makeOrangeSquare ( x, y );
        else if ( n == 5 ) shape = this.makeGrayCircle ( x, y );
        else if ( n == 6 ) shape = this.makeYellowHex ( x, y );
        else shape = this.makePurpleDiamond ( x, y );
        return { shape: shape, type: n };
    };
    this.makeRedPentagon = function ( x, y )
    {
        var shape = new createjs.Shape ()
        shape.graphics.beginFill ( '#f00' )
            .moveTo ( x + 25, y + 5 ).lineTo ( x + 45, y + 25 )
            .lineTo ( x + 37, y + 45 )
            .lineTo ( x + 13, y + 45 ).lineTo ( x + 5, y + 25 )
            .lineTo ( x + 25, y + 5 );
        return shape;
    };
    this.makeGreenX = function ( x, y )
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
    };
    this.makeBlueTriangle = function ( x, y )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#00f' ).moveTo ( x + 25, y + 5 )
            .lineTo ( x + 45, y + 45 ).lineTo ( x + 5, y + 45 )
            .lineTo ( x + 25, y + 5 );
        return shape;
    };
    this.makeOrangeSquare = function ( x, y )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#f80' ).drawRect ( x + 5, y + 5, 40, 40 );
        return shape;
    };
    this.makeGrayCircle = function ( x, y )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#888' ).drawCircle ( x + 25, y + 25, 20 );
        return shape;
    };
    this.makeYellowHex = function ( x, y )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#ff0' ).moveTo ( x + 13, y + 5 )
            .lineTo ( x + 38, y + 5 ).lineTo ( x + 45, y + 25 )
            .lineTo ( x + 38, y + 45 ).lineTo ( x + 13, y + 45 )
            .lineTo ( x + 5, y + 25 ).lineTo ( x + 13, y + 5 );
        return shape;
    };
    this.makePurpleDiamond = function ( x, y )
    {
        var shape = new createjs.Shape ();
        shape.graphics.beginFill ( '#80f' ).moveTo ( x + 5, y + 25 )
            .lineTo ( x + 25, y + 5 ).lineTo ( x + 45, y + 25 )
            .lineTo ( x + 25, y + 45 ).lineTo ( x + 5, y + 25 );
        return shape;
    }
}]);