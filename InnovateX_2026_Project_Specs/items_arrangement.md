# InnovateX 2026 — Items Arrangement & Layout Specification

## 1. Global Page Order

```text
[ Sticky Navbar ]
        ↓
[ Hero ]
        ↓
[ About ]
        ↓
[ Events ]
        ↓
[ Schedule ]
        ↓
[ Gallery ]
        ↓
[ Registration ]
        ↓
[ Footer ]
```

## 2. Header Arrangement

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│ INNOVATEX     About  Events  Schedule  Gallery     Register │
└──────────────────────────────────────────────────────────────┘
```

Left:
- logo/wordmark

Center/right:
- navigation

Far right:
- primary CTA

Mobile:

```text
┌───────────────────────────────┐
│ IX / INNOVATEX            ☰  │
└───────────────────────────────┘
```

When menu opens:

```text
Home
About
Events
Schedule
Gallery
Register
```

## 3. Hero Arrangement

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [EYEBROW]                           [ABSTRACT VISUAL]       │
│  INNOVATEX 2026                                             │
│  Innovate. Create. Inspire.                                 │
│  Supporting description                                     │
│                                                             │
│  [Register Now] [Explore Events]                            │
│                                                             │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │ DAYS │ │ HRS  │ │ MIN  │ │ SEC  │                       │
│  └──────┘ └──────┘ └──────┘ └──────┘                       │
└─────────────────────────────────────────────────────────────┘
```

Mobile:
1. Eyebrow
2. H1
3. Description
4. CTA row/stack
5. Visual
6. Countdown

## 4. About Arrangement

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│ ABOUT INNOVATEX                                             │
│                                                             │
│ [Large heading]              [Description paragraph]        │
│                                                             │
│ 20+ EVENTS    5000+ PARTICIPANTS   50+ COLLEGES   ₹2L+     │
└─────────────────────────────────────────────────────────────┘
```

Mobile:
- heading
- description
- 2-column stats
- remaining stats below

## 5. Events Arrangement

Section header:
```text
[Eyebrow]
EVENTS
Five challenges. One festival.
```

Desktop:
```text
┌──────────────┬──────────────┬──────────────┐
│ HackForge    │ RoboRumble   │ Code Clash   │
├──────────────┼──────────────┼──────────────┤
│ DesignX      │ Startup      │              │
│              │ Arena        │              │
└──────────────┴──────────────┴──────────────┘
```

Alternative:
- 3 cards first row
- 2 centered cards second row

Mobile:
- one card per row

Card internal arrangement:

```text
┌─────────────────────────┐
│       EVENT IMAGE       │
│                         │
├─────────────────────────┤
│ CATEGORY                │
│ Event Title             │
│ Description             │
│                         │
│ Prize       Duration    │
│                         │
│ View Details →          │
└─────────────────────────┘
```

## 6. Event Modal Arrangement

When selected:

```text
┌────────────────────────────────────────────┐
│ Event Title                          [X]  │
│ Category                                   │
│                                            │
│ Large event image                          │
│                                            │
│ Full description                           │
│                                            │
│ Duration | Team Size | Prize               │
│                                            │
│ [Register for this Event]                  │
└────────────────────────────────────────────┘
```

## 7. Schedule Arrangement

Desktop:

```text
09:00 ── ● ── Registration
          │
10:00 ── ● ── Opening Ceremony
          │
11:00 ── ● ── HackForge
          │
13:00 ── ● ── Innovation Talk
          │
14:30 ── ● ── RoboRumble
          │
16:30 ── ● ── Code Clash
          │
18:00 ── ● ── Startup Arena
          │
19:30 ── ● ── Prize Distribution
```

On desktop, event descriptions may alternate left/right.

On mobile:
```text
09:00
● Registration
│
10:00
● Opening Ceremony
│
11:00
● HackForge
```

## 8. Gallery Arrangement

Recommended composition:

```text
┌────────────────┬────────┬────────┐
│                │ Image2 │ Image3 │
│   FEATURED     ├────────┼────────┤
│    IMAGE       │ Image4 │ Image5 │
│                ├────────┴────────┤
│                │     Image6      │
└────────────────┴─────────────────┘
```

Second row:
```text
┌────────┬────────┬────────┐
│ Image7 │ Image8 │ Image9 │
└────────┴────────┴────────┘
```

Mobile:
- 1 column for featured image
- 2-column small tiles where practical

## 9. Registration Arrangement

Desktop:

```text
┌──────────────────────┬─────────────────────────┐
│ WHY JOIN             │ REGISTER                │
│                      │                         │
│ Build                 │ Full Name              │
│ Compete               │ Email                  │
│ Network               │ Phone                  │
│ Create                │ College                │
│                      │ Year                    │
│ Event information     │ Event                   │
│                      │ Message                 │
│                      │ [Submit Registration]   │
└──────────────────────┴─────────────────────────┘
```

Mobile:
- persuasive content first
- form second

## 10. Footer Arrangement

```text
┌───────────────────────────────────────────────────────────┐
│ INNOVATEX                QUICK LINKS       FOLLOW         │
│ Innovate. Create.        About             Instagram      │
│ Inspire.                 Events            LinkedIn       │
│                         Schedule          GitHub         │
│                         Gallery                           │
│                                                           │
│ ───────────────────────────────────────────────────────── │
│ © 2026 InnovateX                         Made for creators│
└───────────────────────────────────────────────────────────┘
```

## 11. Z-Index Layering

Recommended:
```text
Base background       0
Content               1
Decorative effects    2
Sticky navbar         50
Mobile menu           60
Modal backdrop        90
Modal content         100
```

## 12. Spacing Relationships

- Header to hero content: generous
- Section heading to section content: 32–48px
- Card-to-card gap: 20–28px
- Form field gap: 16–20px
- Section-to-section: 96–140px desktop
- Section-to-section: 64–88px mobile

## 13. Mobile Rules

At small widths:
- Never allow horizontal scrolling.
- Convert multi-column layouts to one column.
- Reduce hero heading size.
- Stack CTAs when necessary.
- Make buttons at least ~44px tall.
- Keep modal within viewport.
- Timeline must remain readable.
