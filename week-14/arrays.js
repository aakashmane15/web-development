"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(users) {
    for (const user of users) {
        if (user.age >= 18) {
            console.log(`${user.firstName} ${user.lastName} is of legal age`);
        }
        else {
            console.log(`${user.firstName} ${user.lastName} is of no legal age`);
        }
    }
}
isLegal([
    {
        firstName: "Aakash",
        lastName: "Mane",
        age: 21,
    },
    {
        firstName: "Aayush",
        lastName: "Mane",
        age: 16,
    },
]);
//# sourceMappingURL=arrays.js.map