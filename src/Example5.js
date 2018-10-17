export default class Example5 extends Phaser.Scene {
  constructor() {
    // 绑定场景
    super({ key: 'Example5' })
  }
  preload() {
    // 加载资源
    for (let i = 1; i < 15; i++) {
      this.load.image(`img${i}`, `assets/img2/img${i}.png`)
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
        let img1 = this.add.image(0, 0, 'img1').setOrigin(0).setScale(_scale).setAlpha(0)
        this.tweens.add({
          targets: img1,
          alpha: 1,
          duration: 500,
          ease: 'Power'
        });
        resolve()
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let img2 = this.add.image(_canvasWigth * 0.16, 0, 'img2').setOrigin(0).setScale(_scale).setAlpha(0)
          this.tweens.add({
            targets: img2,
            alpha: 1,
            duration: 500,
            ease: 'Power'
          });
          let img3 = this.add.image(_canvasWigth * 0.25, _canvasHeight * 0.18, 'img3').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: img3,
            x: _canvasWigth * 0.28,
            y: _canvasHeight * 0.15,
            duration: 1000,
            ease: 'Power',
            delay: 200
          });
          resolve()
        },700)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let img4 = this.add.image(_canvasWigth, -_canvasHeight * 0.3, 'img4').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: img4,
            x: _canvasWigth * 0.58,
            y: 0,
            duration: 300,
            ease: 'Power',
            delay: 200
          });
          setTimeout(() => {
            let img5 = this.add.image(_canvasWigth * 0.58, 0, 'img5').setOrigin(0).setScale(_scale)
            let img6 = this.add.image(_canvasWigth, _canvasHeight * 0.03, 'img6').setOrigin(0).setScale(_scale)
            // this.scene.bringToTop(img6);
            this.tweens.add({
              targets: img6,
              x: _canvasWigth * 0.65,
              y: _canvasHeight * 0.05,
              duration: 50,
              ease: 'Power',
              delay: 100
            });
            resolve()
          },600)
        },700)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let img7 = this.add.image(-_canvasWigth * 0.2, _canvasHeight * 0.40, 'img7').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: img7,
            x: 0,
            y: _canvasHeight * 0.40,
            duration: 500,
            ease: 'Power'
          });
          setTimeout(() => {
            let img8 = this.add.image(_canvasWigth * 0, _canvasHeight * 0.49, 'img8').setOrigin(0).setScale(_scale)
            this.tweens.add({
              targets: img7,
              x: 0,
              y: _canvasHeight * 0.42,
              yoyo: true,
              loop: 6,
              duration: 30,
              ease: 'Power',
              delay: 300
            });
            this.tweens.add({
              targets: img8,
              x: -_canvasWigth * 0.04,
              y: _canvasHeight * 0.47,
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
      await new Promise((resolve) => {
        setTimeout(() => {
          let img9 = this.add.image(_canvasWigth * 0.28, _canvasHeight * 0.55, 'img9').setOrigin(0).setScale(_scale).setAlpha(0)
          this.tweens.add({
            targets: img9,
            alpha: 1,
            duration: 500,
            ease: 'Power'
          });
          setTimeout(() => {
            
            let shape = this.make.graphics();
            //  Create a hash shape Graphics object
            shape.fillStyle(0xffffff);
            // shape.lineStyle(1, 0xffffff, 1);
            //  You have to begin a path for a Geometry mask to work
            shape.beginPath();

            shape.moveTo(_canvasWigth * 0.366, _canvasHeight * 0.55)
            shape.lineTo(_canvasWigth * 0.6, _canvasHeight * 0.55)
            shape.lineTo(_canvasWigth * 0.52, _canvasHeight * 0.93)
            shape.lineTo(_canvasWigth * 0.29, _canvasHeight * 0.93)
            // shape.lineTo(_canvasWigth * 0.6, _canvasHeight * 0.78)

            shape.closePath();
            shape.fillPath();

            shape.fillRect(_canvasWigth * 0.6, _canvasHeight * 0.55, _canvasHeight * 0.8, _canvasHeight * 0.5);
            let mask = shape.createGeometryMask();
            let img10 = this.add.image(_canvasWigth * 0.25, _canvasHeight * 0.8, 'img10').setOrigin(0).setScale(_scale)
            let img11 = this.add.image(_canvasWigth * 0.42, _canvasHeight * 0.7, 'img11').setOrigin(0).setScale(_scale)
            img10.setMask(mask);
            img11.setMask(mask);
            this.tweens.add({
              targets: img10,
              x:  _canvasWigth * 0.29,
              y:  _canvasHeight * 0.8,
              duration: 1000,
              ease: 'Power'
            });
            this.tweens.add({
              targets: img11,
              x:  _canvasWigth * 0.39,
              y:  _canvasHeight * 0.7,
              duration: 500,
              ease: 'Power'
            });
          },600)
          resolve()
        },1200)
      })
      await new Promise((resolve) => {
        setTimeout(() => {
          let img12 = this.add.image(_canvasWigth, _canvasHeight * 0.55, 'img12').setOrigin(0).setScale(_scale)
          this.tweens.add({
            targets: img12,
            x: _canvasWigth * 0.27,
            y: _canvasHeight * 0.55,
            duration: 300,
            ease: 'Power'
          });
          setTimeout(() => {
            let shape = this.make.graphics();
            //  Create a hash shape Graphics object
            shape.fillStyle(0xffffff);
            // shape.lineStyle(1, 0xffffff, 1);
            //  You have to begin a path for a Geometry mask to work
            shape.beginPath();

            shape.moveTo(_canvasWigth * 0.595, _canvasHeight * 0.56)
            shape.lineTo(_canvasWigth, _canvasHeight * 0.56)
            shape.lineTo(_canvasWigth, _canvasHeight)
            shape.lineTo(_canvasWigth * 0.517, _canvasHeight)
            // shape.lineTo(_canvasWigth * 0.6, _canvasHeight * 0.78)

            shape.closePath();
            shape.fillPath();

            // shape.fillRect(_canvasWigth * 0.6, _canvasHeight * 0.55, _canvasHeight * 0.8, _canvasHeight * 0.5);
            let img14 = this.add.image(_canvasWigth * 0.77, _canvasHeight * 0.78, 'img14').setScale(_scale * 1.2)
            let mask = shape.createGeometryMask();
            img14.setMask(mask);
            let img13 = this.add.image(_canvasWigth * 0.76, _canvasHeight * 0.8, 'img13').setScale(0)
            this.tweens.add({
              targets: img14,
              scaleX: _scale,
              scaleY: _scale,
              duration: 1000,
              ease: 'Power'
            });
            this.tweens.add({
              targets: img13,
              scaleX: _scale,
              scaleY: _scale,
              rotation: 3,
              duration: 1000,
              ease: 'Power'
            });
          },500)
          resolve()
        },700)
      })
      
    }

    animate()
  }
  update() {
  }
}