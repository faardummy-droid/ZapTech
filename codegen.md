# ZapTech Corporate Website — Implementation Specification

## 1. PROJECT OVERVIEW

Build a premium static corporate website for a technology startup named:

# ZapTech

IMPORTANT:
The previous brand name was "ZapLab Technology".

Replace ALL visible branding references from:

"ZapLab Technology"

to:

"ZapTech"

The product/platform name:

"ZapIN"

must remain unchanged.

The website is a public-facing startup profile website.

It is NOT an admin dashboard.
It is NOT an ERP.
It is NOT a backend-heavy application.

The primary goal is:

- Corporate branding
- Startup profile
- Technology showcase
- Investor credibility
- B2B partnership acquisition
- Research & innovation presentation
- Product showcase
- Technology storytelling

The website must be deployable to Vercel.

---

# 2. PRIMARY OBJECTIVES

Build a website that feels:

- Premium
- Modern
- Futuristic
- Clean-tech
- Deep-tech
- Research-driven
- Investor-ready
- B2B-ready
- Interactive
- Highly polished
- Fast
- Responsive

The visual concept:

"Clean Energy × AI × IoT × Intelligent Infrastructure"

DO NOT create a generic startup landing page.

DO NOT use an overly dark cyberpunk aesthetic.

DO NOT overuse gradients.

DO NOT overuse glassmorphism.

DO NOT create excessive animations that hurt performance.

---

# 3. VISUAL BRAND SYSTEM

## Primary Background

Use:

#F0F7FB

This is the main website background.

---

## Brand Blue

#076FB8

Use for:

- Primary CTA
- Logo accents
- Icons
- Important UI
- Technical illustrations
- Navigation highlights
- Interactive states

---

## Energy Yellow

#FEC958

Use for:

- Energy indicators
- Highlights
- Small accents
- Data visualization
- Decorative elements

---

## Accent Pink

#EE7797

Use for:

- Secondary highlights
- Decorative vector elements
- Gradient compositions
- Selected UI accents

---

## White

#FFFFFF

Use for:

- Cards
- Surfaces
- Navigation
- Content panels
- Form fields

---

# 4. GRADIENT SYSTEM

Use gradients selectively.

Preferred gradient:

#076FB8 → #EE7797

Alternative:

#076FB8 → #FEC958

Use gradient text for selected words in major headings.

Example:

"Intelligent Energy Infrastructure"

Only selected words should use gradient text.

Do NOT make entire paragraphs gradient.

---

# 5. TYPOGRAPHY

Use a modern sans-serif font.

Preferred:

Inter

or another premium geometric/sans-serif font available through the project.

Typography hierarchy:

Hero H1:
Very large
Bold
Tight line-height

Section H2:
Large
Bold

Body:
Readable
Comfortable line-height

Small labels:
Uppercase
Letter spacing
Technical aesthetic

---

# 6. TECH STACK

Use:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Recommended architecture:

Next.js App Router.

Use static rendering wherever possible.

The website should be compatible with Vercel deployment.

Avoid unnecessary server-side functionality.

---

# 7. STATIC WEBSITE REQUIREMENT

The website must work as a static/public marketing website.

No database is required.

No authentication is required.

No admin panel is required.

No backend API is required for the first version.

Use local/static data structures for:

- Team
- Products
- Milestones
- Navigation
- Technology features
- Impact metrics

Contact form can initially use a frontend-only interaction or configurable external endpoint.

Do not introduce a backend unless explicitly required.

---

# 8. ROUTES

Create:

/
 
/about

/technology

/technology/zapin

/solutions

/impact

/team

/contact

If appropriate, sections can also be anchor-linked from the homepage.

---

# 9. MAIN NAVIGATION

Navbar:

ZapTech logo

Menu:

About
Technology
Solutions
Impact
Team
News

CTA:

Contact Us

Navbar behavior:

- Transparent/soft surface at top
- Becomes slightly elevated when scrolling
- Smooth transition
- Mobile hamburger menu
- Animated mobile menu
- Active navigation state

---

# 10. HOME PAGE

## SECTION 01 — HERO

Badge:

"Pioneering Intelligent Clean-Energy Infrastructure"

Headline:

"Accelerating Indonesia's Clean Mobility Through Intelligent Energy Innovation."

Use gradient highlight on selected words.

Subheadline:

"ZapTech is a clean-tech research and development company building intelligent distributed infrastructure by combining IoT, AI, and smart hardware."

CTA:

Explore Our Technology

Partner With Us

---

## HERO VISUAL

Create an advanced vector-based visual.

