let myObject = new Object();

myObject.name = "wataru";
myObject.age = 24;
myObject.func = function(){
  return `私の名前は${this.name}で年齢は${this.age}です`;
};

document.open();
document.write(myObject.name);
document.write("<br>");
document.write(myObject.age);
document.write("</br>");
document.write(myObject.func());
document.close();

