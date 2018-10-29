import 'phaser';
import {_canvasWigth, _canvasHeight} from './util'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'
import Example6 from './Example6'
import Example7 from './Example7'

var config = {
    type: Phaser.AUTO,
    parent: 'canvas',
    backgroundColor: '#ffffff',
    width: _canvasWigth,
    height: _canvasHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 200}
        }
    },
    scene: [Example4, Example7, Example6, Example3, Example5, Example2, Example1]
};

var game = new Phaser.Game(config);
