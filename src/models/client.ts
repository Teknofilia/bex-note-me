import { Database } from "bun:sqlite";

// To generate a SQLite database in Bun:
// 1. Create a new file with .db extension (e.g. dev.db)
// 2. Use the Database constructor from "bun:sqlite"
// 3. Pass the path to your .db file as an argument
// 4. Execute SQL statements to create tables and insert data as needed
// Example:
// export const client = new Database("./src/models/dev.db");

export const client = new Database("./src/models/dev.db");