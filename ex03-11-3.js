const obj =  {};
obj.color = "yellow";
obj.car  = "bass";

const SIZE = Symbol();
obj["SIZE"] = 8;
console.log(obj["SIZE"]);

console.log(obj);
