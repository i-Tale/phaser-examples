
var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('einstein', 'assets/pics/ra_einstein.png');
    game.load.image('pic', 'assets/sprites/block.png');

}

function create() {

    game.add.sprite(0, 0, 'einstein');

    game.add.text(500, 400, 'Phaser 3', { font: "65px Arial", fill: "#ff0044" });

}
