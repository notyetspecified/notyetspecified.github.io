# Tools and Recipes Directory Guidelines

## Building Tools

1. **Single File**: Each tool or recipe is a single HTML file with inline CSS and, only when needed, inline JavaScript
2. **No Build Steps**: No React, TypeScript, or anything requiring compilation
3. **Minimal Dependencies**: Avoid external libraries. If absolutely needed, load from CDN
4. **Keep Small**: Tools and recipes should be focused and lightweight
5. **Dark Theme**: All pages must use a dark theme (background: #1a1a1a, text: #fff)
6. **Standalone**: Each tool must work independently with no navigation or links to other tools. Recipe pages must also work independently, but may link to the recipe index and their original source
7. **Commits**: Keep commit messages short and in one line

## File Structure

```
tools/
├── AGENTS.md       # This file
├── index.html      # Landing page listing tools and the recipes section
├── [tool].html     # Individual tool files
└── receitas/
    ├── index.html  # Recipe index in Portuguese
    └── [recipe].html # One standalone HTML file per recipe
```

## Recipe Pages

- Write recipe pages and their index in European Portuguese, using `lang="pt-PT"`.
- Store each recipe in `receitas/` with a descriptive, lowercase, hyphenated HTML filename, without accents. Add it to `receitas/index.html`.
- Include a recipe title, author attribution when known, ingredients with quantities, ordered preparation steps, and a link to the original source.
- Verify ingredients, quantities and preparation against the source. Only include servings, timings or other factual details when the source provides them; do not invent missing information.
- Use your own wording for preparation instructions and summaries while preserving the recipe's facts.
- Keep the full recipe readable without JavaScript, external assets or a network connection. Use semantic lists and a layout suitable for consulting while cooking on a phone.

## Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tool Name</title>
    <style>
        /* Inline CSS here */
    </style>
</head>
<body>
    <!-- HTML content -->
    <script>
        // Inline JavaScript here
    </script>
</body>
</html>
```

## Best Practices

- Use semantic HTML
- Support mobile viewports
- Handle errors gracefully
- Provide clear user feedback
- Test in multiple browsers
