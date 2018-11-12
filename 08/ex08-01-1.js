//配列リテラル

const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2 ,3], ["aaa",2, ["bbb"]]];
const arr4 = [{name: "wataru", birthday: "1.19", a: [1, 2, 3]}];

console.log(arr1[1]);
console.log(arr2[2]);
console.log(arr3[1]);
console.log(arr4);

//配列の長さ
console.log(arr1.length);
console.log(arr3[1].length);

//配列の長さを長くする
arr1[4] = 5;
console.log(arr1);
console.log(arr1[3]);
console.log(arr1.length);


