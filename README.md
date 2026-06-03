# A. Mohammed Ayub — Portfolio

A premium, production-ready portfolio built with **React 18**, **Vite**, and **Tailwind CSS**.

## Features

- Neural network particle background (Canvas API)
- Magnetic buttons with cursor-following physics
- Scroll-triggered reveal animations
- Animated skill bars with gradient fills
- Project filtering by category
- Responsive timeline experience section
- Glassmorphism UI elements
- Contact form with floating labels
- Fully responsive (mobile, tablet, desktop)

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React (icons)
- Intersection Observer API (scroll animations)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the dist/ folder to Netlify drop zone
```

## Project Structure

```
src/
  components/
    NeuralNetwork.jsx   # Canvas particle background
    Nav.jsx             # Fixed navigation
    Hero.jsx            # Landing section
    Stats.jsx           # Key metrics
    About.jsx           # Bio section
    Skills.jsx          # Skill bars
    Projects.jsx        # Filterable project grid
    Experience.jsx      # Timeline
    Achievements.jsx    # Awards & community
    Contact.jsx         # Contact form + info
    Footer.jsx          # Footer
    MagneticButton.jsx  # Magnetic hover button
    Section.jsx         # Scroll-reveal wrapper
  hooks/
    useScrollProgress.js # Scroll progress bar
    useInView.js        # Intersection observer hook
  App.jsx              # Main layout
  main.jsx             # Entry point
  index.css            # Global styles + Tailwind
```

## Contact

- Email: ayub23022@gmail.com
- GitHub: github.com/Md-Ayub23
- LinkedIn: linkedin.com/in/mdayub23
