import 'phaser';
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'

var config = {
    type: Phaser.AUTO,
    parent: 'canvas',
    width: document.body.clientHeight/9*16,
    height: document.body.clientHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 200}
        }
    },
    scene: [Example4, Example5, Example3, Example2, Example1]
};

var game = new Phaser.Game(config);
