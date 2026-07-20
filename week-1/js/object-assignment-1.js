function greetUsers(user1, user2) {
    if (user1["gender"] === "Male" && user2["gender"] === "Male") {
        console.log("Hey Mr " + user1["firstName"] + " and " + "Mr " + user2["firstName"] + " your age is: " + user1["age"] + " and " + user2["age"]);
    } else {
        console.log("Hey Mrs" + user1["firstName"] + " and " + "Mr " + user2["firstName"] + " your age is: " + user1["age"] + " and " + user2["age"]);
    }

    if (user1["age"] >= 18) {
        console.log(user1["firstName"] + " is eligible to vote");
    } else {
        console.log(user1["firstName"] + " is NOT eligible to vote");
    }

    if (user2.age >= 18) {
        console.log(user2["firstName"] + " is eligible to vote");
    } else {
        console.log(user2["firstName"] + " is NOT eligible to vote");
    }
}

let user1 = {
    firstName: "Aakash",
    age: 21,
    gender: "Male"
}

let user2 = {
    firstName: "Aayush",
    age: 17,
    gender: "Male"
}

greetUsers(user1, user2);