const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4};

const propArray = Object.keys(o);
console.log(propArray);

propArray.forEach(prop => console.log(`${prop}: ${o[prop]}`));
