"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Connection string: postgresql://neondb_owner:npg_NwvKM0ts1YyU@ep-soft-sky-anhit7mx-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
const pgClient = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_NwvKM0ts1YyU@ep-soft-sky-anhit7mx-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});
async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
}
main();
//# sourceMappingURL=index.js.map