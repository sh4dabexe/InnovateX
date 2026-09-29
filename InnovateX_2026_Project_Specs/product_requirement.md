# InnovateX 2026 — Product Requirement Document

## 1. Product Overview

**Product Name:** InnovateX 2026 Fest Portal  
**Product Type:** Responsive single-page college/technology fest website  
**Primary Goal:** Create a polished, futuristic, interactive fest portal that communicates the event identity, showcases events, provides a schedule and gallery, and allows participants to register through a client-side validated form.

The portal must feel like a real technology festival website rather than a basic college assignment. It should be visually distinctive, responsive, accessible, performant, modular, and easy to maintain.

## 2. Problem Statement

Students need one central place to discover InnovateX 2026, understand what the fest offers, view the schedule and event lineup, explore the visual identity of previous/fictitious fest moments, and register for an event.

The website must minimize friction:
1. Visitor lands on the hero.
2. Visitor immediately understands what InnovateX is.
3. Visitor sees the live countdown and key CTA.
4. Visitor explores events.
5. Visitor checks schedule/gallery.
6. Visitor submits registration.
7. Visitor receives clear validation/success feedback.

## 3. Target Users

### Primary
- College students
- Engineering/technology students
- Hackathon participants
- Designers and creators
- Startup/innovation enthusiasts

### Secondary
- Faculty members
- Visitors
- Event organizers
- Potential sponsors/partners

## 4. Core Objectives

- Build a visually impressive landing experience.
- Implement a live JavaScript countdown.
- Present 4–5 interactive event cards.
- Provide an understandable schedule timeline.
- Present a responsive gallery grid.
- Implement a registration form with vanilla JavaScript validation.
- Maintain strong component/module separation.
- Maintain meaningful Git commit history.
- Ensure responsive behavior across desktop, tablet, and mobile.
- Avoid unnecessary frameworks unless explicitly required; use semantic HTML, CSS, and vanilla JS.

## 5. Scope

### In Scope
- Responsive navigation
- Hero section
- Live countdown
- About/overview section
- Statistics
- Events section
- Event hover states
- Event details interaction/modal
- Schedule timeline
- Gallery grid
- Gallery lightbox (recommended)
- Registration form
- Client-side validation
- Success/error states
- Footer
- Smooth scrolling
- Mobile navigation
- Accessibility basics
- SEO metadata
- Modular CSS/JS
- Git-friendly project structure

### Out of Scope
- Real payment processing
- Real authentication
- Real database/backend
- Email sending
- Admin dashboard
- Real event ticket generation
- Real-time server-side registration storage

If persistence is desired, localStorage may be used only as an optional enhancement.

## 6. Information Architecture

1. Header / Navigation
2. Hero
3. About
4. Events
5. Schedule
6. Gallery
7. Registration
8. Footer

Navigation anchors:
- Home
- About
- Events
- Schedule
- Gallery
- Register

## 7. Hero Requirements

The hero must communicate:
- InnovateX 2026
- Technology/innovation festival positioning
- Date
- Venue or generic location
- Short tagline
- Countdown
- Primary CTA: Register Now
- Secondary CTA: Explore Events

Suggested copy:
- Eyebrow: `TECH • INNOVATION • CREATIVITY`
- Heading: `INNOVATEX 2026`
- Tagline: `Innovate. Create. Inspire.`
- Supporting text: `A next-generation student festival where ideas become experiences.`

Countdown:
- Days
- Hours
- Minutes
- Seconds

Countdown requirements:
- Calculate remaining time from a configurable target date.
- Update every second.
- Never hardcode changing values.
- Handle zero/expired state.
- Avoid NaN/negative values.
- Provide accessible text labels.

## 8. About Requirements

Explain:
- What InnovateX is.
- Who can participate.
- What participants can experience.
- Why the event is being conducted.

Recommended stat blocks:
- `20+ Events`
- `5000+ Participants`
- `50+ Colleges`
- `₹2L+ Prize Pool`

Stats should be visually secondary to the main message.

## 9. Event Requirements

Provide 5 event cards:

### 1. HackForge
Category: Hackathon
Description: Build a useful technology solution under time pressure.
Duration: 24 Hours
Prize: ₹50,000

### 2. RoboRumble
Category: Robotics
Description: Engineering teams compete through robot-based challenges.
Prize: ₹40,000

### 3. Code Clash
Category: Competitive Programming
Description: Solve algorithmic problems against the clock.
Prize: ₹25,000

### 4. DesignX
Category: UI/UX
Description: Create a digital experience from a real-world design brief.
Prize: ₹20,000

### 5. Startup Arena
Category: Entrepreneurship
Description: Pitch an original startup concept to a judging panel.
Prize: ₹30,000

Each card should contain:
- Icon/image
- Category
- Event name
- Short description
- Key metadata
- View Details action

Interaction:
- Hover lift
- Image scale
- Gradient/border transition
- CTA reveal or emphasis
- Focus state for keyboard users
- Optional modal with complete details

