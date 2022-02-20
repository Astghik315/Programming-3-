let LivingCreature = require('./LivingCreature')

module.exports = class Black extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 20;
      
    }


    move() {
        this.energy--
        var emptyCells = super.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {
            
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    eat() {
        this.energy++
        var emptyCells = super.chooseCell(2)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        var emptyCells2 = super.chooseCell(3)
        var newCell2 = emptyCells2[Math.floor(Math.random() * emptyCells2.length)]

        if (newCell || newCell2) {
            
            if (newCell){
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in blackArr) {
                if (newX == blackArr[i].x && newY == blackArr[i].y) {
                    blackArr.splice(i, 1)
                    break
                }
            }
        }else if(newCell2){
            var newX = newCell2[0]
            var newY = newCell2[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in blackArr) {
                if (newX == blackArr[i].x && newY == blackArr[i].y) {
                    blackArr.splice(i, 1)
                    break
                }
            }
        }
    } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in blackArr) {
            if (this.x == blackArr[i].x && this.y == blackArr[i].y) {
                blackArr.splice(i, 1);
                break;
            }
        }
    }
}
// document.open()
// document.write(`<div>
// <a href="about.html"
//  target="_blank" style ="text-decoration: none; font-size: 40;
//   color:black; font-family: Georgia, serif;">
//  About my game
//  </a>
//  </div>
//  <br>`)
// document.close()