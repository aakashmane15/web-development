console.log("This is the Pick API");

interface PickUser {
  id: string;
  firstName: string;
  age: number;
  phone: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<PickUser, "firstName" | "age" | "phone" | "email">;

function updateUser(updateProps: UpdateProps) {
  console.log(
    `The name of the User is: ${updateProps.firstName}\nThe age of the User is: ${updateProps.age}\nThe phone of the User is: ${updateProps.phone}\nThe email of the User is: ${updateProps.email}`,
  );
}

updateUser({
  firstName: "Aakash",
  age: 21,
  phone: 9561730303,
  email: "aakashmane@gmail.com",
});

console.log("This is Records");

type User = {
  id: string;
  username: string;
};

type RecordUser = Record<string, User>;

function recordUsers(users: RecordUser) {
  console.log(
    `This is the first user: ${users.abcd?.username}\nThis is the second user: ${users.efgh?.username}`,
  );
}

const users = {
  abcd: {
    id: "abcd",
    username: "aakashmane",
  },
  efgh: {
    id: "efgh",
    username: "aayushmane",
  },
};

recordUsers(users);
