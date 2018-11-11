let f;

{
    let o = {note: "安全", note2: "大丈夫"};
    f = function(){
    console.log("ここは"+o.note);
    return o;
    }
}

let oRef = f();
console.log(oRef);
oRef.note = "まったく安全ではない";
console.log(oRef);
console.log(f());
