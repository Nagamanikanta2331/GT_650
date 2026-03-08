<div align="center">
  <h1>🏍️ Royal Enfield Continental GT 650</h1>
  <p><strong>A premium, cinematic landing page for the Royal Enfield Continental GT 650.</strong></p>
  <br />
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Framer%20Motion-11-FF0055?logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<hr />

## 🌟 Overview

This project is a modern, dark-themed, and cinematic landing page designed for the **Royal Enfield Continental GT 650**. It features smooth parallax scrolling, GSAP animations, a beautifully crafted scroll story, and an immersive booking experience specifically tailored for the Indian market.

## ✨ Features

- **Cinematic Hero Section**: Immersive full-screen hero with parallax scrolling and blur-on-scroll effects powered by GSAP ScrollTrigger.
- **GSAP Scroll Story**: A split-screen sticky scrolling experience — pinned image showcase on the left with animated text panels on the right, detailing the motorcycle's heritage and performance.
- **Dynamic Booking Page**:
  - India-specific form fields (phone numbers with `+91`, city & pincode).
  - Dynamic model variant images (Apex Grey, Slipstream Blue, Dux Deluxe, Rocker Red, British Racing Green, Mr Clean Chrome) that update live on selection.
  - Animated booking confirmation modal with a blurred background overlay.
- **Fully Responsive**: Designed mobile-first, looking stunning on both desktop and mobile devices.
- **Custom Dark Theme**: Premium color palette with custom scrollbar styling and cinematic vignette overlays.

## 🛠️ Tech Stack

| Technology         | Usage                                 |
|--------------------|---------------------------------------|
| **React 18**       | Component-based UI framework          |
| **Vite 5**         | Lightning-fast build tool & dev server|
| **Tailwind CSS 4** | Utility-first styling with `@theme`   |
| **GSAP**           | ScrollTrigger animations & parallax   |
| **Framer Motion**  | Page transitions & micro-animations   |
| **Lucide React**   | Modern SVG icon library               |

## 📁 Project Structure

```
GT_650/
├── index.html              # Entry HTML with Google Fonts
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx            # React entry point with BrowserRouter
│   ├── App.jsx             # Route definitions (Home, Booking)
│   ├── index.css           # Tailwind v4 theme & global styles
│   ├── assets/
│   │   └── images/         # Hero backgrounds & model variant images
│   ├── components/
│   │   ├── Hero.jsx        # Cinematic hero with parallax & blur
│   │   ├── Navigation.jsx  # Fixed navbar with route links
│   │   ├── Quote.jsx       # Animated quote section
│   │   └── ScrollStory.jsx # GSAP-powered split-screen scroll story
│   └── pages/
│       ├── Home.jsx        # Home page (Hero + ScrollStory + Quote)
│       └── Booking.jsx     # Dynamic booking form with variant images
└── .vscode/
    └── settings.json       # IDE config for Tailwind v4 compatibility
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18+) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nagamanikanta2331/GT_650.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd GT_650
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in your browser:**
   ```
   http://localhost:5173
   ```

## 🎨 Color Palette

| Color          | Hex       | Usage                    |
|----------------|-----------|--------------------------|
| Brand Black    | `#0a0a0a` | Background               |
| Brand Charcoal | `#1c1c1c` | Card/section backgrounds |
| Brand Silver   | `#c0c0c0` | Secondary text           |
| Brand Red      | `#cc0000` | Accent / CTA buttons     |
| Brand Green    | `#004225` | British Racing Green     |
| Brand Gold     | `#d4af37` | Highlights & dividers    |

## 📜 Available Scripts

| Command           | Description                      |
|-------------------|----------------------------------|
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview the production build     |

<hr />

<p align="center">
  <i>Built with ❤️ for motorcycle enthusiasts.</i>
</p>
