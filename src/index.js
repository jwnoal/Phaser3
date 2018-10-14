import 'phaser';
import Example1 from './Example1'
import Example2 from './Example2'

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 500}
        }
    },
    scene: [Example1, Example2]
};

var game = new Phaser.Game(config);
