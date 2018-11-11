function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {subject: "aaa", verb: "bbb", object: "ccc"};

console.log(getSentence(o));
