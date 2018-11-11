function getSentence([subject, verb, object]){
    return `${subject}, ${verb}, ${object}`;
}

const arr = ["aaa", "bbb", "ccc"];
console.log(getSentence(arr));
