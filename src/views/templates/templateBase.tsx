import { Html } from '@elysiajs/html';

/**
 * TemplateBase.tsx
 * 
 * This file defines the base HTML structure for the application using Elysia's HTML plugin.
 * 
 * Key features:
 * - Uses the Html type from @elysiajs/html for proper typing
 * - Sets up a basic HTML5 document structure
 * - Includes meta tags for proper character encoding and responsive viewport
 * - Loads HTMX library for dynamic HTML interactions
 * - Includes Tailwind CSS for styling
 * - Sets up a basic body structure with a main content area
 * - Accepts children components to be rendered within the main content area
 * 
 * This template serves as the foundation for all pages in the application,
 * ensuring consistent structure and included resources across the site.
 */


export const TemplateBase = ({children}: Html.PropsWithChildren) => {
  return (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://unpkg.com/htmx.org@2.0.1" integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/" crossorigin="anonymous"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <title>Document</title>
        </head>
        <body class="bg-slate-50 py-8 text-sm">
          <main class="max-w-[300px] m-auto">
            {children}
          </main>
        </body>
    </html>
  )
}