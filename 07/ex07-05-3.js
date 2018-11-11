{
    let x = {color: "Blue"};
    let y = x;
    let z = 3;
    {
	let x = 5;	
	console.log(x);
	console.log(y.color);
	y.color = "Red";
	console.log(z);
    }
    console.log(x.color);
    console.log(y.color);
    console.log(z);
}
