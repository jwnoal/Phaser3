export default class Example1 extends Phaser.Scene{
  constructor() {
    // 绑定场景
    super({key: 'Example1'})
  }
  preload() {
    // 加载资源
    this.load.image('logo', 'assets/logo.png')
  }
  create() {
    // 添加文字
    let num = 0;
    this.text = this.add.text(0,0,'num:'+num, {font: '20px Impact'})

    // 添加并绑定点击事件
    this.image = this.add.image(400, 200, 'logo').setInteractive()
    // 旋转
    // this.image.rotation = '20'

    // 绑定键盘
    this.input.keyboard.on('keyup_D', () => {
      this.image.y += 10
    })

    // 鼠标点击
    this.image.on('pointerdown', (pointer) => {
      num ++
      this.text.setText('num:'+num)
      // 隐藏
      // this.image.setVisible(false)
    })

    // this.input.on('pointermove', (event) => {
    //   this.image.x = event.x
    //   this.image.y = event.y
    // })

    this.input.keyboard.on('keyup_P', () => {
      this.physicsImage = this.physics.add.image(this.image.x, this.image.y, 'logo').setInteractive()
      this.physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100), -300)
      this.physicsImage.on('pointerdown', () => {
        console.log(456)
      });
    })

    // 绑定键盘按键
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.key_R = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
    // this._cursors = this.input.keyboard.createCursorKeys();

    this.input.keyboard.on('keyup', (e) => {
      // 键盘事件
      if(e.key == '2'){
        // 切换场景
        this.scene.start('Example2')
      }
    })

      //  动画事件
      this.tweens.add({
        targets: this.image,
        y: 300,
        duration: 2000,
        ease: 'Power3',
        yoyo: false,
        loop: 0,
        delay: 2000
      });
    
  }
  update() {
    // 帧动画
    if(this.key_A.isDown){
      this.image.y ++
      if(this.image.y >= 500){
        this.image.y = 100
      }
    }
    if(this.key_R.isDown){
      // 旋转
      this.image.rotation += 0.01;
    }
    // if(this._cursors.a.isDown){
    //   console.log('q')
    // }
  }
}