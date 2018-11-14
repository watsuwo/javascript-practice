let name = ["wataru"," shuhei"];
let age = [24, 25];

const NameAge = name.map(function(x, i){
    return {name: x, age: age[i]};
});

console.log(NameAge);
