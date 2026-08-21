# ZAPTECH — FINAL HERO & RESPONSIVE TEAM REVISION

## Purpose

Revise the current ZapTech website based on the latest visual feedback.

This revision focuses on:

1. Fixing the Team section so it is fully responsive and nothing is clipped.
2. Removing unnecessary status/HUD labels across the website.
3. Completely simplifying the Hero so it feels like a clean-tech company profile, not an AI monitoring dashboard.
4. Adding a subtle looping Hero text animation and continuous visual motion.
5. Keeping the existing ZapTech brand palette strictly consistent.

Do not rebuild unrelated sections unless a small integration change is required.

---

# 01 — GLOBAL CREATIVE DIRECTION

The website currently feels too much like a technical AI dashboard.

Examples of elements that should no longer dominate the corporate landing page:

- `SYSTEM READY`
- `LIVE METERS`
- `VOLTAGE`
- `CURRENT`
- `Telemetry Rate`
- `AI Queue Probability Index`
- `Scroll Pipeline Active`
- `Current Featured Platform`
- `SCROLL TO EXPLORE EXECUTIVE TEAM STORY`
- decorative live/status indicators

These elements make the website feel:

- overly technical
- dashboard-like
- visually noisy
- overly AI-focused
- less human
- less like a premium startup/company profile

The new direction should feel:

> CLEAN + EDITORIAL + HUMAN + ENERGY-FOCUSED + TECHNOLOGY-DRIVEN + CINEMATIC

Technology should be communicated through:

- motion
- photography
- typography
- abstract vectors
- energy-flow animation
- product visuals
- storytelling

rather than fake telemetry dashboards.

---

# 02 — STRICT BRAND PALETTE

Use ONLY the approved ZapTech palette:

```text
Background:
#F0F7FB

Blue:
#076FB8

Yellow:
#FEC958

Pink:
#EE7797

White:
#FFFFFF
```

Do NOT introduce unrelated colors.

Do NOT use:

```text
purple
green
cyan
neon colors
random navy
random gray
random orange
```

If a muted treatment is needed, derive it from approved colors using opacity.

Examples:

```css
rgba(7, 111, 184, 0.08)
rgba(7, 111, 184, 0.16)
rgba(254, 201, 88, 0.14)
rgba(238, 119, 151, 0.14)
```

Do not use a new brand color just to create contrast.

---

# 03 — REMOVE DECORATIVE STATUS / HUD LABELS GLOBALLY

Search the website for decorative status labels.

Remove labels such as:

```text
Current Featured Platform
SCROLL TO EXPLORE EXECUTIVE TEAM STORY
SYSTEM READY
LIVE METERS
Scroll Pipeline Active
AI Queue Probability Index
POSITION
CURRENT STATE
ACTIVE NODE
ENGINE READY
LIVE FEED
```

Also remove similar labels that exist primarily to make the website look like a control panel.

Important:

This does NOT mean removing meaningful navigation or actual product information.

Keep:

- navbar
- actual navigation state
- section numbering such as `07 — TEAM`
- member names
- member roles
- actual CTA buttons
- meaningful product information
- real product/detail information where appropriate

The rule is:

> If the user does not need the label, do not add it just for decoration.

---

# 04 — NO MORE FAKE DASHBOARD LANGUAGE

The corporate landing page should not pretend to be a live operating system.

Avoid visual language such as:

```text
SYSTEM READY
LIVE
LOW RISK
LIVE METERS
CURRENT
QUEUE
PIPELINE ACTIVE
TELEMETRY
PROBABILITY INDEX
```

unless the information is genuinely necessary in a product/detail context.

The homepage should introduce ZapTech as a company.

It should not look like a monitoring console.

---

# 05 — HERO: COMPLETE REDESIGN

The current Hero is too technical.

The current Hero contains content similar to:

