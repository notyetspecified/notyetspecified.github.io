# Tools Directory Guidelines

## Building Tools

1. **Single File**: Each tool is a single HTML file with inline JavaScript and CSS
2. **No Build Steps**: No React, TypeScript, or anything requiring compilation
3. **Minimal Dependencies**: Avoid external libraries. If absolutely needed, load from CDN
4. **Keep Small**: Tools should be focused and lightweight
5. **Dark Theme**: All tools must use a dark theme (background: #1a1a1a, text: #fff)
6. **Standalone**: Each tool must work independently with no navigation or links to other tools
7. **Commits**: Keep commit messages short and in one line

## File Structure

```
tools/
├── CLAUDE.md       # This file
├── index.html      # Landing page listing all tools
└── [tool].html     # Individual tool files
```

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
