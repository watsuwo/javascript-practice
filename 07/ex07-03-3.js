user = {
name: "Wataru",
age: 24
};

function greet(person){
    return `Hello!! ${person.name}`;
};

function Birthday(person){
    return new Date().getFullYear()-person.age;
};

console.log(greet(user));
console.log(Birthday(user));
