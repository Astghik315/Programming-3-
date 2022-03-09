var socket = io()
var side = 25


function setup() {
    frameRate(5);
    createCanvas(15 * side + 1, 15 * side + 1);
    background('#add8e6');
}



function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if(weather == "winter"){
                fill("white");
            } else if (weather == "spring"){
                fill("yellowgreen")
            } else if (weather == "summer"){
                fill("#FDD7E4")
            } else if (weather == "autunm"){
                fill("tan")
            }
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
}

socket.on('send matrix', nkarel)

function kill() {
    socket.emit("kill")
}

function newgrasseater(){
    socket.emit("newgrasseater")
}
