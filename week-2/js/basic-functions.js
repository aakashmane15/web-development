function add (num1, num2) {
    let result = num1 + num2;
    return result; 
}

function sub (num1, num2) {
    let result = num1 - num2; 
    return result; 
}
function mul (num1, num2) {
    let result = num1 * num2;
    return result; 
}

function div (num1, num2) {
    let result = num1 / num2;
    return result; 
}

function doOperation (num1, num2, op) {
    let result = op(num1, num2);
    return result; 
}

console.log("Basic calculator");

let res1 = doOperation(1, 2, add);
let res2 = doOperation(1, 2, sub);
let res3 = doOperation(1, 2, mul);
let res4 = doOperation(1, 2, div);

console.log(res1 + "\n" + res2 + "\n" + res3 + "\n" + res4);
