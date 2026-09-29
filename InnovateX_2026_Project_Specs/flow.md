# InnovateX 2026 — User Flow & Interaction Flow

## 1. Overall User Journey

```text
Landing
  ↓
Hero
  ↓
Understand Fest
  ↓
Explore Events
  ↓
Check Schedule
  ↓
Explore Gallery
  ↓
Register
  ↓
Validation
  ↓
Success
```

## 2. First Visit Flow

```text
USER OPENS WEBSITE
        ↓
NAVBAR + HERO LOAD
        ↓
COUNTDOWN STARTS
        ↓
USER SEES FEST INFORMATION
        ↓
USER CHOOSES:
   ┌────┴────┐
   ↓         ↓
Explore    Register
Events      Now
```

## 3. Navigation Flow

Desktop:

```text
Home → Hero
About → About section
Events → Events section
Schedule → Schedule section
Gallery → Gallery section
Register → Registration section
```

All links should use smooth scrolling.

Mobile:
```text
Tap Menu
   ↓
Menu opens
   ↓
Select section
   ↓
Scroll to section
   ↓
Menu closes
```

## 4. Countdown Flow

```text
PAGE LOAD
   ↓
Read configured target date
   ↓
Calculate current timestamp
   ↓
Calculate remaining milliseconds
   ↓
Convert into:
Days / Hours / Minutes / Seconds
   ↓
Render values
   ↓
Wait 1 second
   ↓
Repeat
```

Expired state:

```text
remaining <= 0
      ↓
STOP interval
      ↓
Show:
"INNOVATEX 2026 IS LIVE"
```

Do not show negative values.

## 5. Event Exploration Flow

```text
USER SCROLLS TO EVENTS
        ↓
EVENT CARDS APPEAR
        ↓
USER HOVERS
        ↓
Card lifts + image zoom + CTA emphasis
```

Keyboard:

```text
Tab
 ↓
Focus card/action
 ↓
Visible focus state
 ↓
Enter/Space
 ↓
Open event details
```

## 6. Event Modal Flow

```text
Click View Details
        ↓
Modal backdrop appears
        ↓
Event details loaded
        ↓
Body background interaction disabled
        ↓
User can:
   ┌──────────────┬───────────────┐
   ↓              ↓               ↓
Close X      Press Escape      Register
   │              │               │
   └──────────────┴───────→ Registration
```

Modal requirements:
- trap focus if implemented
- close on X
- close on Escape
- optionally close when backdrop is clicked
- restore focus to triggering button

## 7. Gallery Flow

```text
USER REACHES GALLERY
        ↓
Images lazy-load
        ↓
Hover image
        ↓
Caption overlay
        ↓
Click image
        ↓
Lightbox opens
```

Lightbox:

```text
┌─────────────────────────────┐
│                             │
│        LARGE IMAGE          │
│                             │
│      [←]       [→]          │
│                             │
│                       [X]   │
└─────────────────────────────┘
```

Keyboard:
- Escape = close
- Left Arrow = previous
- Right Arrow = next

## 8. Registration Flow

```text
USER CLICKS REGISTER
        ↓
Scroll to form
        ↓
User fills fields
        ↓
Submit
        ↓
Prevent default submission
        ↓
Validate fields
        ↓
   ┌────┴────┐
   ↓         ↓
Invalid     Valid
   ↓         ↓
Show        Show
errors      success
   ↓         ↓
User fixes  Registration
fields      confirmation
```

## 9. Validation Flow

### Name
```text
Empty?
 ├─ Yes → "Name is required"
 └─ No → Continue
```

### Email
```text
Valid format?
 ├─ No → "Enter a valid email"
 └─ Yes → Continue
```

### Phone
```text
Exactly 10 digits?
 ├─ No → "Enter a valid 10-digit phone number"
 └─ Yes → Continue
```

### College
```text
Empty?
 ├─ Yes → Error
 └─ No → Continue
```

### Year
```text
Selected?
 ├─ No → Error
 └─ Yes → Continue
```

### Event
```text
Selected?
 ├─ No → Error
 └─ Yes → Continue
```

If every field passes:
```text
FORM VALID
    ↓
Show success state
```

## 10. Success Flow

```text
VALID SUBMISSION
      ↓
Clear errors
      ↓
Show success feedback
      ↓
"You're registered for InnovateX 2026!"
      ↓
Optional:
Show selected event
      ↓
Reset form after user acknowledgement
```

Since there is no backend in scope, clearly treat this as a frontend/demo registration flow.

## 11. Error Handling

Unexpected JavaScript errors must not leave the UI frozen.

Examples:
- Countdown target unavailable
- Missing event data
- Image failed to load
- Invalid form interaction

Use graceful fallbacks.

## 12. Scroll Reveal Flow

Recommended:

```text
Element below viewport
        ↓
IntersectionObserver
        ↓
Element enters viewport
        ↓
Add `.is-visible`
        ↓
CSS transition
```

Avoid attaching dozens of individual scroll listeners.

## 13. Accessibility Flow

Keyboard user:

```text
Tab
 ↓
Navigation
 ↓
CTA
 ↓
Event actions
 ↓
Gallery controls
 ↓
Form inputs
 ↓
Footer links
```

Screen-reader user should encounter:
1. Page title
2. Main navigation
3. Hero heading
4. Main content sections
5. Form labels
6. Footer

## 14. Mobile Flow

```text
OPEN
 ↓
Hero optimized for portrait
 ↓
Menu accessible
 ↓
Single-column content
 ↓
Events stack
 ↓
Timeline becomes vertical
 ↓
Gallery becomes compact grid
 ↓
Registration becomes single column
 ↓
Footer stacks
```

## 15. Technical Initialization Flow

Recommended `main.js`:

```text
DOMContentLoaded
      ↓
initializeNavigation()
      ↓
initializeCountdown()
      ↓
initializeEvents()
      ↓
initializeGallery()
      ↓
initializeValidation()
      ↓
initializeRevealAnimations()
```

Each initializer should live in its own module where practical.

## 16. Suggested JS Module Responsibilities

### `main.js`
- application initialization
- module startup

### `countdown.js`
- target date
- timer calculation
- rendering
- expiry state

### `navigation.js`
- mobile menu
- smooth navigation
- active state

### `events.js`
- event dataset
- card rendering
- modal behavior

### `gallery.js`
- gallery data
- lightbox
- image navigation

### `validation.js`
- field rules
- error messages
- submit handling

## 17. State Flow

The project has several UI states:

```text
Navigation:
closed → open

Event modal:
closed → open

Gallery:
grid → lightbox

Form:
empty → editing → invalid/valid → success

Countdown:
running → expired
```

Keep state handling simple and explicit.

## 18. Final End-to-End Flow

```text
                    ┌───────────────┐
                    │ Open Website  │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Hero + Timer  │
                    └───────┬───────┘
                            ↓
                 ┌──────────┴──────────┐
                 ↓                     ↓
             Explore                 Register
                 ↓                     ↓
              Events                Form
                 ↓                     ↓
              Details              Validate
                 ↓                ┌────┴────┐
              Schedule            ↓         ↓
                 ↓              Error     Valid
              Gallery             ↓         ↓
                 ↓             Fix form   Success
                 └───────────────→──────────┘
```

## 19. Completion Definition

The flow is considered complete when a first-time visitor can:
1. Understand InnovateX within seconds.
2. See the countdown.
3. Explore all events.
4. Open event details.
5. Understand the schedule.
6. Explore gallery imagery.
7. Navigate to registration.
8. Receive useful validation feedback.
9. See a clear success state after valid submission.

The experience should feel continuous, not like disconnected assignment sections.
