
app.service ( '$$loaderSvc', function ()
{
    
    var loader = new createjs.LoadQueue ( true );
    var manifest = [
        { src: 'spritesheet_grant.png', id: 'grant' },
        { src: 'sky.png', id: 'sky' },
        { src: 'ground.png', id: 'ground' },
        { src: 'hill.png', id: 'hill' },
        { src: 'hill2.png', id: 'hill2' }
    ];
    
    this.getLoader = function ()
    {
        return loader;
    };
    this.getResult = function ( asset )
    {
        return loader.getResult ( asset );
    };
    this.loadAssets = function ()
    {
        loader.loadManifest ( manifest, true, '/images/demo/' );
    }
});