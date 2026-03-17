# [cite_start]CSS Decisions - LAB 3 [cite: 1198]

## [cite_start]1. Breakpoint Selection [cite: 1199]
[cite_start]I selected **640px** and **1024px** as my primary breakpoints[cite: 1200, 131].
- [cite_start]**640px (Tablet):** Used to transition from a single-column mobile layout to a wider tablet view[cite: 23, 133].
- [cite_start]**1024px (Desktop):** Used to optimize the layout for large screens and limit the maximum width for better readability[cite: 23, 134].

## [cite_start]2. Layout Choices [cite: 1202]
- [cite_start]**Flexbox:** I used Flexbox for the header and navigation because it excels at one-dimensional alignment, making it easy to switch from vertical to horizontal layouts[cite: 26, 372, 541].
- **CSS Grid:** I implemented CSS Grid for the project cards. [cite_start]Using `repeat(auto-fit, minmax(280px, 1fr))` allowed for a robust 2D layout that responds automatically to screen width[cite: 27, 489, 543, 863].

## [cite_start]3. Design Tokens [cite: 1206]
- [cite_start]**Color Palette:** I defined a consistent set of colors in `:root`, including a specific `primary-hover` state to improve user interaction feedback[cite: 25, 287, 310].
- [cite_start]**Fluid Typography:** I utilized the `clamp()` function for font sizes to ensure a smooth, continuous scaling effect (Fluid Typography) across all devices[cite: 24, 316, 319, 321].

## [cite_start]4. Responsive Strategies [cite: 1210]
[cite_start]I strictly followed a **Mobile-First** approach[cite: 22, 58, 1211]. [cite_start]All base styles target the smallest screens, and enhancements for larger displays are added using `min-width` media queries[cite: 61, 62, 1252].