## 10. Schedule Requirements

Create a chronological timeline.

Example:
- 09:00 AM — Registration & Check-in
- 10:00 AM — Opening Ceremony
- 11:00 AM — HackForge Begins
- 01:00 PM — Innovation Talk
- 02:30 PM — RoboRumble
- 04:30 PM — Code Clash
- 06:00 PM — Startup Arena
- 07:30 PM — Prize Distribution

Each item:
- Time
- Title
- Description
- Optional category badge

Timeline must work vertically on mobile.

## 11. Gallery Requirements

Create a responsive visual grid containing 8–10 images.

Gallery behavior:
- Desktop: asymmetric/masonry-inspired grid
- Tablet: 2–3 columns
- Mobile: 1–2 columns
- Hover overlay with caption
- Optional lightbox on click
- Keyboard accessible close control
- Prevent layout shifts by defining image aspect ratios

## 12. Registration Requirements

Fields:
- Full Name
- Email
- Phone
- College/Institution
- Year of Study
- Event
- Optional message

Validation:
- Required fields must not be empty.
- Name must have reasonable length.
- Email must follow a valid format.
- Phone must contain 10 digits for Indian mobile registration.
- Year must be selected.
- Event must be selected.

Validation must happen with vanilla JavaScript.

UX:
- Inline error messages.
- Invalid fields receive clear visual state.
- Submit button provides interaction feedback.
- Successful submission shows a success message/modal.
- Prevent default form submission.
- Do not reload the page.

## 13. Footer Requirements

Include:
- InnovateX logo/name
- Short description
- Quick links
- Event links
- Social links
- Contact placeholder
- Copyright
- Privacy/terms placeholders if desired

## 14. Functional Requirements

### FR-01 Countdown
The timer must update once per second.

### FR-02 Navigation
Navigation links must scroll to sections smoothly.

### FR-03 Mobile Menu
Mobile navigation must open/close with a button.

### FR-04 Event Interaction
Cards must have hover/focus states and optionally open a details modal.

### FR-05 Gallery
Clicking a gallery image should optionally open a lightbox.

### FR-06 Form Validation
Validation must happen before successful submission.

### FR-07 Success State
A valid form submission must visibly communicate success.

### FR-08 Responsive Layout
No horizontal overflow should occur at supported viewport sizes.

## 15. Non-Functional Requirements

### Performance
- Optimize image dimensions.
- Use modern image formats where possible.
- Lazy-load below-the-fold images.
- Avoid unnecessarily large JavaScript dependencies.

### Accessibility
- Semantic HTML.
- Proper heading hierarchy.
- Labels associated with inputs.
- Keyboard focus states.
- Meaningful alt text.
- Sufficient contrast.
- Reduced-motion consideration.

### Maintainability
Separate:
- Data
- UI logic
- Validation
- Countdown
- Gallery behavior
- Navigation behavior

## 16. Technical Architecture

Recommended structure:

```text
innovatex-2026/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   ├── sections.css
│   └── responsive.css
└── js/
    ├── main.js
    ├── countdown.js
    ├── navigation.js
    ├── events.js
    ├── gallery.js
    └── validation.js
```

## 17. Data Modularity

Event data should preferably be stored in JavaScript objects/arrays rather than repeated manually throughout JS.

Example conceptual structure:

```js
const events = [
    {
        title: "HackForge",
        category: "Hackathon",
        description: "...",
        prize: "₹50,000"
    }
];
```

The UI layer can render these objects into cards.

## 18. Git Requirements

Git history is part of evaluation.

Do NOT create only one final commit.

Suggested progression:
1. `Initial project setup`
2. `Create semantic page structure`
3. `Add navigation and hero`
4. `Implement live countdown`
5. `Build about section`
6. `Add event cards and interactions`
7. `Create schedule timeline`
8. `Add gallery and lightbox`
9. `Build registration form`
10. `Implement form validation`
11. `Add responsive styling`
12. `Polish animations and accessibility`
13. `Fix mobile layout issues`
14. `Update project documentation`

Commits should represent actual development milestones.

## 19. Acceptance Criteria

The project is complete when:
- All required sections exist.
- Countdown works in real time.
- 4–5 event cards are interactive.
- Timeline is responsive.
- Gallery is functional.
- Form validation works.
- Success/error states are visible.
- Mobile layout works.
- No console errors exist.
- CSS/JS are modular.
- Git history contains meaningful incremental commits.
- README explains setup and features.

## 20. Quality Bar

The final site should feel:
- Futuristic
- Premium
- Clean
- Student-oriented
- Technology-focused
- Fast
- Responsive
- Consistent

Avoid:
- Excessive neon
- Excessive glassmorphism
- Random animations
- Huge paragraphs
- Inconsistent spacing
- Generic stock-photo appearance
- Broken mobile layouts
- Monolithic JavaScript
