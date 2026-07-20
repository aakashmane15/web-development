function step1Done() {
    console.log("Hi");
    setTimeout(step2Done, 3000);
}

function step2Done() {
    console.log("Hello");
    setTimeout(step3Done, 5000);
}

function step3Done() {
    console.log("Hello there");
}

setTimeout(step1Done, 1000); 