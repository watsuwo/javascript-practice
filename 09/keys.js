let obj = {
    
    name: 'Wataru',
    age: '30',
    area: '阿蘇'
}

console.log(Object.keys(obj));

Object.keys(obj).forEach(function(value){
    console.log(value);
});
