import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";

const client = new PrismaClient();
