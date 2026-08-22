# ClearVision Consulting — Agent Instructions

## Purpose

This repository contains the ClearVision Consulting website.

Use these instructions for all coding and website implementation tasks in this repository.

For any task that creates, rewrites, or changes visible website content, first read:

`docs/BusinessContext.md`

Do not invent business facts, qualifications, statistics, testimonials, prices, partnerships, certifications, or clinical claims.

## Technology

- Semantic HTML5.
- Modern CSS.
- Vanilla JavaScript only when explicitly required.
- No frameworks, CSS libraries, build tools, or JavaScript dependencies unless explicitly approved.
- Keep the implementation lightweight and easy to maintain.

## Current CSS architecture

Use the existing structure:

- `css/variables.css` — global brand colours, fluid typography, global layout values.
- `css/base.css` — reset, global typography, base elements, `.container`.
- `css/components.css` — genuinely reusable components such as header, navigation, buttons, links, footer.
- `css/home.css` — homepage-specific styles.
- `css/main.css` — imports the shared/global CSS files.

Do not create additional CSS files without explicit approval.

## CSS principles

Keep CSS simple and readable.

- Reuse existing variables before adding new ones.
- Add a variable only when a value is global, brand-defining, or genuinely repeated.
- Do not create a large design-token abstraction layer.
- Prefer `clamp()` with `calc()` for fluid typography and spacing.
- Use `rem` for global sizing and global lower/upper bounds.
- Use `em` for component-internal proportions such as padding, gaps, and letter spacing.
- Use `fr` for grid proportions.
- Do not use percentage-based grid tracks when `fr` expresses the intended relationship clearly.
- Avoid inline styles.
- Do not use `!important`.
- Avoid unnecessary absolute positioning when Grid or Flexbox can solve the layout.
- Avoid duplicated selectors and dead CSS.

## Visual direction

The design language is:

- premium
- editorial
- architectural
- calm
- clinically precise
- minimal
- dark

Avoid:

- SaaS-dashboard aesthetics
- generic template layouts
- pill-shaped navigation
- glassmorphism
- decorative glows
- excessive gradients
- unnecessary cards
- visual clutter
- dental stock-photo clichés

The current brand wordmark in the header is:

`CLEARVISION.`

Do not replace it with the full logo unless explicitly requested.

## Brand colours

Use the existing CSS variables. The approved visual palette is based on:

- `#111216` — primary dark background
- `#1F2024` — secondary dark surface
- `#2A2A2C` — graphite
- `#F4F1EA` — warm light
- `#D9D9D6` — secondary light text
- `#8C8B87` — muted warm grey
- `#A8825F` — primary gold
- `#C79D72` — lighter gold

Do not introduce unrelated blue-green dark colours or arbitrary new brand colours.

## Current homepage direction

The current hero uses a two-column Grid based on `fr` units.

The visual side and content side must remain part of one coherent composition.

Do not redesign the hero unless explicitly asked.

When adjusting an existing visual element:

1. Inspect the actual HTML and all CSS rules affecting it.
2. Identify the real cause before editing.
3. Check for later overrides, wrapper constraints, intrinsic image sizing, `max-width`, `height`, `object-fit`, Grid/Flex constraints, and media queries.
4. Make the smallest maintainable change.
5. Do not modify unrelated selectors.

## Responsive design

- Mobile behaviour must be intentional, not an afterthought.
- Prevent horizontal overflow.
- Preserve readable line lengths.
- Do not create breakpoints unnecessarily.
- Prefer fluid sizing before adding another media query.
- Preserve image aspect ratios.
- Decorative assets must not create large empty areas on mobile.

## Accessibility

- Use semantic landmarks and heading hierarchy.
- Exactly one `h1` per page.
- Preserve visible keyboard focus.
- Decorative images use empty `alt` text or are hidden appropriately.
- Navigation must remain keyboard accessible.
- Do not remove accessibility attributes to simplify styling.

## Content and language

- Visible website copy is primarily German.
- Code identifiers, class names, IDs, filenames, and comments are English.
- Use clear, concise, professional language.
- Avoid exaggerated marketing language.
- Avoid unsupported superlatives and medical promises.

## Editing workflow

For changes:

1. Read the relevant files before editing.
2. Keep the task scope narrow.
3. Explain the cause of a bug before applying a broad fix.
4. Modify only files required by the task.
5. Preserve unrelated working code.
6. After editing, inspect the diff.
7. Check responsive impact where relevant.
8. Report:
   - files changed
   - selectors/markup changed
   - reason for each change
   - any remaining uncertainty

Do not create commits unless the user explicitly asks you to commit.

## Visual review rule

Technical correctness is not the same as visual approval.

Do not declare a design task complete solely because:
- there are no lint errors,
- there is no overflow,
- accessibility checks pass,
- the DOM is valid.

For visual tasks, make the requested implementation and leave final visual approval to the user.
