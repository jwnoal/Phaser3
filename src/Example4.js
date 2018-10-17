export default class Example4 extends Phaser.Scene{
  constructor() {
    // 绑定场景
    super({key: 'Example4'})
  }
  preload() {
    // 加载资源
    for(let i=1; i < 10; i++){
      this.load.image(`img${i}`, `assets/img${i}.png`)
    }
  }
  create() {
    // setScale
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let _scale,_canvasWigth,_canvasHeight;

    if(width > height){
      _scale = height / 1080
      _canvasWigth = height / 9 * 16
      _canvasHeight = height
    }else{
      _scale = width / 1080
      _canvasWigth = width / 9 * 16
      _canvasHeight = width
    }
    

    // // 1
    const animate = async() => {
      await new Promise((resolve) => {
        let img1 = this.add.image(-50, -50, 'img1').setOrigin(0).setScale(_scale)
        this.tweens.add({
          targets: img1,
          x: 0,
          y: 0,
          duration: 200,
          ease: 'Power'
        });
        resolve()
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let img2 = this.add.image(_canvasWigth * 0.74, -_canvasHeight * 0.5, 'img2').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: img2,
            x: _canvasWigth * 0.44,
            y: 0,
            duration: 200,
            ease: 'Power'
          });
          let img3 = this.add.image(_canvasWigth * 0.56, _canvasHeight * 0.12, 'img3').setOrigin(0).setScale(0)
          this.tweens.add({
            targets: img3,
            duration: 200,
            scaleX: _scale,
            scaleY: _scale,
            ease: 'Power',
            delay: 300
          });
          resolve()
        },500)
      })
      await new Promise((resolve) => {
        setTimeout(() =>{
          let img4 = this.add.image(_canvasWigth, 0, 'img4').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: img4,
            x: _canvasWigth * 0.43,
            y: 0,
            duration: 200,
            ease: 'Power',
            delay: 0
          });
          let img5 = this.add.image(_canvasWigth * 0.85, _canvasHeight * 0.26, 'img5').setScale(0)
          this.tweens.add({
            targets: img5,
            scaleX: _scale,
            scaleY: _scale,
            rotation: 3,
            duration: 500,
            ease: 'Power',
            delay: 300
          });
          resolve()
        },400)
      })
      await new Promise((resolve) => {
        setTimeout(() =>{
          let img6 = this.add.image(-_canvasWigth * 0.7, _canvasHeight * 0.45, 'img6').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: img6,
            x:0,
            y:_canvasHeight * 0.45,
            duration: 500,
            ease: 'Power',
            delay: 0
          });
          setTimeout(() =>{
            let img7 = this.add.image(_canvasWigth * 0.23, _canvasHeight * 0.73, 'img7').setScale(0.2)
            this.tweens.add({
              targets: img7,
              x: _canvasWigth * 0.5,
              y: _canvasHeight * 0.6,
              scaleX: _scale,
              scaleY: _scale,
              duration: 300,
              ease: 'Power',
              delay: 300
            });
            resolve()
          },600)
        },700)
      })
      await new Promise((resolve) => {
        setTimeout(() =>{
          let img8 = this.add.image(_canvasWigth, _canvasHeight * 0.46, 'img8').setOrigin(0).setScale(_scale)
          this.tweens.add({
              targets: img8,
              x: _canvasWigth * 0.56,
              y: _canvasHeight * 0.46,
              duration: 300,
              ease: 'Power',
              delay: 0
            });
          setTimeout(() => {
            let img9 = this.add.image(_canvasWigth * 0.56, _canvasHeight * 0.58, 'img9').setOrigin(0).setScale(_scale).setRotation(-0.3)
            this.tweens.add({
              targets: img8,
              x: _canvasWigth * 0.56,
              y: _canvasHeight * 0.47,
              yoyo: true,
              loop: 6,
              duration: 30,
              ease: 'Power',
              delay: 300
            });
            this.tweens.add({
              targets: img9,
              x: _canvasWigth * 0.52,
              y: _canvasHeight * 0.6,
              duration: 30,
              ease: 'Power',
              yoyo: true,
              loop: 6,
              delay: 300
            });
          },400)
          resolve()
        },700)
      })
    }
    animate()
  }
  update() {
  }
}