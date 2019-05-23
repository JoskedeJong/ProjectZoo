function Animal() { }   
var fedCounter = 1;

Animal.prototype = {
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
    console.log(this.myName+" has been fed "+fedCounter+" times.");
    fedCounter++;
}

function Howler(){}
Howler.prototype = Object.create(Monkey.prototype);
Howler.prototype.constructor = Howler;
// Howler.prototype.shout = (function(){
//     if(fedCounter % 3 === 0){
//         console.log("Oooooop!");
//     })();
// }

let giveNameMixin = function(obj){
    obj.giveName = function(){
        console.log("This is "+obj.myName);
    }
};


let monkey1 = new Howler;
monkey1.myName="Guppy";

giveNameMixin(monkey1);
monkey1.giveName();
monkey1.reportActivity();
// monkey1.shout();
console.log(monkey1.dermis);
    
