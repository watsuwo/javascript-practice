const cart = [{name: "Iphone", price: 54800}, {name: "Android", price: 20000}];

const names = cart.map(function(x){
    return x.name;
});

console.log(names);

const prices = cart.map(function(x){
    return x.price;
});

console.log(prices);

const discountPrice = cart.map(function(x){
    return x.price * 0.8;
});

console.log(discountPrice);
