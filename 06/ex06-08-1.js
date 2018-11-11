const aaa ={ name: "wataru"};

function greet(){
    return `My name is ${this.name}`;
}

console.log(greet());
console.log(greet.call(aaa));
