# SvelteKit Project

This is a project built with SvelteKit, a modern web development framework for building fast and robust web applications.

## Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Components**: daisyUI, Lucide Svelte
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- [Deno](https://deno.com/) installed on your machine.
- A code editor like [VS Code](https://code.visualstudio.com/).

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install dependencies:**

    The project uses `npm` packages managed via Deno. These will be installed automatically when you run the development server.

### Running the Development Server

To start the development server, run the following command:

```bash
deno run -A npm:vite
```

The application will be available at `http://localhost:5173`.

## Available Scripts

-   `deno run -A npm:vite`: Starts the development server.
-   `deno run -A npm:vite build`: Builds the application for production.
-   `deno run -A npm:vite preview`: Previews the production build locally.

## Project Structure

```
.
├── src
│   ├── routes
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   └── ... (other routes)
│   ├── app.css
│   ├── app.d.ts
│   └── app.html
├── static
│   └── favicon.svg
├── svelte.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```