```text
Indonesia-Focused Clean-Tech R&D

Accelerating Clean Mobility Through Intelligent Energy Innovation.

ZapTech pioneers distributed charging infrastructure by combining
custom IoT hardware, edge microcontrollers, and predictive
artificial intelligence.

500ms
Telemetry Rate

15 Mins
Spot Lock Hold

Zero CapEx
Host Model

ZAPTECH ENGINE
SYSTEM READY

LIVE METERS

VOLTAGE
400.2 V

CURRENT
125.4 A

Scroll Pipeline Active

EV → Charger → Telemetry

AI Queue Probability Index: 8% (LOW RISK)

Encrypted TLS MQTT telemetry pipeline linking EV chargers to ZapTech AI.
```

Do NOT simply hide individual labels.

Rebuild the Hero visual concept.

---

# 06 — NEW HERO CONCEPT

The Hero should communicate:

> ZapTech is building intelligent clean-energy infrastructure for Indonesia.

Do this through:

- changing editorial headline
- clean supporting copy
- simple CTAs
- continuously looping energy-inspired visual motion
- supporting photography where appropriate

The Hero should feel like:

```text
brand film
+
clean technology
+
energy movement
+
editorial typography
```

NOT:

```text
AI monitoring dashboard
```

---

# 07 — HERO TEXT LOOP

The main Hero headline should automatically change every few seconds.

Recommended sequence:

### Scene 01

```text
Indonesia's energy
is changing.
```

### Scene 02

```text
Mobility is changing.
```

### Scene 03

```text
Infrastructure should
change with it.
```

### Scene 04

```text
We build the technology
to move it forward.
```

Then loop back to Scene 01.

Use these as the default copy unless the existing brand copy has an approved equivalent that communicates the same idea.

Do not turn the text into a typewriter effect.

The entire phrase should transition as a visual statement.

---

# 08 — HERO TEXT TIMING

Recommended timing:

```text
Display:
2800ms

Exit:
500–650ms

Enter:
500–700ms
```

The text must not change every 500ms.

500ms may be used for the transition itself, but not as the complete display interval.

The user needs enough time to read the statement.

Suggested overall rhythm:

```text
show phrase
↓
hold ~2800ms
↓
fade/slide out
↓
new phrase enters
↓
hold ~2800ms
↓
repeat
```

---

# 09 — HERO TEXT TRANSITION

Use a smooth cinematic transition.

Recommended:

```text
Current:
opacity: 1
translateY: 0

↓

Current:
opacity: 0
translateY: -18px

↓

Next:
opacity: 0
translateY: 18px

↓

Next:
opacity: 1
translateY: 0
```

A very subtle blur can be used if it improves the transition.

Do NOT use:

- glitch
- hacker effect
- text scrambling
- flashing
- rapid character replacement
- terminal/typewriter animation

The Hero should feel premium and calm.

---

# 10 — HERO LOOP MUST BE SEAMLESS

After:

```text
We build the technology
to move it forward.
```

return smoothly to:

```text
Indonesia's energy
is changing.
```

Do not visibly reset the entire Hero.

Only the headline state should transition.

The background/visual motion should continue uninterrupted.

---

# 11 — HERO VISUAL: LOOPING ENERGY MOTION

Replace the technical dashboard with a continuous abstract visual.

Recommended visual language:

```text
soft energy flow
        ↓
distributed nodes
        ↓
mobility-inspired movement
        ↓
subtle vector network
        ↓
continuous loop
```

Use SVG, CSS, Framer Motion, or a combination.

Possible abstract composition:

```text
          ○
         /
────────●────────────
       /        ○
      /
   ●────────────○
```

The lines should move slowly.

Nodes may pulse subtly.

The motion should feel like:

> energy moving through infrastructure.

It should not look like a literal engineering diagram.

---

# 12 — HERO VISUAL MUST NOT LOOK LIKE AI

Do NOT use:

```text
AI brain
neural network
robot face
code streams
data matrix
fake telemetry
probability graph
AI dashboard
machine-learning chart
```

AI is part of ZapTech's technology stack, but it is not the entire visual identity.

The brand should communicate:

```text
energy
mobility
infrastructure
technology
people
impact
```

AI should support that story rather than dominate it.

---

# 13 — HERO BACKGROUND

Keep the Hero light.

Primary background:

```text
#F0F7FB
```

Use subtle brand-color motion:

```text
#076FB8
#FEC958
#EE7797
```

The background should never become a dark dashboard.

---

