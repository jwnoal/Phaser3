let UP = 0;
let DOWN = 1;
let LEFT = 2;
let RIGHT = 3;
const Snake = new Phaser.Class({
  initialize: function(scene, x, y) {

    this.headPosition = new Phaser.Geom.Point(x, y)
    this.body = scene.add.group()
    this.head = this.body.create(x * 16, y * 16, 'body')
    this.head.setOrigin(0)

    this.alive = true
    this.speed = 100
    this.moveTime = 0

    this.tail = new Phaser.Geom.Point(x, y)
    this.heading = RIGHT
    this.direction = RIGHT

  },
  
  update: function(time) {
    if(time >= this.moveTime){
      return this.move(time)
    }
  },

  faceLeft: function() {
    if(this.direction === UP || this.direction === DOWN){
      this.heading = LEFT
    }
  },

  faceRight: function() {
    if(this.direction === UP || this.direction === DOWN){
      this.heading = RIGHT;
    }
  },

  faceUp: function() {
    if(this.direction === LEFT || this.direction === RIGHT){
      this.heading = UP;
    }
  },

  faceDown: function() {
    if(this.direction === LEFT || this.direction === RIGHT){
      this.heading = DOWN;
    }
  },

  move: function(time) {
    switch(this.heading) {
      case LEFT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40)
        break
      case RIGHT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40)
        break
      case UP:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 40)
        break
      case DOWN:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 40)
        break
    }

    this.direction = this.heading
    Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1, this.tail)

    let hitBody = Phaser.Actions.GetFirst(this.body.getChildren(), {x: this.head.x, y: this.head.y}, 1)

    if(hitBody){
      console.log('dead')
      this.alive = false
      return false
    }else{
      this.moveTime = time + this.speed
      return true
    }

  },

  grow: function() {
    let newPart = this.body.create(this.tail.x, this.tail.y, 'body')
    newPart.setOrigin(0)
  },

  collideWithFood: function(food) {
    if(this.head.x === food.x && this.head.y === food.y){
      this.grow()
      food.eat()
      if(this.speed > 20 && food.total % 5 ===0){
        this.speed -= 5;
      }
      return true
    }else{
      return false
    }
  },

  updateGrid: function(grid) {
    this.body.children.each(function (segment){
      let bx = segment.x / 16
      let by = segment.y / 16
      grid[by][bx] = false
    })
    return grid
  }

})

export default Snake