Concept:

EV
+
Energy
+
AI
+
IoT
+
Cloud
+
Connected Infrastructure

Visual elements:

- Floating nodes
- Energy waves
- Thin connection lines
- Animated SVG paths
- Technical labels
- Data packets
- Small telemetry indicators
- Abstract geometric shapes

Use Framer Motion.

Animation should be subtle.

Example:

- Floating objects
- Pulsing nodes
- Moving SVG line
- Slow parallax
- Fade-in sequence

---

## HERO PHOTOGRAPHY

The hero MUST contain photography.

Use a premium technology/EV/engineering image.

The image should be integrated into the visual composition rather than being a simple rectangular stock image.

Use:

- rounded corners
- subtle border
- soft shadow
- masked/cropped composition if appropriate

If no final photo assets exist yet:

Create an assets structure:

/public/images/

and use replaceable image paths.

Do not hardcode external image URLs unless necessary.

---

# 11. ABOUT SECTION

Section label:

ABOUT ZAPTECH

Headline:

"Building the Infrastructure Behind a Smarter Energy Future."

Layout:

2-column desktop
stacked mobile

Left:
Technology/R&D photograph.

Right:
Company description.

Three pillars:

### Deep-Tech Hardware Integration

Intelligent embedded systems and IoT controllers for distributed energy infrastructure.

### AI-Driven Energy Intelligence

Predictive intelligence for operational optimization and energy systems.

### Sustainable Infrastructure

Building scalable infrastructure supporting cleaner mobility and local economic ecosystems.

---

# 12. CHALLENGE SECTION

Label:

THE CHALLENGE

Headline:

"The Energy Transition Is Growing. Infrastructure Must Evolve With It."

Create two interactive cards.

CARD 01:

EV Driver

Problems:

- Range anxiety
- Uncertain charger availability
- Waiting time
- Manual station discovery

CARD 02:

Host Partner

Problems:

- High initial CapEx
- Operational complexity
- Limited infrastructure visibility
- Revenue management complexity

Add vector illustrations.

Cards should have hover animation.

---

# 13. SOLUTION SECTION

Label:

THE SOLUTION

Headline:

"An Intelligent Infrastructure Layer Connecting Energy, Technology and People."

Create an interactive ecosystem diagram.

Nodes:

EV Driver
ZapIN
ZapTech Cloud
AI Engine
IoT Controller
Host Partner
Energy Infrastructure

Connect nodes with animated SVG lines.

Animate data flowing through the system.

Use Framer Motion and SVG.

The diagram must remain usable on mobile.

On mobile:
convert to vertical flow instead of shrinking the entire desktop diagram.

---

# 14. TECHNOLOGY / R&D

Label:

R&D & INNOVATION

Headline:

"Where Artificial Intelligence Meets Real-World Energy Infrastructure."

Technology cards:

- AI Predictive Engine
- Edge IoT
- Real-Time Telemetry
- Smart Hardware
- Data Analytics

Create a technical visualization.

CTA:

Explore ZapIN Architecture →

Route:

/technology/zapin

---

# 15. PRODUCTS / SOLUTIONS

Label:

OUR SOLUTIONS

Headline:

"Technology Designed From Hardware to Intelligence."

Create three cards.

## ZapIN Mobile Platform

Intelligent navigation, charging availability, reservation and dynamic rerouting.

## ZapTech Smart IoT Controller

Edge hardware for telemetry, power control and infrastructure monitoring.

## ZapTech Partner Analytics

B2B analytics platform for station performance, transactions, energy usage and reporting.

Each card should include:

- Image or technical illustration
- Product name
- Short description
- Technology tags
- Learn More CTA

Use hover animation.

---

# 16. IMPACT SECTION

Label:

IMPACT & SUSTAINABILITY

Headline:

"Technology That Creates Measurable Impact."

Create three large impact blocks.

### Clean Mobility

Supporting EV adoption and sustainable transportation.

### Local Business Empowerment

Creating new revenue opportunities through distributed infrastructure.

### Energy Optimization

Improving visibility and efficiency across distributed energy systems.

Add animated counters.

Counter animation should run when the section enters viewport.

---

# 17. TEAM SECTION

Label:

THE MINDS BEHIND ZAPTECH

Headline:

"Built by People Who Believe Technology Should Move the World Forward."

Team:

Ghiffar
Chief Executive Officer

Nadhif
Chief Technology Officer

Dyan
Chief Marketing Officer

Alvin
Chief Operating Officer

Use professional portrait photography.

Team cards:

- Large photo
- Name
- Position
- Short description
- LinkedIn/GitHub/social link