# 14 — HERO TEXT COLOR

Do not create a harsh high-contrast composition where the Hero looks like a poster placed on top of the page.

Preferred:

```text
Primary text:
#076FB8

Secondary text:
rgba(7, 111, 184, 0.72)

Background:
#F0F7FB
```

Selected words can use an animated gradient.

---

# 15 — HERO GRADIENT HIGHLIGHT

Use the brand gradient only on selected words.

Recommended:

```text
#076FB8
→
#FEC958
→
#EE7797
→
#076FB8
```

Do not gradient every word.

Example:

```text
Indonesia's energy
is changing.
```

Highlight only:

```text
energy
```

or another strategically selected word.

The gradient should move slowly.

Example concept:

```css
background-size: 200% auto;
animation: gradientShift 5s ease-in-out infinite;
```

Keep the effect subtle.

It should look like light/energy passing through the typography, not neon.

---

# 16 — HERO SUPPORTING COPY

Remove the long AI-heavy paragraph.

Current type of copy to remove:

```text
ZapTech pioneers distributed charging infrastructure by combining
custom IoT hardware, edge microcontrollers, and predictive
artificial intelligence.
```

Replace with concise company-level messaging.

Recommended:

```text
ZapTech builds intelligent clean-energy infrastructure
for a more connected and sustainable mobility ecosystem.
```

Keep it short.

The Hero should be readable in a few seconds.

---

# 17 — HERO CTA

Keep the Hero CTA simple.

Recommended:

```text
Explore ZapIN
```

and:

```text
How We Build
```

or equivalent approved CTA labels already used by the website.

Do NOT add technical CTA labels such as:

```text
Telemetry Pipeline
AI Engine
System Dashboard
ZapIN Architecture
```

The Hero should introduce the company.

Detailed technical architecture belongs in the relevant product/detail section.

---

# 18 — HERO SUPPORTING PHOTOGRAPHY

Add a supporting photo if it improves the composition.

Possible subjects:

- EV charging
- clean mobility
- energy infrastructure
- engineering
- modern Indonesian mobility
- charging station
- technology being used by people

Use dummy photography for now if final assets are not available.

The photo should feel:

```text
human
clean
bright
modern
credible
```

---

# 19 — HERO PHOTO TREATMENT

Do NOT use an extremely dark/high-contrast photo against the light background.

Avoid:

```text
black photo
+
bright white block
```

Instead:

```text
soft crop
+
organic/rounded clipping
+
subtle brand-color overlay
+
light opacity
```

The image should feel integrated into the Hero.

It should not look like a stock photo pasted into a card.

---

# 20 — HERO OPTIONAL COMPOSITION

A preferred desktop composition:

```text
┌────────────────────────────────────────────────────┐
│                                                    │
│  ZapTech                                           │
│                                                    │
│  Indonesia's energy        [energy visual /       │
│  is changing.              photography]           │
│                                                    │
│  Supporting copy                                   │
│                                                    │
│  [ Explore ZapIN ]  [ How We Build ]              │
│                                                    │
└────────────────────────────────────────────────────┘
```

Do not force everything into the exact center.

Use an editorial left/right balance.

---

# 21 — HERO RESPONSIVENESS

Desktop:

```text
text left
visual right
```

Mobile:

```text
text
↓
visual
↓
CTA
```

or another composition that remains readable.

Do NOT keep a desktop two-column layout if it causes:

- text clipping
- oversized visual
- horizontal overflow
- tiny CTA
- overlapping elements

---

# 22 — HERO NO FAKE METRICS

Remove decorative Hero metrics such as:

```text
500ms Telemetry Rate
15 Mins Spot Lock Hold
Zero CapEx Host Model
400.2 V
125.4 A
8% LOW RISK
```

Unless these are actual verified metrics that are intentionally required by the product/business narrative.

The corporate Hero should not use fake live metrics.

---

# 23 — HERO NO FAKE SYSTEM STATUS

Remove:

```text
ZAPTECH ENGINE
SYSTEM READY
LIVE METERS
Scroll Pipeline Active
Encrypted TLS MQTT telemetry pipeline
```

from the corporate Hero.

