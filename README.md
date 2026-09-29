# InnovateX 2026 — Next-Gen Technology Fest Portal

InnovateX 2026 is an immersive, futuristic student innovation and technology festival website. Built with semantic HTML5, modern vanilla CSS, modular JavaScript, and powered by TypeSafe AI System One decision intelligence.

## 🚀 Key Features

- **Futuristic Visual Identity**: Dark luxury UI, custom cyber grid aesthetics, refined typography (`Space Grotesk`, `Inter`, `JetBrains Mono`), and high-end cinematic imagery.
- **Live Real-Time Countdown**: Microsecond-accurate countdown timer to the fest opening with zero/expiration handling.
- **5 Flagship Events**: Interactive cards with hover states, dynamic details modal, and deep metadata (HackForge, RoboRumble, Code Clash, DesignX, Startup Arena).
- **Interactive Chronological Schedule**: Responsive vertical timeline showcasing the festival journey.
- **Dynamic Asymmetric Gallery**: Responsive masonry-inspired image gallery with high-speed interactive lightbox supporting keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`).
- **Validated Client-Side Registration**: Strict vanilla JS validation for Indian 10-digit mobile numbers, institution, study year, and track selection.
- **TypeSafe AI System One Integration**:
  - **Track Matchmaker**: Evaluates student skill profiles using TypeSafe primitives (`Choice`, `Score`, `Noul`) to recommend the optimal festival event track with calibrated probabilities and confidence.
  - **Proposal Screener**: Automated feasibility scoring and track synergy verification.
  - **AI Inspector Drawer**: Live inspection console to visualize TypeSafe System One JSON payloads and probability distributions.

## 🛠️ Tech Stack

- **Core**: Vanilla HTML5, Vanilla CSS3 (Custom Properties & Design Tokens), Vanilla JavaScript (ES6+ Modules)
- **AI Intelligence**: TypeSafe AI System One API Client (`Choice`, `Score`, `Noul`)
- **Typography**: Space Grotesk, Inter, JetBrains Mono
- **Assets**: Hand-crafted SVG vectors and cinematic generative visuals

## 📁 Project Architecture

```text
InnovateX/
├── index.html                  # Main semantic portal entrypoint
├── README.md                   # Project documentation
├── .gitignore                  # Git exclusions
├── assets/
│   ├── images/                 # Event, gallery, hero & background visuals
│   ├── icons/                  # Category and interface SVGs
│   └── logo/                   # High-tech InnovateX vector monogram & wordmark
├── css/
│   ├── variables.css           # Core color, typography, radius, and elevation tokens
│   ├── base.css                # Resets, typography, layout container, utilities
│   ├── components.css          # Buttons, cards, badges, modal, countdown, lightbox, forms
│   ├── sections.css            # Section-specific styles (Hero, About, Events, Schedule, Gallery, Register, Footer)
│   └── responsive.css          # Breakpoints for mobile, tablet, and widescreen
└── js/
    ├── main.js                 # App lifecycle bootstrap and intersection observers
    ├── countdown.js            # Live countdown timer logic and expiry management
    ├── navigation.js           # Smooth navigation, sticky glass navbar, mobile menu
    ├── events.js               # Event dataset, card rendering, and details modal
    ├── gallery.js              # Gallery rendering and keyboard-accessible lightbox
    ├── validation.js           # Client-side form validation, inline errors, feedback
    └── typesafe-engine.js      # TypeSafe AI System One decision primitives and track matchmaker
```

## 💻 Local Setup

Simply clone the repository and serve with any local HTTP server (or open `index.html` directly):

```bash
# Using python HTTP server
python -m http.server 8000

# Or using npx serve
npx serve .
```

Open `http://localhost:8000` in your modern browser.