Do not use generic tiny avatar cards.

Make the team visually important.

---

# 18. MILESTONES

Label:

MILESTONES

Headline:

"From Research to Real-World Innovation."

Create animated timeline.

Timeline items:

- Competition / Innovation Validation
- IoT Prototype Development
- R&D Milestones
- Product Roadmap
- Early Partner Pilot

Animation:

- line draws progressively
- cards reveal sequentially
- timeline nodes pulse subtly

---

# 19. CONTACT SECTION

Headline:

"Let's Build the Future of Energy Together."

Subheadline:

"For investors, technology partners, host businesses, researchers and organizations interested in collaborating with ZapTech."

CTA:

Start a Conversation

Contact information:

Email
LinkedIn
Instagram
Location

Create a premium contact layout.

Include subtle animated background vector.

---

# 20. FOOTER

Brand:

ZapTech

Tagline:

Technology × Energy × Intelligence

Links:

About
Technology
Solutions
Impact
Team
Contact
Privacy
Terms

Copyright:

© 2026 ZapTech. All rights reserved.

---

# 21. ZAPIN TECHNOLOGY PAGE

Route:

/technology/zapin

This page should be more technical than the main corporate website.

Maintain the same brand system.

---

## TECH HERO

Headline:

"ZapIN Platform: Intelligent Distributed EV Charging Ecosystem."

Technical summary:

"ZapIN is an integrated EV charging ecosystem combining AI-driven dynamic rerouting, real-time IoT telemetry, intelligent reservation and distributed energy infrastructure."

---

# 22. AI DYNAMIC REROUTING

Explain:

1. ETA Calculation
2. Occupancy Forecasting
3. Risk Assessment
4. Dynamic Rerouting
5. Reservation Hold

Create an interactive visual pipeline.

Example:

USER LOCATION
↓
ETA ENGINE
↓
STATION OCCUPANCY
↓
AI FORECAST
↓
RISK SCORE
↓
STATION RANKING
↓
DYNAMIC REROUTING

Animate each step.

---

# 23. SYSTEM ARCHITECTURE

Create an interactive architecture visualization.

Architecture:

EV Driver App
        ↓
ZapIN Platform
        ↓
AI Dynamic Rerouting
        ↓
Cloud Backend
        ↓
MQTT
        ↓
ZapTech Edge IoT
        ↓
Energy Infrastructure

Show:

- data flow
- telemetry
- API
- MQTT
- AI
- IoT
- energy

Use SVG rather than static image where possible.

Allow hover interaction on each component.

On hover:

Show short explanation.

---

# 24. HARDWARE SECTION

Show:

ESP32
Energy Meter
Relay Controller
Telemetry
MQTT

Telemetry:

Voltage
Current
Power
Energy
Charging Duration
Cost

Create a technical card layout.

Add hardware photography if available.

---

# 25. WORKFLOW / STATE MANAGEMENT

Show:

AVAILABLE
↓
RESERVED
↓
CHARGING
↓
IDLE_COMPLETED

And:

OFFLINE / MAINTENANCE

Create an animated state-machine visualization.

---

# 26. BUSINESS LOGIC

Explain:

- Reservation Guard
- Idle Fee
- Automated Settlement
- Revenue Sharing
- Partner Reporting

Use clean cards and diagrams.

---

# 27. FINAL CTA

Headline:

"Ready to Explore the Technology Behind ZapIN?"

Buttons:

Request Interactive Prototype

Contact ZapTech

---

# 28. ANIMATION SYSTEM

Use Framer Motion.

Create reusable animation utilities/components.

Examples:

FadeUp
FadeIn
ScaleIn
StaggerContainer
ParallaxElement
FloatingElement
DrawSVG
CountUp
HoverCard

Animation principles:

- 200–700ms transitions
- ease-out
- staggered reveals
- subtle movement
- no excessive bouncing
- respect prefers-reduced-motion

Implement:

prefers-reduced-motion support.

If reduced motion is enabled:
disable unnecessary decorative animation.

---

# 29. VECTOR ANIMATION

Prioritize SVG/vector animations.

Create:

- Energy waves
- Connected nodes
- Data packets
- Circuit paths
- Grid patterns
- AI visualization
- Architecture diagram
- Timeline connectors

Do not use heavy video backgrounds.

Do not use giant GIFs.

Prefer:

SVG
CSS
Framer Motion

for performance.

---

# 30. IMAGE SYSTEM

Create:

/public/images/

Suggested structure:

/public/images/
  hero/
  technology/
  team/
  products/
  impact/
  milestones/

