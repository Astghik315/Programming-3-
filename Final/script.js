var grassArr = []
var grassEaterArr = []
var predactorArr = []
var pinkArr = []
var blackArr = []

function generator(matLen, gr, grEat, pred, key, black) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }

    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }

    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < key; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < black; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    return matrix;
}

let side = 25;

let matrix = generator(15, 15, 5, 5, 1, 1);

function setup() {
    noStroke()
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#add8e6');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let ge = new GrassEater(x, y)
                grassEaterArr.push(ge)
            } else if (matrix[y][x] == 3) {
                let pr = new Predactor(x, y)
                predactorArr.push(pr)
            } else if (matrix[y][x] == 4) {
                let pr = new Pink(x, y)
                pinkArr.push(pr)
            } else if (matrix[y][x] == 5) {
                let pr = new Black(x, y)
                blackArr.push(pr)
            }
        }
    }
}

function test() {
    window.addEventListener('keydown', (e) => {
        let key = e.keyCode
        if (key == 32) {
            for(let i in pinkArr) {
                pinkArr[i].move(key)
            }
        }
    });
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 0) {
                fill("#add8e6");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill("pink");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }




        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (var i in predactorArr) {
        predactorArr[i].mul()
        predactorArr[i].eat()
    } if (grassArr.length >= (matrix.length**2) / 2){
    for (var i in blackArr) {
        blackArr[i].eat()
    }}

    test()
}

