//コンストラクタ呼び出しパターン

function MyObject(value){
  this.value = value;
  this.increment = function(){
    this.value++;
  };
};

let myObject = new MyObject(100);
console.log(myObject);
console.log(myObject.value);

myObject.increment();
console.log(myObject.value)
