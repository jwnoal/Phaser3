export default class Example1 extends Phaser.Scene{
  constructor() {
    super({key: 'Example1'})
  }
  preload() {
    this.load.image('logo', 'assets/logo.png')
  }
  create() {
    this.image = this.add.image(400, 150, 'logo').setInteractive();
    this.input.keyboard.on('keyup_D', () => {
      this.image.y += 10
    })

    this.image.on('pointerdown', (pointer) => {
      console.log(123)
    });

    // this.input.on('pointerdown', (event) => {
    //   this.image.x = event.x
    //   this.image.y = event.y
    // })

    // this.input.on('pointermove', (event) => {
    //   this.image.x = event.x
    //   this.image.y = event.y
    // })

    this.input.keyboard.on('keyup_P', () => {
      let physicsImage = this.physics.add.image(this.image.x, this.image.y, 'logo')
      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100), -300)
    })

    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)

    this.input.keyboard.on('keyup', (e) => {
      if(e.key == '2'){
        this.scene.start('Example2')
      }
    })
  }
  update() {
    if(this.key_A.isDown){
      this.image.y ++
    }
  }
}