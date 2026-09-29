# InnovateX 2026 — Next-Gen Student Technology Festival Portal

[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](https://github.com)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)](https://github.com)
[![AI Engine](https://img.shields.io/badge/AI%20Intelligence-TypeSafe%20System%20One%20(Jev)-purple)](https://typesafe.ai)

InnovateX 2026 is an immersive, futuristic student technology festival portal designed to bridge the gap between engineering curiosity and industry-grade product creation. Built adhering strictly to the InnovateX 2026 Design System, Flow Specifications, Layout Architecture, and powered by TypeSafe AI System One decision intelligence.

---

## 🌟 Live Features & Specifications

### 1. Hero Experience & Real-Time Countdown
- **Dynamic Atmosphere**: Dark futuristic visual language with subtle glowing gradients, abstract floating geometric nexus, and custom SVG circuit traces.
- **Accurate Live Countdown**: Ticking countdown calculating days, hours, minutes, and seconds to **October 24, 2026, 09:00:00 IST**.
- **Edge-Case Resilience**: Automatic expiration handling preventing negative values and displaying an active festival announcement state when live.

### 2. About & Festival Metrics
- **Mission Editorial**: Clear exposition of fest objectives, target demographics (hackers, mechatronics engineers, competitive coders, designers, student founders), and experiential problem spaces.
- **Interactive Metric Blocks**:
  - `20+ Flagship Events`
  - `5000+ Participants`
  - `50+ Colleges Represented`
  - `₹2,00,000+ Prize Pool`

### 3. Five Flagship Event Tracks
Interactive cards with hover elevation, image zoom, metadata badges, and deep details modal:
1. **HackForge (Hackathon)** — 24-hour sprint to build functional prototypes with hardware and cloud APIs (₹50,000 Prize).
2. **RoboRumble (Robotics)** — Steel-reinforced arena combat with 15kg/30kg telemetric combat machines (₹40,000 Prize).
3. **Code Clash (Competitive Programming)** — Timed algorithmic duels featuring dynamic programming and graph invariants (₹25,000 Prize).
4. **DesignX (UI/UX Design)** — Rapid prototyping, design system synthesis, and usability heuristics (₹20,000 Prize).
5. **Startup Arena (Entrepreneurship)** — Live venture pitch battle before seasoned angel syndicates and VCs (₹30,000 Prize).

### 4. Chronological Festival Timeline
- Alternating vertical timeline on desktop and single-axis vertical spine on mobile.
- **Interactive Day Filter Tabs**: Seamlessly toggle between `All Sessions`, `Day 1 (Oct 24)`, and `Day 2 (Oct 25)`.
- Keynote addresses, qualifier heats, algorithmic duels, prototype walkthroughs, and grand trophy ceremonies.

### 5. Asymmetric Visual Gallery & Lightbox
- High-performance, responsive masonry-inspired grid containing 9 curated high-resolution editorial photos.
- **Keyboard-Controlled Lightbox**:
  - Fullscreen view with rich captions and index counters.
  - Keyboard navigation: `Escape` to close, `ArrowLeft` for previous, `ArrowRight` for next.
  - Click-outside backdrop dismissal and focus restoration.

### 6. Client-Side Validated Registration Form
- Built strictly with vanilla JavaScript and inline feedback:
  - **Full Name**: Required, length & character validation.
  - **Email**: RFC-compliant email regex.
  - **Phone**: Indian mobile validation (10 digits starting with 6, 7, 8, or 9 with `+91` prefix).
  - **College/Institution**: Required string length validation.
  - **Year of Study**: Required dropdown selection.
  - **Event Track**: Required track selection (auto-populated by event cards or AI matchmaker).
- **Confirmation Modal**: Generates unique Delegate Registration IDs (`IX26-XXXXXX`) with summary breakdown upon successful client-side validation.

---

## ⚡ TypeSafe AI System One Integration

InnovateX 2026 integrates **TypeSafe AI's System One (Jev)** models as programming primitives:

### Primitives Implemented:
1. **`Choice` (`track_recommendation`)**:
   - Analyzes participant skills, tools, and background descriptions.
   - Evaluates probability distributions across the 5 tracks (`hackforge`, `roborumble`, `code_clash`, `designx`, `startup_arena`).
   - Reports calibrated choice confidence percentages.
2. **`Score` (`technical_synergy` & `innovation_score`)**:
   - Evaluates tournament readiness on a defined 4-level scale (`Novice Explorer` → `Podium Contender`).
   - Returns continuous scores and level probability distributions.
3. **`Noul` (`collaboration_readiness` & `category_fit`)**:
   - Returns calibrated true/false probabilities ($P(\text{yes}) \in [0.0, 1.0]$) for team synergy and technical proposal depth.

### Interactive Features:
- **1-Click Track Auto-Fill**: Automatically applies recommended tracks directly into the registration form.
- **Proposal Screener**: Real-time pre-verification of participant project descriptions.
- **TypeSafe Inspector Drawer**: Slide-over developer drawer displaying live JSON state requests, System One questions, and model judgment answers.

---

## 📁 Repository Structure

```text
InnovateX/
├── index.html                  # Semantic single-page portal
├── README.md                   # Comprehensive project documentation
├── .gitignore                  # Git hygiene rules
├── assets/
│   ├── images/                 # 13 high-resolution festival and event visuals
│   │   ├── hero-bg.jpg
│   │   ├── about-innovation.jpg
│   │   ├── event-hackforge.jpg
│   │   ├── event-roborumble.jpg
│   │   ├── event-code-clash.jpg
│   │   ├── event-designx.jpg
│   │   ├── event-startup-arena.jpg
│   │   ├── gallery-opening.jpg
│   │   ├── gallery-robotics.jpg
│   │   ├── gallery-workshop.jpg
│   │   ├── gallery-prize.jpg
│   │   ├── gallery-pitch.jpg
│   │   ├── decor-orb.jpg
│   │   └── decor-circuit.svg
│   ├── icons/                  # Vector category assets
│   └── logo/
│       └── innovatex-logo.svg  # High-tech IX monogram & wordmark
├── css/
│   ├── variables.css           # 8px spacing system, color tokens, z-index hierarchy
│   ├── base.css                # Resets, typography, layout container, utilities, skip-link
│   ├── components.css          # Buttons, badges, countdown card, modal, lightbox
│   ├── sections.css            # Section layouts (Navbar, Hero, About, Events, AI, Schedule, Gallery, Register, Footer)
│   └── responsive.css          # Breakpoints (< 380px, < 640px, < 1024px, > 1440px)
└── js/
    ├── main.js                 # App initialization, IntersectionObserver scroll reveal, counter observer
    ├── countdown.js            # Ticking countdown timer logic and expiry state handling
    ├── navigation.js           # Sticky glass navbar, active indicator, mobile drawer
    ├── events.js               # Event data model, dynamic card rendering, details modal
    ├── gallery.js              # Gallery grid rendering, keyboard lightbox
    ├── validation.js           # Vanilla JS validation with inline error states
    └── typesafe-engine.js      # TypeSafe System One client, primitives, matchmaker & inspector
```

---

## 📜 Meaningful Git Commit History

The repository was built incrementally across 14 milestone commits:

1. `Initial project setup` — Directory scaffolding, .gitignore, SVG branding, base tokens.
2. `Create semantic page structure` — Accessible HTML5 document layout with ARIA landmarks.
3. `Add navigation and hero` — Sticky glass navbar, mobile menu drawer, and cyber hero section.
4. `Implement live countdown` — Real-time timer with zero/expiry state handling.
5. `Build about section` — Editorial mission statement, visual spotlight, and animated statistics.
6. `Add event cards and interactions` — Dynamic rendering of 5 events and accessible modal.
7. `Create schedule timeline` — Chronological agenda with Day 1 & Day 2 filter tabs.
8. `Add gallery and lightbox` — Asymmetric gallery grid and keyboard-navigated lightbox.
9. `Build registration form` — Participant registration inputs, perks list, and phone wrapper.
10. `Implement form validation` — Strict vanilla JS validation, inline errors, and success state.
11. `Add responsive styling` — Mobile-first breakpoints and widescreen accommodations.
12. `Polish animations and accessibility` — Skip-to-content links, micro-animations, and focus rings.
13. `Fix mobile layout issues` — 100dvh mobile menu, flexible input wrappers, and horizontal overflow checks.
14. `Update project documentation` — Complete technical documentation and architecture reference.

---

## 🚀 Running Locally

Serve the directory with any standard HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

Open `http://localhost:8000` in any modern web browser.
