// basis of constructor

function Dog(name, cry){
  this.name = name;
  this.bark = function(){
    console.log(cry);
  };
}

let dog = new Dog('きなこ', 'わんわん');
console.log(dog.name);

dog.bark();

class Dog1{
  constructor(name, cry){
    this.name = name;
    this.bark = function(){
      console.log(cry);
    }
  }
}

const dog1 = new Dog1('おもち', 'ぷんぷん');

console.log(dog1.name);

dog1.bark();


