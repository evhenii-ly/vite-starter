# Vite Starter 🚀

This project is built with Vite. It follows best practices for clean code organization and scalable styling.

> **Note:** Before using this starter, please review their documentation in the `docs/` [folder](./docs/index.md).

## Table of Contents
*	[Requirements](#requirements)
*	[Setup](#setup)
*	[Scripts](#scripts)
*	[Folder Structure](#folder-structure)
*	[Key Features](#key-features)

## Requirements

*	**Node.js**: v20.18.0
*	**Bun**: Make sure you have Bun installed for managing dependencies and scripts. [Learn more about Bun](https://bun.sh/).

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
│       ├── features/    # Contains business logic or domain-specific features
│       ├── pages/       # Entry points for page-specific logic
│       ├── shared/      # Reusable utilities, constants, and services
│       └── ui/          # Components responsible for rendering the user interface
│   ├── style/           # SCSS and styles
│       ├── core/
│          ├── animations/      # Animation-related styles and keyframes
│          ├── base/            # Base styles (resets, global styles)
│          ├── configs/         # Configuration variables (colors, typography, etc.)
│          ├── functions/       # SCSS functions for reusable logic
│          ├── libs/            # Library-specific overrides and extensions
│          └── mixins/          # SCSS mixins for reusable style patterns
│       ├── theme/
│          ├── modules/         # Component-specific styles
│          ├── pages/           # Page-specific styles
│          └── sections/        # Section-specific styles for layout and structure
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

3. Frameworks and Overrides
   1.	**UIKit**:
   *	The project utilizes the [**UIKit** framework](https://getuikit.com/docs/introduction) as the foundation for many styles.
   *	**UIKit’s** styles are selectively overridden when needed. These overrides are defined in:
    `src/style/core/libs/_UIKit.scss`
   * This ensures that customizations to UIKit are isolated and easily maintainable.
   2.	Custom Buttons:
    *	Button styles are not derived from UIKit.
    *	Instead, custom styles are defined separately in dedicated SCSS files located in:
     `src/style/theme/modules/`
    * This provides complete flexibility for styling buttons as per project requirements.
### Notes for Developers
*	All styles should align with the modular structure defined above.
*	When modifying or overriding UIKit styles, always update the _UIKit.scss file to maintain consistency.
*	New components should have their styles added under theme/modules/.
*	Follow SCSS best practices for maintainability, such as using variables, mixins, and functions where applicable.

This structure ensures that styles remain organized and scalable as the project grows.

4. Modern Build Tools
   *	**Vite**: Superfast development and build tool.
   *	**Bun**: Blazing-fast package manager and script runner.

5. Linting and Formatting
   *	**Stylelint**: Enforces consistent and error-free SCSS.
   * 	**Prettier**: Ensures consistent code formatting.
