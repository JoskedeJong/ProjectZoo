function Animal() { }   
var fedCounter = 1

Animal.prototype = {
    myName: "blippy",
    constructor: Animal,
    activity: "active",
    dermis: "coloured",
    limbs: 4,
    reportActivity: function() {
        console.log ("This animal is currently " + this.activity + ".");
    }
};  

function Monkey() {}
Monkey.prototype = Object.create (Animal.prototype);
Monkey.prototype.constructor = Monkey;                          // corrects prototype to properly set contructor relation after creation.
Monkey.prototype.feed = function() {
    console.log("This animal has been fed "+fedCounter+" times.");
    fedCounter++;
}

let Guppy = new Monkey;
Guppy.reportActivity();