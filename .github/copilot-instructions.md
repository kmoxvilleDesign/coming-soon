# ClearVision Website Instructions

This is a lightweight HTML and CSS website.

## Technology

- Use semantic HTML5.
- Use modern CSS.
- Do not add JavaScript unless explicitly requested.
- Do not add frameworks, libraries or build tools.

## CSS Structure

- css/variables.css contains global colours, typography and layout values.
- css/base.css contains reset, global typography and the container.
- css/components.css contains genuinely shared components.
- css/home.css contains homepage-specific styles.
- css/main.css imports the global stylesheets.

Do not create additional CSS files without approval.

## Styling Rules

- Reuse existing variables before adding new ones.
- Add variables only for genuinely global or repeated values.
- Use clamp() and calc() for fluid typography and spacing.
- Use rem for global sizing and em for component proportions.
- Do not use inline styles.
- Do not use !important.
- Do not introduce card layouts, pill navigation, glass effects or decorative glows.
- Use only the existing ClearVision brand colours.

## Editing Rules

- Keep changes limited to the requested scope.
- Do not redesign unrelated areas.
- Do not create new files without approval.
- Explain the cause of a bug before applying a broad fix.
- Prefer the smallest maintainable correction.