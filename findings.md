# Armablock Project Findings & Architecture

## 🎯 Project Objective
High-fidelity, bilingual (ES/EN) React landing page for Armablock, focusing on industrial interlocking concrete systems, turnkey projects, and global franchises.

## 🏗️ Technical Architecture
- **Framework**: React 18 / Vite 5.
- **Styling**: Tailwind CSS v3 (Custom Brutalist Signal configuration).
- **Animations**: GSAP 3 with ScrollTrigger (Weighted, cinematic feel).
- **Icons**: Lucide React.
- **Internationalization**: Custom `useMemo` dictionary system for real-time ES/EN switching.

## 🎨 Design Decisions (Preset C: Brutalist Signal)
- **Colors**: Paper (`#E8E4DD`), Signal Red (`#E63B2E`), Off-White (`#F5F3EE`), Carbon Black (`#111111`).
- **Typography**: Space Grotesk (Neo-Grotesque Sans) + DM Serif Display (Italic accents).
- **Texture**: Global SVG noise filter (`opacity: 0.05`) for tactile feel.
- **Accents**: Modern blue technical diagrams (SVGs) to emphasize engineering precision.

## 🚀 Key Components
1. **Floating Island Navbar**: Pinned pill-shaped navigation with language toggle.
2. **Dynamic Hero**: Staggered text reveals and blueprint background.
3. **Interactive Shuffler**: Visualizing interlocking block density.
4. **Efficiency Telemetry**: Real-time typewriter effect for cost/time metrics.
5. **Sticky Protocol Stacking**: Cards that layer and scale during vertical scroll.

## 📈 Verification
- Production build confirmed via `vite build`.
- Clean GSAP lifecycle management in all functional components.
- Responsive design verified for Mobile and Desktop breakpoints.
