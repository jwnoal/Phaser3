import {_canvasWigth, _canvasHeight, _scale} from './util'
export default class Example7 extends Phaser.Scene {
  constructor() {
    // 绑定场景
    super({ key: 'Example7' })
  }
  preload() {
    // 加载资源
    this.load.image('img4-bg1','assets/img4/bg1.png')
    this.load.image('img4-bg2','assets/img4/bg2.png')
    this.load.image('img4-bg3','assets/img4/bg3.png')
    this.load.image('img4-box1','assets/img4/box1.png')
    this.load.image('img4-box2','assets/img4/box2.png')
    this.load.image('img4-boxbg1','assets/img4/boxbg1.png')
    this.load.image('img4-boxbg2','assets/img4/boxbg2.png')
    this.load.image('img4-die','assets/img4/die.png')
    this.load.image('img4-dragon','assets/img4/dragon.png')
    this.load.image('img4-star','assets/img4/star.png')
  }
  create() {

    let bg1 = this.add.image(0, 0, 'img4-bg1').setOrigin(0).setScale(_scale)
    this.boxbg2 = '';
    this.box1 = '';
    
    const animate = async() => {
      await new Promise((resolve) => {
        setTimeout(() => {
          let bg2 = this.add.image(0, 0, 'img4-bg2').setOrigin(0).setScale(_scale)
          let dragon = this.add.image(_canvasWigth * 0.3, _canvasHeight * 0.6, 'img4-dragon').setOrigin(0).setScale(_scale)
          resolve()
        },200)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let die = this.add.image(_canvasWigth * 0.34, _canvasHeight * 0.63, 'img4-die').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: die,
            x: _canvasWigth * 0.32,
            y: _canvasHeight * 0.6,
            duration: 500,
            ease: 'Power',
            delay: 0
          });
          setTimeout(() => {
            this.tweens.add({
              targets: die,
              duration: 3000,
              x: _canvasWigth * 0.32,
              y: _canvasHeight * 0.63,
              loop: -1,
              yoyo: true,
              ease: 'Power',
              delay: 0
            });
          },500)
          resolve()
        },200)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          this.box1 = this.add.image(_canvasWigth * 0.37, _canvasHeight * 0.2, 'img4-box1').setOrigin(0).setScale(_scale)
          
          this.tweens.add({
            targets: this.box1,
            x: _canvasWigth * 0.37,
            y: _canvasHeight * 0.07,
            duration: 500,
            ease: 'Power',
            delay: 0
          });
          resolve()
        },200)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let boxbg1 = this.add.image(_canvasWigth * 0.3, _canvasHeight * 0, 'img4-boxbg1').setOrigin(0).setScale(_scale)
          this.boxbg2 = this.add.image(_canvasWigth * 0.5, _canvasHeight * 0.3, 'img4-boxbg2').setScale(_scale * 2)
          let bg3 = this.add.image(0, 0, 'img4-bg3').setOrigin(0).setScale(_scale)
          let box2 = this.add.image(_canvasWigth * 0.37, _canvasHeight * 0.07, 'img4-box2').setOrigin(0).setScale(_scale)
          let star1 = this.add.image(_canvasWigth * 0.39, _canvasHeight * 0.07, 'img4-star').setOrigin(0).setScale(_scale * 0.7).setRotation(7.5).setAlpha(0)
          let star2 = this.add.image(_canvasWigth * 0.6, _canvasHeight * 0.12, 'img4-star').setOrigin(0).setScale(_scale * 0.7).setAlpha(0)
          let star3 = this.add.image(_canvasWigth * 0.65, _canvasHeight * 0.25, 'img4-star').setOrigin(0).setScale(_scale * 0.4).setAlpha(0)
          let star4 = this.add.image(_canvasWigth * 0.32, _canvasHeight * 0.3, 'img4-star').setOrigin(0).setScale(_scale * 0.4).setAlpha(0)
          let star5 = this.add.image(_canvasWigth * 0.33, _canvasHeight * 0.46, 'img4-star').setOrigin(0).setScale(_scale * 0.9).setRotation(10).setAlpha(0)
          let star6 = this.add.image(_canvasWigth * 0.65, _canvasHeight * 0.36, 'img4-star').setOrigin(0).setScale(_scale).setRotation(7.5).setAlpha(0)
          this.box1.setVisible(false)
          this.tweens.add({
            targets: box2,
            duration: 2000,
            x:_canvasWigth * 0.37,
            y:_canvasHeight * 0.09,
            loop: -1,
            yoyo: true,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: star1,
            duration: 2000,
            alpha: 1,
            loop: -1,
            yoyo: true,
            ease: 'Power',
            delay: 100
          });
          this.tweens.add({
            targets: star2,
            duration: 1500,
            alpha: 1,
            loop: -1,
            yoyo: true,
            ease: 'Power',
            delay: 200
          });
          this.tweens.add({
            targets: star3,
            duration: 1300,
            alpha: 1,
            loop: -1,
            yoyo: true,
            ease: 'Power',
            delay: 120
          });
          this.tweens.add({
            targets: star4,
            duration: 900,
            alpha: 1,
            loop: -1,
            yoyo: true,
            ease: 'Power',
            delay: 90
          });
          this.tweens.add({
            targets: star5,
            duration: 2000,
            alpha: 1,
            loop: -1,
            yoyo: true,
            ease: 'Power',
            delay: 250
          });
          this.tweens.add({
            targets: star6,
            duration: 1100,
            alpha: 1,
            loop: -1,
            yoyo: true,
            ease: 'Power',
            delay: 500
          });
          resolve()
        },500)
      })
    }
    animate()
  }
  update() {
    if(this.boxbg2){
      this.boxbg2.rotation += 0.01;
    }
  }
}