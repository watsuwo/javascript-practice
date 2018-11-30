let obj = {
  name: "Wataru",
  age: 24
};

console.log(Object.prototype);
console.log(obj.__proto__ === Object.prototype);

console.log(obj.name);

console.log(
    obj.toString
    );

console.log(
    obj.__proto__.__proto__ === null
    );

console.log(
    obj.name === "Wataru"
    );
