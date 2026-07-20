import { PrismaClient } from "./generated/prisma/client.js";
import { userInfo } from "node:os";

const client = new PrismaClient();

console.log("Intiated");

async function createUser() {
  await client.user.create({
    data: {
      username: "aakashmane",
      password: "aakash123",
      email: "aakash@test.com",
    },
  });
}

createUser();