These are dashboard concepts and should not be used as decorative filler.

---

# 24 — TEAM: RESPONSIVENESS FIX

The current Team horizontal storytelling concept is directionally correct, but the implementation is clipping content.

Observed issues:

- portrait extends outside the viewport
- members are partially cut off
- text can exceed the intended safe area
- lower overlays consume too much space
- horizontal track is not properly constrained
- desktop dimensions do not adapt correctly
- the active member is not always fully visible

Fix the actual layout rather than simply hiding overflow.

---

# 25 — TEAM: NO ACCIDENTAL HORIZONTAL PAGE SCROLL

The Team section must not create accidental page-level horizontal scrolling.

Use appropriate clipping at the section/container level.

For example:

```css
overflow-x: clip;
```

or an equivalent approach.

But do NOT use overflow clipping as a lazy fix.

The horizontal track itself must be intentionally positioned and measured.

---

# 26 — TEAM DESKTOP STRUCTURE

Recommended structure:

```text
Team Section
  └── Sticky Viewport
       ├── Editorial Intro
       ├── Active Member Visual
       ├── Member Information
       └── Horizontal Member Track
```

The active member must remain fully inside the viewport.

Do not position the active portrait partially outside the screen.

---

# 27 — TEAM MEMBER SIZING

Recommended desktop maximum:

```text
portrait width:
28–38vw

portrait height:
55–68vh
```

But these are maximum targets, not fixed dimensions.

Always account for:

```text
navbar
viewport height
safe spacing
member text
```

Use responsive constraints.

Never allow the portrait to exceed the usable viewport.

---

# 28 — TEAM TEXT SAFE AREA

Member information needs a dedicated responsive area.

Do not allow it to collide with:

- portrait
- viewport edge
- navbar
- bottom edge
- next member
- decorative elements

Use a responsive grid/flex composition.

Example:

```text
┌──────────────────────────────────────────────┐
│                                              │
│ INTRO                    PORTRAIT             │
│                                              │
│ MEMBER INFO                                  │
│                                              │
└──────────────────────────────────────────────┘
```

---

# 29 — TEAM REMOVE BOTTOM STATUS MESSAGE

Completely remove:

```text
SCROLL TO EXPLORE EXECUTIVE TEAM STORY
```

Do not replace it with another sentence.

The interaction should be understandable through the composition itself.

Do not tell the user:

```text
SCROLL TO...
SWIPE TO...
MOVE TO...
EXPLORE...
```

unless an interaction instruction is genuinely necessary.

---

# 30 — TEAM PROGRESS

Do not use a large dashboard-style progress bar.

Avoid:

```text
MEMBER 01 / 04
━━━━━━━━━━━━━━━━━━━━
```

inside a large status component.

If progress is useful, use a very small editorial indicator:

```text
01 / 04
```

near the member information.

Alternatively, remove progress completely if the visual composition is cleaner.

---

# 31 — TEAM ACTIVE MEMBER

The active member should be obvious through visual hierarchy.

Use:

```text
active:
scale 1
opacity 1

inactive:
scale 0.88–0.94
opacity 0.30–0.55
```

Also use:

- position
- image prominence
- typography
- smooth transition

Do not use dashboard indicators to communicate the active member.

---

# 32 — TEAM HORIZONTAL SCROLL

The desktop interaction remains:

```text
VERTICAL SCROLL
       ↓
HORIZONTAL TEAM MOVEMENT
       ↓
01 → 02 → 03 → 04
```

Do NOT use timer-based autoplay.

The horizontal movement must be driven by the user's scroll.

The user should feel that scrolling controls a cinematic timeline.

---

# 33 — TEAM MOBILE FALLBACK

Do NOT force the desktop horizontal composition onto mobile.

At approximately:

```text
< 768px
```

prefer either:

### Option A

Vertical member storytelling:

```text
TEAM INTRO
↓
PHOTO
↓
NAME
↓
ROLE
↓
DESCRIPTION
↓
NEXT MEMBER
```

### Option B

Controlled horizontal touch interaction.

Choose whichever produces the cleanest and most usable result.

The priority is:

> no clipping + no page overflow + readable content.

---

# 34 — TEAM TABLET

