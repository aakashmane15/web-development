interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User) {
  if (user.age > 18) {
    console.log("Legal!");
  } else {
    console.log("Illegal!");
  }
}

const user1 = {
  firstName: "Aakash",
  lastName: "Mane",
  age: 21,
};

isLegal(user1);

const user2 = {
  firstName: "Aayush",
  lastName: "Mane",
  age: 17,
};

isLegal(user2);
