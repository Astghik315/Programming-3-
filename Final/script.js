var socket = io()
var side = 25

var weather = "winter"
function setup() {
    frameRate(5);
    createCanvas(15 * side + 1, 15 * side + 1);
    background('#add8e6');
}



function nkarel(matrix) {
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
            } else if (matrix[y][x] == 9) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

socket.on('send matrix', nkarel)

console.log(grass)

// spring = document.getElementById("spring")
// summer1 = document.getElementById("summer")
// autunm = document.getElementById("autunm")
// winter = document.getElementById("winter")



function kill() {
    socket.emit("kill")
}

function newgrasseater(){
    socket.emit("newgrasseater")
}

function know(){
    socket.emit("know")
}
// function test() {
//     socket.emit("test")
// }


//         }
//     }
//     for (var i in grassArr) {
//         grassArr[i].mul();
//     }
//     for (var i in grassEaterArr) {
//         grassEaterArr[i].mul()
//         grassEaterArr[i].eat()
//     }
//     for (var i in predactorArr) {
//         predactorArr[i].mul()
//         predactorArr[i].eat()
//     } if (grassArr.length >= (matrix.length**2) / 2){
//     for (var i in blackArr) {
//         blackArr[i].eat()
//     }}

//  
// }

