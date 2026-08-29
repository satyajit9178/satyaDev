// ============================================================
// PORTFOLIO DATA — Satyajit Sahoo
// Replace placeholder URLs with real ones before deploying
// ============================================================

export const personal = {
  name: "Satyajit",
  fullName: "Satyajit Sahoo",
  avatar: "/avatar.jpg",
  tagline: "I build web experiences using",
  taglineTechs: ["JavaScript", "React", "HTML", "CSS", "C++"],
  bio: [
    "Hi there! I'm a Computer Science & Engineering student at Odisha University of Technology and Research, Bhubaneswar, with a CGPA of 9.05/10. I specialize in frontend development, DSA, and building clean, responsive web applications.",
    "I recently completed a Web Developer Internship at SkillCraft Technology where I built multiple responsive web apps — from landing pages to interactive games — using React and modern JavaScript.",
    "I'm passionate about learning, building, and growing in the tech space. Currently diving deeper into DSA using C++ and exploring system design concepts.",
    "If you're looking for a motivated and collaborative team player, let's connect — I'd love to be part of something exciting!",
  ],
  resumeUrl: "https://drive.google.com/file/d/1a07PPyoZFR1b7DC6SCWujoVRF5cmNuZq/view?usp=sharing",
  email: "satyajits104@gmail.com",
  copyright: "2026 Satyajit Sahoo",
}

export const socials = [
  { name: "GitHub",       icon: "github",     url: "https://github.com/satyajit9178",                               color: "#ffffff" },
  { name: "LinkedIn",     icon: "linkedin",   url: "https://linkedin.com/in/satyajit-sahoo-0636a5297",              color: "#0A66C2" },
  { name: "Twitter",      icon: "twitter",    url: "https://twitter.com/Satyajit81170",                             color: "#1DA1F2" },
  { name: "YouTube",      icon: "youtube",    url: "https://youtube.com/@satyajit91",                               color: "#FF0000" },
  { name: "Instagram",    icon: "instagram",  url: "https://www.instagram.com/ll_satyajit_ll/",                     color: "#E1306C" },
  { name: "Facebook",     icon: "facebook",   url: "https://www.facebook.com/satyajit9178/",                        color: "#1877F2" },
  { name: "LeetCode",     icon: "code",       url: "https://leetcode.com/u/satyajits/",                             color: "#FFA116" },
  { name: "GeeksForGeeks",icon: "terminal",   url: "https://www.geeksforgeeks.org/profile/satyajio394",             color: "#2F8D46" },
  { name: "HackerRank",   icon: "award",      url: "https://www.hackerrank.com/profile/satyajits104",               color: "#2EC866" },
]

export const education = [
  {
    institution: "Odisha University of Technology and Research",
    logo: "/outr-logo.png",
    location: "Bhubaneswar, Odisha",
    degree: "B.Tech — Computer Science & Engineering",
    period: "Aug 2023 – 2027",
    cgpa: "8.99 / 10",
    highlights: [
      "Specializing in Data Structures & Algorithms, Responsive Web Design, and System Design.",
      "Consistent academic performance with CGPA 8.99/10.",
      "Actively building projects and participating in coding challenges.",
    ],
  },
]

