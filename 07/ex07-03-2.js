let name = "Wataru";
let age = 24;

console.log(name);

function greet(){ /*あいさつをする*/
   name = "Yamauchi";
   return `Hello ${name}`; 
};

function getBirthday(){
    console.log( new Date().getFullYear() - age);
};

console.log(greet());
getBirthday();

console.log(new Date().getFullYear());
console.log(name);