Use optimized images.

Use Next.js Image component.

Provide meaningful alt text.

Images should feel editorial and premium.

Avoid repetitive generic stock photos.

---

# 31. RESPONSIVE DESIGN

Desktop:

Large editorial layouts.

Tablet:

Reduce spacing and typography.

Mobile:

Recompose sections.

Do NOT simply scale desktop layouts down.

Important mobile behavior:

- Navbar becomes hamburger
- Architecture diagram becomes vertical
- Cards become stacked
- Horizontal timelines become vertical
- Hero visual simplifies
- Typography scales appropriately
- CTAs become full-width where necessary

---

# 32. PERFORMANCE

Target:

Lighthouse Performance:
90+

Accessibility:
90+

Best Practices:
90+

SEO:
90+

Optimize:

- images
- fonts
- JavaScript
- animation
- layout shifts

Avoid unnecessary client components.

Use server/static rendering whenever possible.

Only interactive sections should be client components.

---

# 33. SEO

Add:

- metadata
- title
- description
- Open Graph
- Twitter metadata
- favicon
- semantic HTML
- proper heading hierarchy

Suggested title:

ZapTech — Intelligent Energy & Clean Technology

Suggested description:

ZapTech builds intelligent clean-energy infrastructure by combining AI, IoT and smart hardware for a more connected and sustainable future.

---

# 34. ACCESSIBILITY

Must support:

- keyboard navigation
- visible focus states
- semantic HTML
- aria labels
- sufficient contrast
- alt text
- reduced motion

Do not rely on color alone to communicate information.

---

# 35. CODE ARCHITECTURE

Recommended:

src/
  app/
    page.tsx
    about/
    technology/
    solutions/
    impact/
    team/
    contact/

  components/
    layout/
    navigation/
    hero/
    sections/
    cards/
    diagrams/
    animations/
    ui/

  data/
    team.ts
    products.ts
    milestones.ts
    technology.ts

  lib/
    animations.ts
    utils.ts

  styles/

Keep components modular.

Do not create one giant page component.

---

# 36. REUSABLE COMPONENTS

Create reusable components such as:

Navbar
Footer
SectionHeader
GradientText
AnimatedCounter
Reveal
FloatingVector
TechCard
ProductCard
TeamCard
Timeline
ArchitectureDiagram
EcosystemDiagram
ContactCTA

---

# 37. DESIGN QUALITY BAR

The final website should feel closer to:

Premium technology startup
+
Clean-energy innovation company
+
Modern SaaS
+
Research laboratory

Avoid:

- generic bootstrap layouts
- excessive shadows
- excessive gradients
- random animations
- giant text everywhere
- cheap-looking illustrations
- excessive glassmorphism
- dark cyberpunk UI
- template-like cards

The result must feel custom-designed.

---

# 38. IMPORTANT BRAND RULE

Search the entire project for:

"ZapLab"
"ZapLab Technology"

Replace all visible branding with:

"ZapTech"

Do NOT rename:

"ZapIN"

ZapIN remains the product/platform name.

---

# 39. IMPLEMENTATION PROCESS

Before coding:

1. Inspect the existing project structure.
2. Inspect package.json.
3. Determine whether Next.js/Tailwind is already configured.
4. Reuse existing infrastructure when appropriate.
5. Do not unnecessarily recreate the project.
6. Identify existing assets.
7. Create a clear implementation plan.
8. Then implement.

---

# 40. FINAL VALIDATION

Before considering the task complete:

Run:

npm run lint

npm run build

If tests exist:

npm test

Fix all errors.

Verify:

- desktop
- tablet
- mobile
- navigation
- animations
- images
- accessibility
- SEO
- Vercel build compatibility

---

# 41. VERCEL DEPLOYMENT

The final project must be deployable directly to Vercel.

Ensure:

- production build succeeds
- no local-only dependencies
- no hardcoded localhost API
- no runtime backend dependency
- no broken asset paths
- no hydration errors
- no console errors

The website should function as a static/public corporate website after deployment.

---

# 42. FINAL DELIVERABLE

Deliver:

1. Fully implemented ZapTech website.
2. Responsive desktop/mobile UI.
3. Interactive animations.
4. SVG/vector animations.
5. Technology architecture visualization.
6. Team section with photo support.
7. Product showcase.
8. ZapIN technical page.
9. SEO metadata.
10. Accessibility support.
11. Vercel-compatible production build.

After implementation, provide a concise walkthrough of:

- pages created
- components created
- animations implemented
- assets required
- commands used to validate the build
- any remaining placeholder content