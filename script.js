function Animal() { }   

Animal.prototype = {
    myName: "blippy",
    constructor: Animal,
    activity: "eating",
    dermis: "coloured",
    limbs: 4,
    reportActivity: function() {
        console.log ("This animal is currently " + this.activity + ".");
    }
};  

function Monkey() {}
Monkey.prototype = Object.create (Animal.prototype);

let Guppy = new Monkey;
Guppy.reportActivity();