import { Elysia, t } from "elysia";
import { createTodo, deleteTodo, getTodos, updatedTodoUI, updateTodo } from "./controllers/noteController";
import { html }  from "@elysiajs/html";
import { bodySchema } from "./types/entity";

/**
 * This file sets up an Elysia server for a simple todo application.
 * 
 * Key components:
 * - Imports necessary modules and controller functions
 * - Uses Elysia's HTML plugin for rendering
 * - Defines API routes for CRUD operations on todos:
 *   - GET /notes: Retrieve all todos
 *   - POST /notes: Create a new todo
 *   - DELETE /notes/:id: Delete a specific todo
 *   - GET /notes/:id/edit: Get UI for editing a todo
 *   - PATCH /notes/:id: Update a specific todo
 * - Implements request body validation using a schema
 * - Starts the server on port 3000
 * 
 * The server uses controller functions imported from noteController.js
 * to handle the business logic for each route.
 */


const app = new Elysia()
.use(html())
.get("/notes", getTodos)
.post("/notes", createTodo,{ body: bodySchema })
.delete("/notes/:id", deleteTodo)
.get("/notes/:id/edit", updatedTodoUI)
.patch("/notes/:id", updateTodo, {body: bodySchema })
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
