// function greet(firstName: string) {
//   console.log(`Hello ${firstName}`);
// }

// greet("Aakash");

// function sum(a: number, b: number): number {
//   return a + b;
// }

// let answer = sum(1, 5);
// console.log(`The answer is ${answer}`);

// function delayedCall(fn: () => void) {
//   setTimeout(fn, 1000);
// }

// delayedCall(() => {
//   console.log("This is the function inside a function!");
// });

// function objectType(obj: { firstName: string; lastName: string; age: number }) {
//   console.log(`Hello ${obj.firstName}`);
// }

// objectType({
//   firstName: "Aakash",
//   lastName: "Mane",
//   age: 21,
// });

// let person: People = {
//   name: "Aakash",
//   age: 21,
//   // greet: () => {
//   //   return "Hello";
//   // },
// };

interface People {
  name: string;
  age: number;
  // greet: () => string;
  isLegal(): boolean;
}

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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
