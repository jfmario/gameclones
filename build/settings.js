
module.exports = {
    games: [
        { 
            name: 'Demo (Temp)',
            slug: 'demo',
            images: [
                'ground.png',
                'hill.png',
                'hill2.png',
                'sky.png',
                'spritesheet_grant.png'
            ],
            ng: [
                'demo/services/loader.svc.ng.js',
                'demo/directives/democanvas.dir.ng.js'
            ]
        },
        { divider: true },
        {
            name: 'Bejeweled',
            slug: 'bejeweled',
            ng: [
                'bejeweled/services/settings.svc.ng.js',
                'bejeweled/services/gem.svc.ng.js',
                'bejeweled/directives/bejeweled.dir.ng.js'
            ]
        }
    ]
};