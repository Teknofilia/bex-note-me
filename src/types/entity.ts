import { t, Static } from "elysia";

/**
 * This file defines the schema and types for entities used in the application.
 * 
 * It imports the necessary utilities from Elysia for type definition and validation.
 * 
 * The file contains:
 * 1. A schema definition for the request body (bodySchema) using Elysia's type system.
 * 2. A TypeScript type (TBody) derived from the schema for use in the application.
 * 
 * The bodySchema defines the structure for a content entity with 'title' and 'content' fields,
 * both of which are strings. This schema can be used for validation of incoming request bodies.
 * 
 * The TBody type is a static representation of the bodySchema, allowing for type checking
 * and autocompletion in TypeScript when working with entities conforming to this schema.
 */



export const bodySchema = t.Object({
    title: t.String(),
    content: t.String()
})

export type TBody = Static<typeof bodySchema>

