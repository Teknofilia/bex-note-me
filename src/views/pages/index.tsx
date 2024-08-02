import { Html } from "@elysiajs/html"
import { TemplateBase } from "../templates/templateBase"
import { NoteForm } from "../components/noteForm";
import { NoteCard } from "../components/noteCard";

/**
 * This file defines the Home component for a note-taking application.
 * 
 * Key features:
 * - Imports necessary components and types
 * - Defines the INote interface for note objects
 * - Renders the main page structure using TemplateBase
 * - Includes a NoteForm component for adding new notes
 * - Displays existing notes using NoteCard components
 * - Uses server-side props to receive and render the list of notes
 * 
 * The component takes a 'notes' prop, which is an array of INote objects.
 * It then maps over this array to render individual NoteCard components.
 * 
 * This structure allows for a dynamic display of notes, with the ability
 * to add new notes through the NoteForm component.
 */


export interface INote {
    id: number;
    title: string;
    content: string;
}

export const Home = ({notes} : {notes : INote[]}) => {
  return (
    <TemplateBase>
        <main class="space-y-6">
            <NoteForm />
            <div id="notes">
                {notes.map(( note ) => {
                    return (
                        <NoteCard note={note}/>
                    )
                })}
            </div>
        </main>
    </TemplateBase>
  )
}

