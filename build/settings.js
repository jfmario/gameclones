
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
                'src/ng/global/app.ng.js',
                'src/ng/demo/services/loader.svc.ng.js',
                'src/ng/demo/directives/democanvas.dir.ng.js'
            ]
        },
        { divider: true },
        {
            name: 'Bejeweled',
            slug: 'bejeweled',
            ng: [
                'src/ng/global/app.ng.js',
                'src/ng/bejeweled/services/settings.svc.ng.js',
                'src/ng/bejeweled/services/gem.svc.ng.js',
                'src/ng/bejeweled/directives/bejeweled.dir.ng.js'
            ]
        }
    ]
};
