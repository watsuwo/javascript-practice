// Objectの定義
class Dog{
  constructor(name){
    this.name = name;
    this.bark = function(){
      console.log(`${this.name}"わんわん"`);
    }
  }
};

let pochi = new Dog("pochi");

console.log(pochi);
pochi.bark();

console.log("---------------------------------");

//継承
class Animal{
  constructor(name, voice){
    this.name = name;
    this.voice = voice;
  }
};

class Dog1 extends Animal{
  constructor(name, voice){
    super();
    console.log("Dog1が生成された");
  }
};

let pochi1 = new Dog1("pochi", "WanWan");

console.log(pochi1);

let pochi2 = new Animal("pochi2", "Wanwan");

console.log(pochi2);
