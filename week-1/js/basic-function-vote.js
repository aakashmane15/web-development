function canVote(age) {
    let res = age >= 18;
    return res;
}

let person1 = canVote(16);
let person2 = canVote(19);

console.log(person1);
console.log(person2);