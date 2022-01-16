class Black {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.multiply = 0
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
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
        var emptyCells = this.chooseCell(2)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        var emptyCells2 = this.chooseCell(3)
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
document.open()
document.write(`<div>
<a href="about.html"
 target="_blank" style ="text-decoration: none; font-size: 40;
  color:black; font-family: Georgia, serif;">
 About my game
 </a>
 </div>
 <br>`)
document.close()