class Car{
  constructor(make, model){
    this.make =  make;
    this.model = model;
    this._userGears = ["P","A","D","S"];
    this._userGear = this._userGears[0];
  }
};

car1 = new Car("Tesla", "S");

console.log(car1);
