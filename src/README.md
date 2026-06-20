# Source Structure

This project is organized so small edits are easy to find.

- `App.tsx` controls the page order.
- `components/layout` contains global layout pieces such as navbar and footer.
- `components/sections` contains each landing page section.
- `components/hero` contains the custom hero visual.
- `components/brand` contains logo components.
- `components/ui` contains reusable UI primitives.
- `components/shared` contains shared wrappers such as the animated `Section`.
- `lib` contains small utility functions.
- `styles.css` contains global styles, fonts, and shared Tailwind classes.

For normal content changes, start in `components/sections`.
For logo/navbar/footer changes, start in `components/layout` or `components/brand`.
