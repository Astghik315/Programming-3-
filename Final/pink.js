class Pink {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.energy = 8;
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
    chooseCell(character1) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move(key) {

            var emptyCells = this.chooseCell(1)
            var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (key == 32 && newCell ) {

            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] =  matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break
                }
            }
        }

    }
}