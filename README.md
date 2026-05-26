# Satyajit Sahoo — VS Code Portfolio

A highly polished, VS Code-inspired developer portfolio built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open `http://localhost:5173` in your browser.

---

## 🗂️ Project Structure

```
src/
├── App.jsx                 # Root layout controller
├── main.jsx                # React entry point
├── index.css               # Global styles + VS Code CSS variables
├── data/
│   └── portfolio.js        # ← UPDATE YOUR DATA HERE
├── context/
│   └── AppContext.jsx      # Global state (tabs, terminal, etc.)
├── components/
│   ├── ActivityBar.jsx     # Left icon sidebar
│   ├── Explorer.jsx        # File tree panel
│   ├── TabBar.jsx          # Top editor tabs
│   ├── Editor.jsx          # Main content renderer
│   ├── Terminal.jsx        # Bottom terminal panel
│   ├── StatusBar.jsx       # Bottom VS Code status bar
│   ├── CommandPalette.jsx  # Ctrl+P command palette
│   ├── MobileNav.jsx       # Bottom nav for mobile
│   ├── LoadingScreen.jsx   # Boot animation
│   └── Notifications.jsx   # Toast notifications
└── sections/
    ├── About.jsx           # about.js — developer profile
    ├── Skills.jsx          # skills.ts — tech stack
    ├── Projects.jsx        # projects.jsx — project cards
    ├── Experience.jsx      # experience.md — work history
    ├── Contact.jsx         # contact.json — contact info
    └── Achievements.jsx    # achievements.md — milestones
```

---

## 🖼️ Adding Your Images

Place image files in the `public/` folder. Update `src/data/portfolio.js` with correct paths.

| File                    | Used in                     |
|-------------------------|-----------------------------|
| `/avatar.jpg`           | About section avatar        |
| `/outr-logo.png`        | Education card              |
| `/skillcraft-logo.png`  | Experience card             |
| `/ibm-skillsbuild-logo.png` | Experience card         |
| `/project-rsims.png`    | RSIMS project card          |
| `/project-techblog.png` | Tech Blog project card      |
| `/project-chatbot.png`  | AI Chat project card        |
| `/LeetForces.png`       | LeetForces project card     |

---

## ⌨️ Keyboard Shortcuts

| Shortcut    | Action                    |
|-------------|---------------------------|
| `Ctrl + P`  | Open command palette      |
| `Escape`    | Close command palette     |
| Arrow keys  | Navigate command palette  |
| `Enter`     | Select item               |

---

## 🔧 Customization

Edit `src/data/portfolio.js` to update:
- Personal info, bio, email
- Social links
- Projects (name, URL, GitHub, description, tags)
- Experience (company, role, bullets)
- Skills (technologies array)
- Achievements

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **Vite** — Build tool

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm run build
# drag the `dist/` folder to vercel.com/new
```

### Netlify
```bash
npm run build
# deploy dist/ folder
```

---

## 📝 License

MIT — Feel free to use, modify and deploy.

Built with ❤️ by Satyajit Sahoo — 2026
