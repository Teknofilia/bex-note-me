import { Html } from "@elysiajs/html";
import { client } from "../models/client";
import { Home } from "../views/pages";
import { Context } from "elysia";
import { TBody } from "../types/entity";
import { NoteForm, NoteFormUpdate } from "../views/components/noteForm";
import { NoteCard } from "../views/components/noteCard";
import { INote } from "../views/pages";

/**
 * This noteController.tsx file contains various HTTP methods for handling note-related operations:
 * 
 * GET:
 * - getTodos(): Retrieves all notes from the database and renders them in the Home component.
 * 
 * POST:
 * - createTodo({ body }): Creates a new note with the given title and content, then returns the 
 *   NoteForm component and the newly created NoteCard.
 * 
 * DELETE:
 * - deleteTodo({ params }): Deletes a note with the specified id from the database.
 * 
 * GET (for update UI):
 * - updatedTodoUI({ params }): Retrieves a specific note by id and renders the NoteFormUpdate 
 *   component for editing.
 * 
 * PUT/PATCH:
 * - updateTodo({ params, body }): Updates an existing note with the given id, title, and content, 
 *   then returns the NoteForm and updated NoteCard.
 * 
 * These functions interact with the database using the 'client' object for querying and 
 * manipulating note data. They also utilize various view components to render the appropriate 
 * UI for each operation.
 */


export function getTodos() {
    const allNotes = client.query(`SELECT * FROM notes`).all() as INote[];

    return <Home notes={allNotes}/>
}

export function createTodo({ body } : Context) {
    const { title, content } = body as TBody;
    const newNote = client.query(`INSERT INTO notes (title, content) VALUES (?, ?)`).run(title, content);

    const currentNote = client.query(`SELECT * FROM notes ORDER BY id DESC LIMIT 1`).all() as INote[];
    return (
        <>
            <NoteForm/>
            <NoteCard note={currentNote[0]}/>
        </>
    )
}

export function deleteTodo({ params }: Context ) {
    const { id } = params
    client.query(`DELETE FROM notes WHERE id = ?`).run(id);
    return null;
}

export function updatedTodoUI({ params } : Context) {
    const { id } = params

    const currentNote = client.query(`SELECT * FROM notes WHERE id = ?`).all(id) as INote[]

    return (
        <NoteFormUpdate id={id} note={currentNote[0]}/>
    )
}

export function updateTodo({ params, body} : Context) {
        const { id } = params;
        const { title, content } = body as INote;
        client.query(`UPDATE notes SET title = ?, content = ? WHERE id = ?`).run(title, content, id);
        
        const updatedNote = client.query(`SELECT * FROM notes WHERE id = ?`).all(id) as INote[]; 
    
        return (
            <>
            <NoteForm/>
            <NoteCard note={updatedNote[0]}/>
            </>
        )
}