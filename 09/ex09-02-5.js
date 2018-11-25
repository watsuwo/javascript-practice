class Car1 {
  constructor(make, model){
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }
}

let car1 = new Car1('Tesla', 'N');

console.log(car1);

console.log(typeof Car1);