export const experience = [
  {
    company: "SkillCraft Technology",
    logo: "/skillcraft-logo.png",
    role: "Web Developer Intern",
    period: "Aug 2025 – Sep 2025",
    location: "India (Remote)",
    type: "Internship",
    bullets: [
      "Built multiple responsive web applications including landing pages, stopwatch, calculator, quiz game, tic-tac-toe, and to-do app using React.",
      "Implemented reusable components and state management to improve UI consistency and code maintainability.",
      "Developed interactive features using modern JavaScript and React hooks.",
      "Worked independently on end-to-end development: design, coding, debugging, and deployment.",
      "Strengthened practical skills in frontend architecture, component design, and performance optimization.",
    ],
  },
  {
    company: "IBM SkillsBuild & CSRBOX",
    logo: "/ibm-skillsbuild-logo.png",
    role: "AI Strategy & Business Intelligence Intern",
    period: "Mar 2026 – Apr 2026",
    location: "India (Remote)",
    type: "Internship",
    bullets: [
      "Completed a 6-week internship focused on AI Strategy and Business Intelligence.",
      "Learned core concepts of artificial intelligence, business analytics, and strategic decision-making.",
      "Explored real-world applications of AI in business workflows and data-driven problem solving.",
      "Participated in industry-oriented learning activities conducted by CSRBOX in association with AICTE and IBM SkillsBuild.",
      "Strengthened understanding of modern AI tools, business intelligence concepts, and analytical thinking.",
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: "RSIMS — Retail Store Inventory",
    shortName: "RSIMS",
    image: "/project-rsims.png",
    nda: false,
    url: "https://rsims-chlr-git-main-satyajit-sahoos-projects-ac655a1d.vercel.app/",
    github: "https://github.com/satyajit9178/RSIMS",
    description: "Full stack retail inventory management system with dashboard, products, sales, purchases, reports and PDF export. Role-based auth with admin panel.",
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS", "Vercel"],
    status: "deployed",
    branch: "main",
    commits: 47,
    stars: 12,
  },
  {
    id: 2,
    name: "Tech Blog Website",
    shortName: "TechBlog",
    image: "/project-techblog.png",
    nda: false,
    url: "https://my-blog-site-weld.vercel.app/",
    github: "https://github.com/satyajit9178/tech-blog",
    description: "Blog platform focused on startups, AI, and cybersecurity. Built with React, Vite, Tailwind CSS, API-based dynamic content, card layout with curated sidebar.",
    tags: ["React", "Vite", "Tailwind CSS", "REST API"],
    status: "deployed",
    branch: "main",
    commits: 23,
    stars: 8,
  },
  {
    id: 3,
    name: "AI Chat Assistant",
    shortName: "AIChatBot",
    image: "/project-chatbot.png",
    nda: false,
    url: "https://ai-chatbot-wheat-zeta.vercel.app/",
    github: "https://github.com/satyajit9178/ai-chat-assistant",
    description: "Full featured AI chat assistant with conversation history, new chat creation, file attachment support, and clean ChatGPT-style UI.",
    tags: ["React", "AI API", "JavaScript", "Tailwind CSS"],
    status: "deployed",
    branch: "main",
    commits: 34,
    stars: 19,
  },
  {
    id: 4,
    name: "Personal Portfolio v1",
    shortName: "Portfolio-v1",
    image: null,
    nda: false,
    url: "https://my-portfolio-silk-one-87.vercel.app/",
    github: "https://github.com/satyajit9178/portfolio",
    description: "Modern responsive portfolio showcasing projects and technical progress. Built with HTML, CSS, JavaScript. Deployed on Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    status: "deployed",
    branch: "main",
    commits: 15,
    stars: 5,
  },
  {
    id: 5,
    name: "CP Visualizer — LeetForces",
    shortName: "LeetForces",
    image: "/LeetForces.png",
    nda: false,
    url: "https://leet-code-f.vercel.app/",
    github: "https://github.com/satyajit9178/leetforces",
    description: "One dashboard for your complete competitive programming profile. Enter LeetCode or Codeforces handles to visualize stats, problems solved, and contest ratings.",
    tags: ["HTML", "CSS", "JavaScript", "REST API", "Vercel"],
    status: "deployed",
    branch: "main",
    commits: 29,
    stars: 14,
  },
]

export const technologies = [
  { name: "HTML",         icon: "https://cdn.simpleicons.org/html5",                    category: "frontend", level: 92 },
  { name: "CSS",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",                     category: "frontend", level: 88 },
  { name: "JavaScript",   icon: "https://cdn.simpleicons.org/javascript",               category: "frontend", level: 85 },
  { name: "React",        icon: "https://cdn.simpleicons.org/react",                    category: "frontend", level: 83 },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss",              category: "frontend", level: 87 },
  { name: "Bootstrap",    icon: "https://cdn.simpleicons.org/bootstrap",                category: "frontend", level: 75 },
  { name: "Vite",         icon: "https://cdn.simpleicons.org/vite",                     category: "tools",    level: 80 },
  { name: "C",            icon: "https://cdn.simpleicons.org/c",                        category: "backend",  level: 78 },
  { name: "C++",          icon: "https://cdn.simpleicons.org/cplusplus",                category: "backend",  level: 80 },
  { name: "Java",         icon: "https://cdn.simpleicons.org/openjdk",                  category: "backend",  level: 70 },
  { name: "Node.js",      icon: "https://cdn.simpleicons.org/nodedotjs",                category: "backend",  level: 65 },
  { name: "MySQL",        icon: "https://cdn.simpleicons.org/mysql/00758f",             category: "backend",  level: 68 },
  { name: "Git",          icon: "https://cdn.simpleicons.org/git",                      category: "tools",    level: 85 },
  { name: "GitHub",       icon: "https://cdn.simpleicons.org/github/ffffff",            category: "tools",    level: 85 },
  { name: "VS Code",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",  category: "tools",    level: 90 },
  { name: "Vercel",       icon: "https://cdn.simpleicons.org/vercel/ffffff",            category: "tools",    level: 82 },
]

export const achievements = [
  {
    title: "CGPA Excellence",
    description: "Maintaining a CGPA of 8.99/10 at Odisha University of Technology and Research.",
    date: "2023 – Present",
    icon: "🎓",
    type: "academic",
  },
  {
    title: "Web Developer Intern",
    description: "Completed internship at SkillCraft Technology — built 7+ responsive web apps using React.",
    date: "Aug–Sep 2025",
    icon: "💼",
    type: "career",
  },
  {
    title: "AI Strategy Intern",
    description: "Completed 6-week AI & Business Intelligence internship with IBM SkillsBuild & CSRBOX.",
    date: "Mar–Apr 2026",
    icon: "🤖",
    type: "career",
  },
  {
    title: "5 Projects Deployed",
    description: "Deployed 5 production-ready projects on Vercel including a full-stack inventory system.",
    date: "2024 – 2026",
    icon: "🚀",
    type: "project",
  },
  {
    title: "DSA Progress",
    description: "Actively solving DSA problems on LeetCode and GeeksforGeeks in C++.",
    date: "2024 – Present",
    icon: "⚡",
    type: "skill",
  },
  {
    title: "Open Source Contributor",
    description: "Building and sharing projects publicly on GitHub with growing community engagement.",
    date: "2024 – Present",
    icon: "🌍",
    type: "community",
  },
]

export const githubUsername = "satyajit9178"

export const socialLinks = [
  { name: "GitHub",       icon: "github",    url: "https://github.com/satyajit9178",                        bg: "#1a1a1a" },
  { name: "LinkedIn",     icon: "linkedin",  url: "https://linkedin.com/in/satyajit-sahoo-0636a5297",       bg: "#0A66C2" },
  { name: "Twitter",      icon: "twitter",   url: "https://twitter.com/Satyajit81170",                      bg: "#1DA1F2" },
  { name: "YouTube",      icon: "youtube",   url: "https://youtube.com/@satyajit91",                        bg: "#FF0000" },
  { name: "Instagram",    icon: "instagram", url: "https://www.instagram.com/ll_satyajit_ll/",              bg: "#E1306C" },
  { name: "Facebook",     icon: "facebook",  url: "https://www.facebook.com/satyajit9178/",                 bg: "#1877F2" },
  { name: "LeetCode",     icon: "code",      url: "https://leetcode.com/u/satyajits/",                      bg: "#FFA116" },
  { name: "GeeksForGeeks",icon: "terminal",  url: "https://www.geeksforgeeks.org/profile/satyajio394",      bg: "#2F8D46" },
  { name: "HackerRank",   icon: "award",     url: "https://www.hackerrank.com/profile/satyajits104",        bg: "#2EC866" },
]
