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

let cow = new Animal ();

cow.reportActivity();