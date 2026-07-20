"use strict";
// function greet(firstName: string) {
//   console.log(`Hello ${firstName}`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18;
    }
}
let manager1 = new Manager("Aakash", 21);
console.log(manager1.name);
console.log(manager1.age);
console.log(manager1.isLegal());
//# sourceMappingURL=index.js.map