let usr = {
    name: "Wataru",
    age: "25"
};

function greet(){
    return `Hello!! ${usr.name}`;
};

function Birthday(){
    return new Date().getFullYear() - usr.age;
};

console.log(greet());
console.log(Birthday());
