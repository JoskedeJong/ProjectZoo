function Animal() { }  
var fedCounter = 1;

Animal.prototype = {
    constructor: Animal,
    name: "unnamed animal",
    activity: "active",
    limbs: 4,
    reportActivity: function() {
        console.log ("This animal is currently " + this.activity + ".");
    }
};  

// ---------------------------------------------------------------------- Department of Monkeys
function Monkey() {}                                                   // Animal - Monkey Maker
Monkey.prototype = Object.create (Animal.prototype);
Monkey.prototype.constructor = Monkey;                                 // corrects prototype to properly set contructor relation after creation.
Monkey.prototype.feed = function() {
    console.log(this.myName+" has been fed "+fedCounter+" times.");
    fedCounter++;
}

function Howler(){}                                                    
Howler.prototype = Object.create(Monkey.prototype);
Howler.prototype.constructor = Howler;
Howler.prototype.feed = function(){
    console.log(this.myName+" has been fed "+fedCounter+" times.");    // personal note: ugh, I wanted to extend, not override
    fedCounter++;
    if(fedCounter % 3 === 0){
        console.log("Oooooop!");
    }
}

function Vervet(){}                                                    
Vervet.prototype = Object.create(Monkey.prototype);
Vervet.prototype.constructor = Vervet;

// ---------------------------------------------------------------------- Department of Humans
function Human() {}                                                    
Human.prototype = Object.create (Animal.prototype);
Human.prototype.constructor = Human;                                   
// Human.prototype. 


function Caretaker() {}                                                   
Caretaker.prototype = Object.create (Human.prototype);
Caretaker.prototype.constructor = Caretaker;                                  
// Human.prototype. 


function Visitor() {}                                                 
Caretaker.prototype = Object.create (Human.prototype);
Caretaker.prototype.constructor = Visitor;                                   // corrects prototype to properly set contructor relation after creation.
// Human.prototype. 


// ---------------------------------------------------------------------- Mixin
let giveNameMixin = function(obj){
    obj.giveName = function(){
        console.log("This is "+obj.myName);
    }
};

// ---------------------------------------------------------------------- individual instances
let monkey1 = new Howler;
monkey1.myName="Guppy";

let monkey2 = new Howler;
monkey2.myName="Maggy";

let monkey3 = new Monkey;
monkey3.myName="Edward";

let monkey4 = new Vervet;
monkey4.myName="Ginny";


let human1 = new Human;
human1.myName="Ms. Dwight";

let human2 = new Caretaker;
human1.myName="Mr. Dobbers";

let human3 = new Caretaker;
human3.myName="Mr. Sanderson";

let human4 = new Visitor;
human4.myName="Little Timmy";

// ---------------------------------------------------------------------- calls
giveNameMixin(monkey1);
monkey1.giveName();
monkey1.reportActivity();
// monkey1.shout();

console.log(monkey1);
    
