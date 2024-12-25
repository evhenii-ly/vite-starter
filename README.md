# Vite Starter 🚀

This project is built with Vite. It follows best practices for clean code organization and scalable styling.

## Table of Contents
*	[Requirements](#requirements)
*	[Setup](#setup)
*	[Scripts](#scripts)
*	[Folder Structure](#folder-structure)
*	[Key Features](#key-features)

## Requirements

*	Node.js: v20.18.0
*	Bun: Make sure you have Bun installed for managing dependencies and scripts. [Learn more about Bun](https://bun.sh/).

## Setup
1.	Clone the repository:

```
git clone git@gitlab.com:Brainlab_team/vite-starter.git
cd vite-starter
```

2. Install dependencies using Bun:

`bun i`

3. Start the development server:

`bun run dev`

## Scripts

Below are the key scripts available for this project:

•	**dev**: Start the development server.
`bun run dev`

•	**build**: Build the project for production.
`bun run build`

•	**preview**: Preview the production build.
`bun run preview`

•	**style:fix**: Automatically fix SCSS issues using stylelint.
`bun run style:fix`

## Folder Structure

Here’s an overview of the project folder structure:

```
vite-starter/
├── dist/                # Production build output
├── node_modules/        # Installed dependencies
├── partials/            # Reusable partial templates
│   ├── icons/           # SVG and icon components
│   ├── layout/          # Layout-specific templates
│   ├── modules/         # Modular components
│   └── sections/        # Page sections
├── public/              # Static assets
│   └── logo.svg         # Example: logo file
├── src/                 # Source code
│   ├── font/            # Fonts
│   ├── image/           # Images
│   ├── script/          # JavaScript files
│   ├── style/           # SCSS and styles
│       ├── animations/  # Animations
│       ├── base/        # Base styles
│       ├── configs/     # Style configurations
│       ├── functions/   # SCSS functions
│       ├── libs/        # External libraries
│       ├── mixins/      # SCSS mixins
│       ├── modules/     # Modular styles
│       ├── pages/       # Page-specific styles
│       └── sections/    # Section-specific styles
├── .editorconfig        # Editor configuration
├── .gitignore           # Git ignored files
├── .prettierrc          # Prettier configuration
├── index.html           # Main entry point
├── package.json         # Project configuration
├── vite.config.js       # Vite configuration
```

## Key Features

1. JavaScript Organization with **Feature-Sliced Design**

The project utilizes the **Feature-Sliced Design** methodology for structuring JavaScript files. This approach promotes modularity and reusability, making it easier to maintain and scale the codebase.

2. Styling with **BEM**

For styling, we use the **BEM** (Block-Element-Modifier) methodology. This ensures consistency and maintainability in the project’s CSS/SCSS.

3. Modern Build Tools
   *	**Vite**: Superfast development and build tool.
   *	**Bun**: Blazing-fast package manager and script runner.

4. Linting and Formatting
   *	**Stylelint**: Enforces consistent and error-free SCSS.
   * 	**Prettier**: Ensures consistent code formatting.