At approximately:

```text
768px–1024px
```

reduce:

- portrait size
- gaps
- typography scale
- horizontal movement distance

Do not assume desktop dimensions work on tablet.

Test:

```text
768 × 1024
834 × 1194
1024 × 768
```

---

# 35 — GLOBAL RESPONSIVE QA

Test at minimum:

```text
320px
375px
390px
430px
768px
820px
1024px
1280px
1440px
1920px
```

Check:

- no clipping
- no accidental horizontal page scroll
- no overlapping text
- no cropped faces
- no CTA overflow
- no navbar collision
- no sticky content hiding other content
- no oversized headings
- no text running outside containers
- no images extending beyond intended bounds

---

# 36 — NAVBAR

Keep the existing navbar structure.

Do not turn the navbar into a dashboard.

Active navigation should remain clean.

Use:

```text
Team
────
```

or an equivalent subtle underline/active treatment.

Do NOT use circular active dots.

Do NOT add status text.

---

# 37 — SECTION LABELS

Editorial section labels are allowed:

```text
01 — ABOUT
02 — CHALLENGE
03 — SOLUTION
04 — TECHNOLOGY
05 — FEATURED PRODUCT
06 — IMPACT
07 — TEAM
08 — MILESTONES
```

Keep them simple.

Do NOT turn section labels into:

```text
STATUS
SYSTEM
CURRENT STATE
LIVE
ACTIVE
READY
```

---

# 38 — REMOVE DASHBOARD LANGUAGE ACROSS THE WEBSITE

Search the entire project for phrases similar to:

```text
Current Featured Platform
System Ready
Live Meters
Telemetry Rate
Scroll Pipeline Active
Probability Index
Low Risk
Position
Status
Current State
Active Node
Engine Ready
Live Feed
```

Remove them when decorative.

If a phrase is real product information, keep it only in the relevant product/detail context.

Do not display these labels on the corporate landing page merely to make it look technical.

---

# 39 — VISUAL BALANCE

The website should feel human.

Target balance:

```text
PEOPLE
ENERGY
MOBILITY
INFRASTRUCTURE
TECHNOLOGY
PRODUCT
IMPACT
```

AI should support these themes.

Do not make the visual hierarchy:

```text
AI
AI
TELEMETRY
DASHBOARD
AI
METRICS
SYSTEM
```

---

# 40 — MOTION LANGUAGE

Motion should remain an important part of the website.

Preferred:

```text
slow energy flow
soft parallax
image reveal
text fade
animated gradient
SVG line drawing
scroll storytelling
subtle image movement
```

Avoid:

```text
glitch
hacker UI
rapid counters
fake live data
random floating cards
excessive particles
constant bouncing
```

Animation should support storytelling.

It should never feel like visual noise.

---

# 41 — HERO IMPLEMENTATION

If the website uses React + Framer Motion, structure the Hero approximately as:

```text
Hero
 ├── HeroTextLoop
 ├── HeroVisual
 └── HeroCTA
```

Example data structure:

```ts
const phrases = [
  "Indonesia's energy is changing.",
  "Mobility is changing.",
  "Infrastructure should change with it.",
  "We build the technology to move it forward."
];
```

Recommended behavior:

```text
interval:
~2800ms

transition:
~550ms
```

Clean up the interval on unmount.

Do not create multiple intervals.

Do not trigger unnecessary React renders.

---

# 42 — HERO REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

- stop automatic text cycling or reduce it significantly
- show the primary Hero statement
- use a simple fade
- reduce background motion
- preserve all important content

The website must remain usable without animation.

---

# 43 — TEAM PERFORMANCE

For scroll-driven Team animation, prefer:

```text
Framer Motion MotionValue
useScroll
useTransform
CSS transforms
opacity
```

Avoid:

```text
setState() on every scroll event
forced layout reads every frame
unnecessary DOM duplication
heavy canvas rendering
```

Use GPU-friendly properties:

```text
transform
opacity
```

where possible.

---

# 44 — IMAGE PERFORMANCE

For Hero and Team images:

- use appropriately sized images
- avoid enormous source files
- use modern formats where supported
- lazy-load images below the fold
- avoid loading every Team image at maximum resolution
- use responsive image sizing

