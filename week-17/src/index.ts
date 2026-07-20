import { Client } from "pg";
// Connection string: postgresql://neondb_owner:npg_NwvKM0ts1YyU@ep-soft-sky-anhit7mx-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

const pgClient = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_NwvKM0ts1YyU@ep-soft-sky-anhit7mx-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

async function main() {
  await pgClient.connect();
  const response = await pgClient.query("SELECT * FROM users;");
  console.log(response.rows);
}

main();
