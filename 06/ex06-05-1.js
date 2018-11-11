ionst o = {
    name: "Tarou",
    speak(){return `My name is ${this.name}`;}
};

const o2 = {
    name: "Jun",
    speak(){return `My name is ${o2.name}`;}
}

const speak = o.speak;
const speak2 = o2.speak;

console.log(speak === o.speak);
console.log(speak());
console.log(o.speak());

console.log(speak2 === o2.speak);
console.log(speak2());
console.log(o2.speak());
