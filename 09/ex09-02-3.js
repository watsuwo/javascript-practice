class Car {
  constructor(make, model){
    this.make = make; //maker name
    this.model = model; //model name
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }

get userGear(){return this._userGear;}

set userGear(value){
  if(this._userGears.indexOf(value) < 0)
    throw new Error(`ギア指定が正しくない: ${value}`);
  this._userGear = value;
}
  shift(gear){this.userGear = gear;}

} 

const car1 = new Car('Tesla', 'S');

console.log(car1);
