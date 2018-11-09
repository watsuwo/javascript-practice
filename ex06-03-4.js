function f(o){
    console.log(o.message);
    o.message = "messageの値を関数の中で設定";
    console.log(o.message);
    o = {message: "新しいオブジェクト"};
    console.log(o.message);
    console.log(o);
}

let o = {message: "messageの初期値"}
console.log(o.message);
f(o);
console.log(o.message);
console.log(o);
