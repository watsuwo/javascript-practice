{ /*外側のブロック*/
    let x = "Blue";
    console.log(x);
    {
	let x = 3;
	console.log(x);
    }
    console.log(x);
}
console.log(typeof x);
