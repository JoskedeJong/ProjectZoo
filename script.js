function Animal() { }   

Animal.prototype = {
    constructor: Animal,
    activity: "eating",
    dermis: "coloured",
    limbs: 4
};

let cow = new Animal ();

console.log(cow.dermis);
console.log(cow.limbs);