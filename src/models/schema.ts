import { client } from "./client";

// Step 1: Import the client constructor from the client.ts file
// This has already been done at the top of the file

// Step 2: Execute SQL statement to create the 'notes' table
// This is done using the client.exec() method
// The SQL statement is wrapped in a template literal for better readability

// Step 3: The SQL statement does the following:
// - Creates a table named 'notes' if it doesn't already exist
// - Defines columns:
//   - 'id': Integer, primary key, auto-incrementing
//   - 'title': Text, not null
//   - 'content': Text, not null
//   - 'created_at': DateTime, default value is the current timestamp

// Step 4: The 'IF NOT EXISTS' clause ensures the table is only created if it doesn't already exist
// This prevents errors if the code is run multiple times

// Step 5: The client.exec() method executes the SQL statement
// Any errors during execution will be thrown and should be handled appropriately


client.exec(`
    CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);
