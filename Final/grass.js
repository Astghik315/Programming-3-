let LivingCreature = require('./LivingCreature')

module.exports =  class Grass extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        //եթե ծնող կլասսում կան դրված հատկություններ
        // կամ մեթոդներ որոնք պետք է ունենա զավակը պետք չէ դա զավակի մեջ գրել
        //բոլոր տեղերում կար այդ սխալը։
      
    }


    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.multiply >= 5) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}
