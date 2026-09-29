# InnovateX 2026 — Design System

## 1. Design Direction

Create a futuristic technology-festival identity inspired by:
- cyber interfaces
- modern developer products
- innovation labs
- premium student conferences
- digital art installations

The visual language should be dark, sophisticated, energetic, and minimal rather than noisy.

## 2. Core Visual Concept

The site should communicate:

`IDEA → BUILD → COMPETE → CONNECT → CREATE`

Use visual cues such as:
- subtle grid backgrounds
- glowing gradients
- thin borders
- large typography
- controlled blur
- abstract technology imagery
- geometric shapes
- soft ambient light

## 3. Color System

Recommended tokens:

```css
--bg-primary: #070A12;
--bg-secondary: #0C1220;
--surface: #101827;
--surface-soft: #151F31;
--text-primary: #F8FAFC;
--text-secondary: #A7B0C0;
--text-muted: #6F7A8D;
--accent-blue: #4DA3FF;
--accent-cyan: #45E6D0;
--accent-purple: #9B6CFF;
--accent-pink: #FF5FB2;
--border: rgba(255,255,255,0.10);
--border-strong: rgba(255,255,255,0.18);
```

Do not use every accent simultaneously. Select one dominant accent and one supporting accent per section.

## 4. Typography

Preferred font pairing:
- Display: Space Grotesk / Sora / Manrope
- Body: Inter / DM Sans / Manrope
- Mono metadata: JetBrains Mono

Hierarchy:

```text
Hero H1: 72–104px desktop
Hero H1: 48–64px tablet
Hero H1: 38–48px mobile

Section H2: 42–56px desktop
Section H2: 32–40px mobile

Card H3: 20–26px
Body: 16–18px
Small metadata: 12–14px
```

Use tight tracking on large headings.

## 5. Spacing System

Use an 8px base system:

```text
8
16
24
32
40
48
64
80
96
120
```

Desktop sections should generally have 96–140px vertical spacing.

Mobile sections should generally have 64–88px spacing.

## 6. Layout

Maximum content width:
`1200–1280px`

Recommended:
```css
.container {
    width: min(1200px, calc(100% - 40px));
    margin-inline: auto;
}
```

Desktop:
- 12-column conceptual grid
- generous whitespace

Mobile:
- single-column content
- compact spacing
- touch-friendly controls

## 7. Header

Header should be:
- sticky
- translucent
- slightly blurred
- bordered
- compact

Desktop:
```text
Logo | About Events Schedule Gallery | Register
```

Mobile:
```text
Logo                         Menu
```

When scrolling, maintain readability with a slightly stronger surface background.

## 8. Hero Design

Composition:
- Left: headline, supporting text, CTAs
- Right/background: abstract technology visual
- Bottom/center: countdown

Possible background:
- dark gradient
- abstract glowing orb
- futuristic circuit structure
- 3D geometric technology object

Hero should have strong visual hierarchy.

Primary CTA:
- filled accent button

Secondary CTA:
- transparent/bordered button

## 9. Countdown Design

Use four independent blocks:

```text
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│  12   │ │  08   │ │  42   │ │  17   │
│ DAYS  │ │ HOURS │ │  MIN  │ │  SEC  │
└───────┘ └───────┘ └───────┘ └───────┘
```

Use large numerals and small uppercase labels.

## 10. About Design

Use split layout:
- left: editorial heading
- right: paragraph
- bottom: stats

Stats should use large numerals with compact labels.

## 11. Event Card Design

Cards:
- radius: 20–28px
- border: 1px
- subtle background
- image/icon area
- metadata row
- CTA

Hover:
- translateY(-6px)
- slightly brighter border
- image scale 1.03–1.06
- shadow/glow
- CTA becomes visually prominent

Do not use excessive motion.

## 12. Schedule Design

Timeline:
- vertical central line on desktop
- left/right alternating content if space allows
- single vertical line on mobile

Each node:
- glowing dot
- time label
- event title
- short description

## 13. Gallery Design

Use a deliberate composition:
- 1 large featured image
- supporting medium images
- smaller tiles

Avoid a uniform 3×3 grid if it makes the page visually generic.

## 14. Registration Design

Use a two-column layout:
- left: persuasive registration copy + benefits
- right: form card

Form card:
- dark surface
- soft border
- rounded corners
- clear labels
- strong focus state

Inputs:
- minimum 48px height
- readable text
- visible focus ring

## 15. Footer Design

Use darkest background layer.

Suggested:
- logo and description
- grouped links
- social icons
- bottom copyright row

## 16. Motion Design

Use:
- fade-up on scroll
- card hover
- image zoom
- button hover
- subtle ambient background movement

Duration:
- micro interactions: 150–220ms
- cards: 250–350ms
- section reveals: 450–700ms

Use easing similar to:
`cubic-bezier(.2,.8,.2,1)`

Respect:
`prefers-reduced-motion`

## 17. Buttons

Primary:
- filled gradient/accent
- 12–14px radius
- bold label

Secondary:
- transparent
- subtle border
- accent hover

Button states:
- default
- hover
- active
- focus
- disabled

## 18. Forms

Input states:
- default
- hover
- focus
- invalid
- valid

Error text should appear directly below the relevant field.

Never rely only on red color; include text/icon for errors.

## 19. Responsive Breakpoints

Recommended:
- mobile: < 640px
- tablet: 640–1024px
- desktop: > 1024px
- wide desktop: > 1440px

## 20. Accessibility

- Use semantic landmarks.
- Use one primary H1.
- Maintain heading hierarchy.
- All form inputs have labels.
- Images have meaningful alt text.
- Interactive cards/buttons are keyboard accessible.
- Focus rings remain visible.
- Avoid text over low-contrast imagery.
- Respect reduced motion.

## 21. Image Treatment

Images should:
- share a consistent color grade
- have rounded corners
- use `object-fit: cover`
- avoid stretched dimensions

A subtle dark overlay can unify imagery with the site.

## 22. Brand Personality

Keywords:
`Bold / Curious / Futuristic / Intelligent / Energetic / Creative`

Avoid:
`Corporate / Generic / Overly playful / Gaming-only / Cluttered`