Do not sacrifice performance for decorative visuals.

---

# 45 — NO VISUAL REGRESSION

After implementing:

1. Open the website at desktop.
2. Wait for the Hero text loop.
3. Confirm the loop is smooth.
4. Scroll through the entire homepage.
5. Check every section.
6. Test Team.
7. Test mobile.
8. Test tablet.
9. Test reduced motion.
10. Check browser console.
11. Run the production build.

---

# 46 — ACCEPTANCE CHECKLIST

## Hero

- [ ] Old technical dashboard Hero removed
- [ ] Fake telemetry removed
- [ ] Fake metrics removed
- [ ] AI probability index removed
- [ ] SYSTEM READY removed
- [ ] LIVE METERS removed
- [ ] Scroll Pipeline Active removed
- [ ] Long AI-heavy paragraph removed
- [ ] Main headline changes automatically
- [ ] Text remains readable long enough
- [ ] Text transition is smooth
- [ ] Loop is seamless
- [ ] Background visual loops continuously
- [ ] Visual is energy/clean-tech focused
- [ ] No hacker/AI dashboard aesthetic
- [ ] Background uses #F0F7FB
- [ ] Typography uses approved palette
- [ ] Gradient highlight uses only approved colors
- [ ] Gradient is subtle
- [ ] No harsh dark block behind Hero typography
- [ ] CTA remains simple
- [ ] Hero is responsive
- [ ] Hero does not overflow horizontally

## Team

- [ ] Horizontal storytelling remains on desktop
- [ ] Active portrait is never clipped
- [ ] Members are positioned intentionally
- [ ] No accidental horizontal page overflow
- [ ] `SCROLL TO EXPLORE EXECUTIVE TEAM STORY` removed
- [ ] Large HUD progress bar removed
- [ ] Progress is subtle or omitted
- [ ] Member information remains readable
- [ ] Mobile layout works
- [ ] Tablet layout works
- [ ] Desktop layout works
- [ ] Portrait faces are not awkwardly cropped
- [ ] Sticky content does not hide other content
- [ ] Team section exits smoothly into the next section

## Global

- [ ] Decorative status labels removed
- [ ] `Current Featured Platform` removed
- [ ] Dashboard-style labels removed
- [ ] Fake live data removed from corporate sections
- [ ] No purple
- [ ] No green
- [ ] No cyan
- [ ] No unrelated colors
- [ ] No unnecessary AI UI
- [ ] No accidental horizontal scrolling
- [ ] No console errors
- [ ] No hydration errors
- [ ] No TypeScript errors
- [ ] Production build passes

---

# 47 — FINAL CREATIVE PRINCIPLE

The final website should communicate:

> **ZapTech is a clean-tech company building the infrastructure behind a smarter, more connected energy future.**

It should NOT communicate:

> **ZapTech is an AI dashboard with a bunch of technical telemetry.**

The desired hierarchy is:

```text
BRAND
  ↓
ENERGY
  ↓
MOBILITY
  ↓
PEOPLE
  ↓
PRODUCT
  ↓
TECHNOLOGY
  ↓
AI AS SUPPORTING TECHNOLOGY
```

not:

```text
AI
  ↓
AI
  ↓
TELEMETRY
  ↓
DASHBOARD
  ↓
AI
```

---

# 48 — FINAL IMPLEMENTATION PRINCIPLE

**Less dashboard. More brand.**

**Less fake status. More storytelling.**

**Less AI visual noise. More clean energy.**

**Less rigid cards. More motion.**

**Less visual clutter. More breathing room.**

The animation should make ZapTech feel alive without making it feel like a monitoring console.

The Hero should feel like the opening scene of a clean-tech brand film.

The Team section should feel like a cinematic story about the people behind ZapTech.

Every animation must have a purpose:

```text
Hero text loop
→ communicates the brand message

Energy visual
→ communicates movement and infrastructure

Team horizontal storytelling
→ communicates the people behind the company

Image motion
→ adds human presence

Gradient motion
→ reinforces the ZapTech identity
```

Do not add animation merely because an empty space exists.
