export default class Example2 extends Phaser.Scene {
  constructor() {
    super({key: 'Example2'})
  }
  preload() {
  }
  create() {
    this.text = this.add.text(0,0,'Welcome to Example2!', {font: '40px Impact'})
    this.input.keyboard.on('keyup', (e) => {
      if(e.key == '1'){
        this.scene.start('Example1')
      }
    })
  }
  update() {
  }
}