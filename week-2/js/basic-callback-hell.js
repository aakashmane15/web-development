setTimeout(function() {
    console.log("Hi");
    
    setTimeout(function() {
        console.log("Hello");

        setTimeout(function() {
            console.log("Hey there")
        }, 5000)
    }, 3000)
}, 1000);