import { INote } from "../pages"

/**
 * NoteCard Component
 * 
 * This component renders a single note card with edit and delete functionality.
 * 
 * Props:
 * - note: INote - The note object to be displayed
 * - isDisable: boolean (optional, default: false) - If true, applies an opacity to visually disable the card
 * - withOob: boolean (optional, default: false) - If true, enables out-of-band swapping for HTMX
 * 
 * Features:
 * - Displays the note content
 * - Edit button: Triggers a GET request to load the edit form
 * - Delete button: Triggers a DELETE request to remove the note
 * 
 * The isDisable prop, when true, adds an opacity class to visually indicate the card is disabled.
 * This can be useful for showing inactive or processing states.
 * 
 * The withOob prop, when true, adds the hx-swap-oob attribute for HTMX.
 * This allows for out-of-band swapping, meaning the element can be updated anywhere in the DOM,
 * not just at the target of the HTMX request. This is useful for updating specific elements
 * without refreshing the entire list or page.
 */


export const NoteCard = ({note, isDisable = false, withOob = false}: {note: INote; isDisable?: boolean; withOob?: boolean}) => {
  return (
    <main 
    id={`note-${note.id}`} 
    hx-swap-oob={withOob ? "true" : ""} 
    class={
      isDisable 
      ? "bg-white border p-4 space-y-4 rounded-xl hover:shadow-xl transition duration-150 opacity-50" 
      : "bg-white border p-4 space-y-4 rounded-xl hover:shadow-xl transition duration-150"}>
      <div>{note.content}</div>
      <div class="space-x-2">
        <button hx-get={`/notes/${note.id}/edit`} hx-swap="none" class="border px-3 py-1 rounded-full font-medium">Edit</button>
        <button hx-delete={`notes/$note.id`} hx-target="closest main" class="border px-3 py-1 rounded-full font-medium">Delete</button> 
      </div>
    </main>
  )
}

