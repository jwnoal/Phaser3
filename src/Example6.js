import {_canvasWigth, _canvasHeight, _scale} from './util'
export default class Example6 extends Phaser.Scene {
  constructor() {
    // 绑定场景
    super({ key: 'Example6' })
  }
  preload() {
    // 加载资源
    for (let i = 1; i < 9; i++) {
      this.load.image(`img3-${i}`, `assets/img3/${i}.png`)
    }
    this.load.image('bg','assets/img3/bg.png')
    this.load.image('bg2','assets/img3/bg2.png')
    this.load.image('dragon1','assets/img3/dragon1.png')
    this.load.image('dragon2','assets/img3/dragon2.png')
    this.load.image('dragon3','assets/img3/dragon3.png')
  }
  create() {

    let bg = this.add.image(0, 0, 'bg').setOrigin(0).setScale(_scale)
    const animate = async() => {
      await new Promise((resolve) => {
        setTimeout(() => {
          let bg2 = this.add.image(0, 0, 'bg2').setOrigin(0).setScale(_scale)
          resolve()
        },500)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let img1 = this.add.image(_canvasWigth * 0.3, _canvasHeight, 'img3-1').setOrigin(0).setScale(_scale)
          let img3 = this.add.image(_canvasWigth * 0.58, _canvasHeight, 'img3-3').setOrigin(0).setScale(_scale)
          let img4 = this.add.image(_canvasWigth, _canvasHeight, 'img3-4').setOrigin(0).setScale(_scale)
          let img5 = this.add.image(_canvasWigth * 0.6, _canvasHeight, 'img3-5').setOrigin(0).setScale(_scale)
          let img2 = this.add.image(_canvasWigth * 0.9, _canvasHeight, 'img3-2').setOrigin(0).setScale(_scale)
          let img6 = this.add.image(_canvasWigth * 0.6, _canvasHeight, 'img3-6').setOrigin(0).setScale(_scale)
          let img7 = this.add.image(_canvasWigth * 0.5, _canvasHeight, 'img3-7').setOrigin(0).setScale(_scale)
          let img8 = this.add.image(_canvasWigth, _canvasHeight, 'img3-8').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: img8,
            x: _canvasWigth * 0.42,
            y: _canvasHeight * 0.1,
            duration: 320,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: img7,
            x: _canvasWigth * -0.05,
            y: _canvasHeight * 0.45,
            duration: 260,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: img6,
            x: _canvasWigth * 0.2,
            y: _canvasHeight * 0.3,
            duration: 240,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: img2,
            x: _canvasWigth * 0.7,
            y: _canvasHeight * 0.1,
            duration: 300,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: img5,
            x: _canvasWigth * 0.3,
            y: _canvasHeight * 0,
            duration: 210,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: img4,
            x: _canvasWigth * 0.8,
            y: _canvasHeight * 0.23,
            duration: 200,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: img3,
            x: _canvasWigth * 0.25,
            y: _canvasHeight * 0.5,
            duration: 100,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: img1,
            x: _canvasWigth * 0.15,
            y: _canvasHeight * 0.8,
            duration: 100,
            ease: 'Power',
            delay: 100
          });
          resolve()
        },200)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let dragon1 = this.add.image(_canvasWigth * 0.4, _canvasHeight, 'dragon1').setOrigin(0).setScale(_scale)
          let dragon2 = this.add.image(_canvasWigth * 0.6, _canvasHeight, 'dragon2').setOrigin(0).setScale(_scale)
          let dragon3 = this.add.image(_canvasWigth * 0.9, _canvasHeight, 'dragon3').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: dragon3,
            x: _canvasWigth * 0.65,
            y: _canvasHeight * 0.17,
            duration: 300,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: dragon2,
            x: _canvasWigth * 0.35,
            y: _canvasHeight * 0.05,
            duration: 200,
            ease: 'Power',
            delay: 0
          });
          this.tweens.add({
            targets: dragon1,
            x: _canvasWigth * 0.05,
            y: _canvasHeight * 0.2,
            duration: 230,
            ease: 'Power',
            delay: 0
          });
          resolve()
        },300)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let videoDiv = document.getElementById('videoDiv')
          videoDiv.style.width = _canvasWigth
          videoDiv.style.height = _canvasHeight
          videoDiv.style.display = 'block'
          let myVid = document.getElementById('myVideo')
          console.log(videoDiv)
          console.log(myVid)
          myVid.play()
          myVid.addEventListener('ended', () => { 
            this.scene.start('Example7') 
            videoDiv.style.display = 'none'
          }, false)
          resolve()
        },1200)
      })
    }
    animate()
   
  }
  update() {
  }
}