//Աստղիկ ջան կոդիտ մեջ սխալները շատ են կոնկրետ 
//կլասսերի մեջ ես մի քանի բան ուղղել եմ բայց ամբողջը ես չեմ անի
//1․  constructor-ները չես փոփոխել super(x,y) չկաին  2 տեղ ուղղել եմ
//2․ մեթոդներում դեռ կան p5-ից եկող  random()-ներ
//3․ chooseCell-ների դիմացի this -րը  super  չես դարձրել
//էսքանը ուղղիր եթե էլի խնդիր լինի ես կօգնեմ բայց ամբողը չեմ գրի միքիչ տանջվի ու դուխով կստացվի)))

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");



app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3005);


 matrix = [];
function generator(matLen, gr, grEat, pred, key, black) {
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


generator(15, 15, 5, 5, 1, 1);
io.sockets.emit('send matrix', matrix)


 grassArr = []
 grassEaterArr = []
 predactorArr = []
 pinkArr = []
 blackArr = []


Grass = require("./Grass")
GrasssEater = require("./GrassEater")
Black = require("./Black")
Pink = require("./Pink")
Predactor = require("./Predactor")


function createObject() {
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
    io.sockets.emit('send matrix', matrix)
}

function game() {
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
    } if (grassArr.length >= (matrix.length ** 2) / 2) {
        for (var i in blackArr) {
            blackArr[i].eat()
        }
    }
    io.sockets.emit("send matrix", matrix)
}

setInterval(game, 500)

function kill() {
    grassArr = [];
    grassEaterArr = [];
    grassEaterArr = [];
    grassEaterEaterArr = [];
    coinArr = [];
    coinerArr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function newgrasseater() {
    for (var i = 0; i < 15; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0 || matrix[y][x] == 1) {
            matrix[y][x] = 2
            grassEaterArr.push(new GrassEater(x, y, 2));
        }
    }
    io.sockets.emit("send matrix", matrix);
}

io.on('connection', function (socket) {
    createObject();
    socket.on("kill", kill);
    socket.on("newgrasseater", newgrasseater)
    // socket.on("test", test);
});


// function test() {
//     console.log("Hiii");
//     // window.addEventListener('keydown', (e) => {
//     //     let key = e.keyCode
//     //     if (key == 32) {
//     //         for(let i in pinkArr) {
//     //             pinkArr[i].move(key)
//     //         }
//     //     }
//     // });
//     io.sockets.emit("send matrix", matrix);
// }

// // function weather(){
//     document.getElementById("summer").addEventListener("click", function(){
//         alert("Spring")
//     })
//     summer.addEventListener("click", function(){
//         alert("Summer")
//     })
//     autunm.addEventListener("click", function(){
//         alert(autunm)
//     })
//     winter.addEventListener("click", function(){
//         alert("HI")
//     })
//     io.sockets.emit("send matrix", matrix);
// }




var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.black = blackArr.length;
    statistics.pink = pinkArr.length
    statistics.predactor = predactorArr.length
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)