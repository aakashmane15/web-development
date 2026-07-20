"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("This is the Pick API");
function updateUser(updateProps) {
    console.log(`The name of the User is: ${updateProps.firstName}\nThe age of the User is: ${updateProps.age}\nThe phone of the User is: ${updateProps.phone}\nThe email of the User is: ${updateProps.email}`);
}
updateUser({
    firstName: "Aakash",
    age: 21,
    phone: 9561730303,
    email: "aakashmane@gmail.com",
});
console.log("This is Records");
function recordUsers(users) {
    console.log(`This is the first user: ${users.abcd?.username}\nThis is the second user: ${users.efgh?.username}`);
}
const users = {
    abcd: {
        id: "abcd",
        username: "aakashmane",
    },
    efgh: {
        id: "efgh",
        username: "aayusmane",
    },
};
recordUsers(users);
//# sourceMappingURL=advance-apis.js.map