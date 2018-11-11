const o = {
    name: "Yamauchi",
    greetBackwords: function(){
	function getReverseName(){
	    let nameBackwords = '';
	    for (let i = o.name.length -1; i>=0; i--){
	        nameBackwords += o.name[i];
	}	
	return nameBackwords;
    }

    return getReverseName();
}
}

console.log(o.greetBackwords());
