# Talha Daud Portfolio

A modern, minimalist portfolio website inspired by the Sawad design aesthetic. Built with Next.js 14+, Tailwind CSS, and Framer Motion.

---

## 🎨 Design System

### Color Palette (Sawad Theme)

| Color         | Hex       | Usage              |
| ------------- | --------- | ------------------ |
| Deep Black    | `#000000` | Primary background |
| Dark Gray     | `#111111` | Card backgrounds   |
| Subtle Border | `#222222` | Borders & dividers |
| White         | `#FFFFFF` | Primary text       |
| Muted         | `#888888` | Secondary text     |

### Typography

- **Font Family**: Inter (Sans-serif)
- **Headings**: Bold, high-contrast white
- **Body**: Regular weight, muted gray

---

## 📋 Development Phases

### Phase 1: Foundation & Layout

- [ ] Initialize project with **Next.js 14+ (App Router)**, **Tailwind CSS**, and **Framer Motion**
- [ ] Configure `tailwind.config.js` with the Sawad color palette:
  - Deep Blacks (`#000000`)
  - Dark Grays (`#111111`)
  - Subtle borders (`#222222`)
- [ ] Setup typography using **Inter** or similar high-quality Sans-serif font
- [ ] Create a `Navbar` component:
  - Floating/Sticky glassmorphism effect
  - Links: Home, Projects, Experience, Tools, Thoughts

### Phase 2: Hero & Bento Grid

- [ ] **Hero Section**:
  - "Software Engineer" title with high-contrast white text
  - Sub-description for UX passion
- [ ] **Bento Stats**:
  - 3-column grid for metrics
  - Years of Experience, Projects, Clients
  - Large typography
- [ ] **Marquee**:
  - Build `ScrollingText` component using Framer Motion
  - "Dynamic Animation / Motion Design" infinite loop

### Phase 3: Project & Experience Sections

- [ ] **Project Grid**:
  - Vertical list of project cards
  - Large image container with "View Project" overlay
  - Minimalist metadata
- [ ] **Experience List**:
  - Vertical timeline layout
  - Company Logo (circular)
  - Role Title, Description, Date Range

### Phase 4: Tools & Content

- [ ] **Tools Grid**:
  - 2x3 or 3x3 grid of tech stack icons
  - Next.js, Figma, etc.
  - Rounded-xl borders
  - Subtle hover lift effect
- [ ] **Blog/Thoughts**:
  - List layout for articles
  - Date, title, brief snippet

### Phase 5: Interaction & Contact

- [ ] **Contact Form** ("Let's Work Together"):
  - Name field
  - Email field
  - Budget (Select dropdown)
  - Message field
- [ ] **Global Animations** (Framer Motion):
  ```jsx
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  ```
  - Apply to every major section for "smooth reveal" effect
- [ ] **Custom Cursor** (Optional):
  - Subtle custom circle cursor
  - Reacts to hover states on links and projects

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── BentoStats.tsx
│   ├── ScrollingText.tsx
│   ├── ProjectGrid.tsx
│   ├── ExperienceList.tsx
│   ├── ToolsGrid.tsx
│   ├── BlogList.tsx
│   ├── ContactForm.tsx
│   └── CustomCursor.tsx
├── lib/
│   └── utils.ts
└── data/
    ├── projects.ts
    ├── experience.ts
    └── tools.ts
```

---

## 🛠️ Tech Stack

| Technology    | Purpose                   |
| ------------- | ------------------------- |
| Next.js 14+   | App Router, SSR, Routing  |
| Tailwind CSS  | Utility-first styling     |
| Framer Motion | Animations & interactions |
| TypeScript    | Type safety               |
| Inter Font    | Typography                |

---

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build for production (generates static site in ./out directory)
npm run build

# Preview the production build locally
cd out && python3 -m http.server 8080
# Or use any static file server
```

### Deployment

The site is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Push to `main` or `master` branch triggers deployment
2. **Manual Deployment**: Go to Actions tab and run "Deploy to GitHub Pages" workflow
3. **Output**: Site is deployed to `gh-pages` branch and served at talhadaud.me

The GitHub Actions workflow:
- Installs dependencies
- Builds the static site (`npm run build`)
- Deploys the `./out` directory to GitHub Pages

---

## 📝 Notes

- All sections should have smooth scroll-reveal animations
- Maintain consistent spacing (use Tailwind's spacing scale)
- Mobile-first responsive design
- Dark theme only (no light mode toggle needed)
- Performance optimized with Next.js Image component

---

## 🔗 Links

- **Live Site**: [talhadaud.me](https://talhadaud.me)
- **GitHub**: [TalhaKhanSix/talhadaud.me](https://github.com/TalhaKhanSix/talhadaud.me)

---

_Built with ❤️ by Talha Daud_
