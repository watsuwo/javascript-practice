function getGreeting(){
    return "Hello world";
}

const arr = [1, 2, 3];
arr[1] = getGreeting;

console.log(arr);
console.log(arr[1]());
