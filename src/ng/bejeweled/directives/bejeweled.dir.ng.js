
app.directive ( 'dirBejeweled', [ '$$SettingsSvc', '$$GemSvc',
    function ( $$SettingsSvc, $$GemSvc )
{
    
    "use strict";
    
    return {
        replace: true,
        restrict: 'EAC',
        scope: {},
        template: "<canvas style='display:block;padding:0;margin:auto;' width='400' height='400'></canvas>",
        link: function ( scope, elements, attributes )
        {
            
            var gemArray = [];
            
            drawGame ();
            function drawGame ()
            {
                
                if ( scope.stage )
                {
                    scope.stage.autoClear = true;
                    scope.stage.removeAllChildren ();
                    scope.stage.update ();
                }
                else scope.stage = new createjs.Stage ( elements [0] );
                
                for ( var i = 0; i < 8; ++i )
                {
                    
                    gemArray.push ( [] );
                    
                    for ( var j = 0; j < 8; ++j )
                    {
                        var gemType = parseInt ( Math.random () *
                            $$SettingsSvc.NUMGEMTYPES ) + 1;
                        gemArray [i].push ( $$GemSvc.getGem ( gemType, i * 50,
                            j * 50 ) );
                    }
                }
                
                for ( var i = 0; i < 8; ++i )
                {
                    for ( var j = 0; j < 8; ++j )
                        scope.stage.addChild ( gemArray [i] [j].shape );
                }
                
                scope.stage.update ();
            }
            
            function handleComplete ()
            {
                
            }
            function tick ()
            {
                
            }
        }
    }
}]);