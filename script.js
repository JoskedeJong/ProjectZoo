function Animal() { }  
var fedCounter = 0;

Animal.prototype = {
    constructor: Animal,
    myName: "unnamed animal",
    activity: "active",
    limbs: 4,
    fedCounter: 0,
    reportActivity: function() {
        console.log ("This animal is currently " + this.activity + ".");
    }
};  

// ---------------------------------------------------------------------- Department of Monkeys
function Monkey() {}                                                   // Animal - Monkey Maker
Monkey.prototype = Object.create (Animal.prototype);
Monkey.prototype.constructor = Monkey;                                 // corrects prototype to properly set contructor relation after creation.
Monkey.prototype.feed = function() {
    fedCounter++;
    console.log(this.myName+" has been fed "+fedCounter+" times.");
}

function Howler(){}                                                    
Howler.prototype = Object.create(Monkey.prototype);
Howler.prototype.constructor = Howler;
Howler.prototype.feed = function(){                                    // personal note: ugh, I wanted to extend, not override
    fedCounter++;
    console.log(this.myName+" has been fed "+fedCounter+" times.");    
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


function Caretaker() {}                                                   
Caretaker.prototype = Object.create (Human.prototype);
Caretaker.prototype.constructor = Caretaker;                                  


function Visitor() {}                                                 
Visitor.prototype = Object.create (Human.prototype);
Visitor.prototype.constructor = Visitor;                                   // corrects prototype to properly set contructor relation after creation.


// ---------------------------------------------------------------------- Mixin
let giveNameMixin = function(obj){
    obj.giveName = function(){
        console.log("This is "+obj.myName);
    }
};

// ---------------------------------------------------------------------- individual instances

var animalsList = [];

let monkey1 = new Howler;
monkey1.myName="Guppy";
this.animalsList.push(monkey1);

let monkey2 = new Howler;
monkey2.myName="Maggy";
this.animalsList.push(monkey2);

let monkey3 = new Monkey;
monkey3.myName="Edward";
this.animalsList.push(monkey3);

let monkey4 = new Vervet;
monkey4.myName="Ginny";
this.animalsList.push(monkey4);


let human1 = new Human;
human1.myName="Ms. Dwight";
this.animalsList.push(human1);

let human2 = new Caretaker;
human1.myName="Mr. Dobbers";
this.animalsList.push(human2);

let human3 = new Caretaker;
human3.myName="Mr. Sanderson";
this.animalsList.push(human3);

let human4 = new Visitor;
human4.myName="Little Timmy";
this.animalsList.push(human4);

let human5 = new Visitor;
human5.myName="Little Jenny";
this.animalsList.push(human5);

// ---------------------------------------------------------------------- counting the animals
var countedList = [];

function countAnimals(){
    let monkeyCount = 0;
    let howlerCount = 0;
    let vervetCount = 0;
    let humanCount = 0;
    let caretakerCount = 0;
    let visitorCount = 0;
    this.animalsList.forEach(function (element, index){
        if (element.constructor.name === "Monkey"){
            monkeyCount+=1;
        }
        else if (element.constructor.name === "Howler"){
            howlerCount++;
        }
        else if (element.constructor.name === "Vervet"){
            vervetCount++;
        }
        else if (element.constructor.name === "Human"){
            humanCount++;
        }
        else if (element.constructor.name === "Caretaker"){
            caretakerCount++;
        }
        else if (element.constructor.name === "Visitor"){
            visitorCount++;
        }
    });
    this.countedList.push(["Total Monkeys", monkeyCount+howlerCount+vervetCount], ["Howlers", howlerCount], ["Vervets", vervetCount ], 
        ["Total Humans", humanCount+caretakerCount+visitorCount], ["Caretakers", caretakerCount], ["Visitors", visitorCount])
}

// ---------------------------------------------------------------------- to HTML
function setList(){
    // var x = toString(countedList);
    document.getElementsByClassName("listSpace")[0].innerHTML = countedList;
}

// ---------------------------------------------------------------------- calls

giveNameMixin(monkey1);
monkey1.giveName();
monkey1.reportActivity();

// console.log(monkey1);
    
console.log(animalsList);
countAnimals();
console.log(countedList);