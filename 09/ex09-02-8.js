class Vehicle{
  constructor(){
    this.passengers = [];
    console.log("Vehicleが生成された");
  }
  addPassenger(p){
    this.passengers.push(p);
  }
}

class Car extends Vehicle{
  constructor(){
    super();
    console.log("Carが生成された");
  }
  deployAirbags(){
    console.log("Ban!!");
  }
}

const v = new Vehicle();
v.addPassenger("あああ");
v.addPassenger("いいい");

console.log(v);
console.log(v.passengers);

const c = new Car();
c.addPassenger("ううう");
c.addPassenger("えええ");
console.log(c.passengers);


