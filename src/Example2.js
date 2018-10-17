import Food from './snake/food'
import Snake from './snake/snake'
export default class Example2 extends Phaser.Scene {
  constructor() {
    super({key: 'Example2'})
  }
  preload() {
    this.load.image('food', 'assets/games/snake/food.png')
    this.load.image('body', 'assets/gemea/snale/body.png')
  }
  create() {
    // this.text = this.add.text(0,0,'Welcome to Example2!', {font: '40px Impact'})
    // var color1 = new Phaser.Display.Color(255, 255, 0);
    // this.add.rectangle(0, 0, 800, 800, color1.color);
    // 场景跳转
    this.input.keyboard.on('keyup', (e) => {
      if(e.key == '1'){
        this.scene.start('Example1')        
      }
    })
    
    this._food = new Food(this, 3, 4)
    this._snake = new Snake(this, 8, 8)

    this._cursors = this.input.keyboard.createCursorKeys();

  }
  update(time) {
    if (this._cursors.left.isDown)
    {
      this._snake.faceLeft();
    }
    else if (this._cursors.right.isDown)
    {
      this._snake.faceRight();
    }
    else if (this._cursors.up.isDown)
    {
      this._snake.faceUp();
    }
    else if (this._cursors.down.isDown)
    {
      this._snake.faceDown();
    }

    if (this._snake.update(time))
    {
      //  If the snake updated, we need to check for collision against food

      if (this._snake.collideWithFood(this._food))
      {
          repositionFood(this._food, this._snake);
      }
    }
  }
}

function repositionFood (food,snake)
{
  //  First create an array that assumes all positions
  //  are valid for the new piece of food

  //  A Grid we'll use to reposition the food each time it's eaten
  var testGrid = [];

  for (var y = 0; y < 40; y++)
  {
      testGrid[y] = [];

      for (var x = 0; x < 40; x++)1
      {
          testGrid[y][x] = true;
      }
  }

  snake.updateGrid(testGrid);

  //  Purge out false positions
  var validLocations = [];

  for (var y = 0; y < 30; y++)
  {
      for (var x = 0; x < 40; x++)
      {
          if (testGrid[y][x] === true)
          {
              //  Is this position valid for food? If so, add it here ...
              validLocations.push({ x: x, y: y });
          }
      }
  }

  if (validLocations.length > 0)
  {
      //  Use the RNG to pick a random food position
      var pos = Phaser.Math.RND.pick(validLocations);

      //  And place it
      food.setPosition(pos.x * 16, pos.y * 16);

      return true;
  }
  else
  {
      return false;
  }
}