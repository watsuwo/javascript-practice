const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce(function(a, x){
    return a + x;
}, 5);

console.log(sum);
