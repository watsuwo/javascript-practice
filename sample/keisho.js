//Objectを生成する

let obj1 = {
  x: 12,
  y: "ab"
};

let obj2 = new Object();
obj2.x = 34;
obj2.y = "cd";

console.log(obj1);
console.log(obj2);
//obj -> Object

let obj3 = [12, "ab"];
let obj4 = new Array(34, "cd");

console.log(obj3);
console.log(obj4);
//obj ->Array -> Object

console.log("------------------------------");

console.log(obj1 instanceof Object);
console.log(obj2 instanceof Object);
console.log(obj3 instanceof Object);
console.log(obj4 instanceof Object);

console.log("------------------------------");

console.log(obj1.constructor === Object);
console.log(obj2.constructor === Object);
console.log(obj3.constructor === Array);

console.log("------------------------------");

console.log(obj1.__proto__ === Object.prototype);
console.log(obj2.__proto__ === Object.prototype);
console.log(obj3.__proto__ === Array.prototype);
console.log(obj4.__proto__ === Array.prototype);

console.log("-------------------------------");

let getProto = Object.getPrototypeOf ? Object.getPrototypeOf :
  function getProto(obj){
    return obj.__proto__;
  };

console.log(getProto(obj1) === Object.prototype);
console.log(getProto(obj2) === Object.prototype);
console.log(getProto(obj3) === Array.prototype);
console.log(getProto(obj4) === Array.prototype);
console.log("-------------------------------");
