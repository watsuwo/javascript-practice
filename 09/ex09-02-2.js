class Car {
  constructor(make, model){
    this.make = make; //メーカー
    this.model = model; //モデル
    this.userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGear[0];
  }

shift(gear){
  if(this.userGears.indexOf(gear) < 0)
    throw new Error(`ギア指定が正しくない: ${gear}`);
  this.userGear = gear;
  }
}
