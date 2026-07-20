function sum(num) {
    let totalSum = 0;

    for (let i = 0; i < num; i++) {
        totalSum = totalSum + i + num;
    }
    
    return totalSum;
}

let result = sum(5);
console.log(result);