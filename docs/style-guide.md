# Style guide

## Styles

### 1. **Property Order**
- Properties should follow a clean, predefined order for better readability.
- Empty lines **should not** appear between property groups.
- Do **not** add an empty line before property groups.
- Unspecified properties will be sorted **alphabetically** and placed at the bottom of the list.

### 2. **Declaration Rules**
- Avoid empty lines before declarations, except:
  - After comments.
  - Inside single-line blocks.
  - Before comments.

### 3. **Specificity Rules**
- The `no-descending-specificity` rule is disabled to allow flexibility with selector nesting.
- Avoid using ID selectors.

### 4. **Class Naming Convention**
- Class names must follow the **BEM (Block Element Modifier)** convention:
  - Format: `block__element--modifier`.
  - Example: `header__nav--active`.
- Nested selectors will be resolved to ensure compliance with this naming rule.

### 5. **Color Formatting**
- Always use short hexadecimal notation for colors whenever possible.
  - Example: Use `#fff` instead of `#ffffff`.

### 6. **Block Content**
- Avoid empty blocks. Always include content inside block-level rules.

### 7. **Nesting Depth**
- Limit nesting to a maximum depth of **3 levels** to prevent overly complex styles. .

### 8. **Severity Levels**
- Non-compliance with the property order rules will result in a **warning**, not an error.

# JS

We require modern ES6+ syntax in all JavaScript code for consistency, maintainability, and performance. Here's an example structure for a page-specific script:

## Example: `src/script/pages/Home/index.js`

```javascript
// Import the necessary SCSS file for the page
import '@style/theme/pages/home.scss';

// Initialize the page-specific logic
const initPage = () => {
  // Add your initialization logic here
};

// Ensure the page initialization happens when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initPage();
});

// Additional actions can be triggered when the page is completely loaded
window.addEventListener('load', () => {
  // Add any post-load logic here
}, false);
```

## Key Points
### 1.	Use ES6+ Syntax:
 -	Arrow functions (()=>{}).
 -	const and let for variable declarations.
 -	Import statements for modules and styles.
### 2.	Separation of Concerns:
 -	Import styles separately using SCSS.
 -	Keep page-specific logic inside the initPage function.
### 3.	DOM Event Handling:
 -	Use DOMContentLoaded to ensure scripts execute after the DOM is fully constructed.
 -	Use the load event to handle tasks requiring full resource loading (e.g., images).
### 4.	Maintain Readability:
 - Keep the code modular and clean.
 - Write page-specific logic in separate directories (src/script/pages/<PageName>/index.js).
