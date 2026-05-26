import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Square, X, Terminal as TermIcon, ChevronUp, ChevronDown } from 'lucide-react'
import { useApp } from '../context/AppContext'

const STARTUP_SEQUENCE = [
  { text: 'Satyajit\'s Portfolio Terminal v1.0.0', color: '#4fc3f7', delay: 0 },
  { text: '──────────────────────────────────────', color: '#3e3e42', delay: 100 },
  { text: '> Initializing portfolio...', color: '#6a9955', delay: 300 },
  { text: '> Loading developer profile: satyajit@outr.ac.in', color: '#d4d4d4', delay: 600 },
  { text: '> Loading projects... [5 found]', color: '#d4d4d4', delay: 900 },
  { text: '> Compiling skills database...', color: '#d4d4d4', delay: 1200 },
  { text: '> Setting up workspace on main branch...', color: '#d4d4d4', delay: 1500 },
  { text: '✓ System ready. Type "help" for available commands.', color: '#6a9955', delay: 1900 },
  { text: '', color: '', delay: 2000 },
]

const COMMANDS = {
  help: {
    output: [
      { text: 'Available commands:', color: '#4fc3f7' },
      { text: '  about      — View developer profile', color: '#d4d4d4' },
      { text: '  skills     — List technical skills', color: '#d4d4d4' },
      { text: '  projects   — Show all projects', color: '#d4d4d4' },
      { text: '  experience — View work experience', color: '#d4d4d4' },
      { text: '  contact    — Get contact information', color: '#d4d4d4' },
      { text: '  whoami     — Developer summary', color: '#d4d4d4' },
      { text: '  git log    — Show commit history', color: '#d4d4d4' },
      { text: '  clear      — Clear terminal', color: '#d4d4d4' },
    ]
  },
  about: {
    output: [
      { text: '$ cat about.js', color: '#858585' },
      { text: 'const developer = {', color: '#d4d4d4' },
      { text: '  name: "Satyajit Sahoo",', color: '#d4d4d4' },
      { text: '  role: "Frontend Developer",', color: '#d4d4d4' },
      { text: '  location: "Bhubaneswar, Odisha, India",', color: '#d4d4d4' },
      { text: '  university: "OUTR",', color: '#d4d4d4' },
      { text: '  cgpa: 8.99,', color: '#d4d4d4' },
      { text: '  status: "Open to opportunities 🟢",', color: '#6a9955' },
      { text: '}', color: '#d4d4d4' },
    ]
  },
  skills: {
    output: [
      { text: '$ ls skills/', color: '#858585' },
      { text: 'Frontend:   React  JavaScript  HTML  CSS  Tailwind', color: '#4fc3f7' },
      { text: 'Languages:  C++  C  Java', color: '#569cd6' },
      { text: 'Tools:      Git  GitHub  Vite  VS Code  Vercel', color: '#dcdcaa' },
      { text: 'Database:   MySQL', color: '#ce9178' },
      { text: '', color: '' },
      { text: '→ Run "open skills" to view detailed breakdown', color: '#6a9955' },
    ]
  },
  projects: {
    output: [
      { text: '$ ls projects/ -la', color: '#858585' },
      { text: 'drwxr-xr-x  RSIMS              [React, Node.js, MySQL]    ✓ deployed', color: '#d4d4d4' },
      { text: 'drwxr-xr-x  TechBlog           [React, Vite, Tailwind]    ✓ deployed', color: '#d4d4d4' },
      { text: 'drwxr-xr-x  AIChatAssistant    [React, AI, JS]            ✓ deployed', color: '#d4d4d4' },
      { text: 'drwxr-xr-x  Portfolio-v1       [HTML, CSS, JS]            ✓ deployed', color: '#d4d4d4' },
      { text: 'drwxr-xr-x  LeetForces         [HTML, JS, API]            ✓ deployed', color: '#d4d4d4' },
      { text: '', color: '' },
      { text: '5 projects total, all deployed on Vercel', color: '#6a9955' },
    ]
  },
  experience: {
    output: [
      { text: '$ cat experience.md', color: '#858585' },
      { text: '# Work Experience', color: '#4fc3f7' },
      { text: '', color: '' },
      { text: '## SkillCraft Technology — Web Developer Intern', color: '#dcdcaa' },
      { text: '   Aug 2025 – Sep 2025 | Remote', color: '#858585' },
      { text: '   Built 7+ responsive React apps', color: '#d4d4d4' },
      { text: '', color: '' },
      { text: '## IBM SkillsBuild — AI Strategy Intern', color: '#dcdcaa' },
      { text: '   Mar 2026 – Apr 2026 | Remote (AICTE)', color: '#858585' },
      { text: '   6-week AI & Business Intelligence program', color: '#d4d4d4' },
    ]
  },
  contact: {
    output: [
      { text: '$ cat contact.json', color: '#858585' },
      { text: '{', color: '#d4d4d4' },
      { text: '  "email": "satyajits104@gmail.com",', color: '#ce9178' },
      { text: '  "github": "github.com/satyajit9178",', color: '#ce9178' },
      { text: '  "linkedin": "linkedin.com/in/satyajit-sahoo-0636a5297",', color: '#ce9178' },
      { text: '  "status": "Available for internships & projects"', color: '#6a9955' },
      { text: '}', color: '#d4d4d4' },
    ]
  },
  whoami: {
    output: [
      { text: 'satyajit@portfolio:~$', color: '#4fc3f7' },
      { text: 'Satyajit Sahoo — CSE Student & Frontend Developer', color: '#d4d4d4' },
      { text: 'OUTR, Bhubaneswar | CGPA: 8.99/10', color: '#858585' },
      { text: 'Loves: React, DSA, building things', color: '#6a9955' },
    ]
  },
  'git log': {
    output: [
      { text: 'commit a7f3c91 (HEAD -> main)', color: '#ce9178' },
      { text: 'Date:   May 2026', color: '#858585' },
      { text: '    feat: add IBM SkillsBuild experience', color: '#d4d4d4' },
      { text: '', color: '' },
      { text: 'commit 9b2e847', color: '#ce9178' },
      { text: 'Date:   Apr 2026', color: '#858585' },
      { text: '    feat: complete AI internship', color: '#d4d4d4' },
      { text: '', color: '' },
      { text: 'commit 3d8a214', color: '#ce9178' },
      { text: 'Date:   Sep 2025', color: '#858585' },
      { text: '    feat: add SkillCraft internship & 5 projects', color: '#d4d4d4' },
    ]
  },
}

export default function Terminal() {
  const { terminalOpen, setTerminalOpen, terminalHeight, setTerminalHeight, terminalMax, setTerminalMax, openFile } = useApp()
  const [lines, setLines] = useState([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const [started, setStarted] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const dragRef = useRef(null)

  // Startup sequence
  useEffect(() => {
    if (!terminalOpen || started) return
    setStarted(true)
    STARTUP_SEQUENCE.forEach(({ text, color, delay }) => {
      setTimeout(() => {
        setLines(prev => [...prev, { text, color, type: 'output' }])
      }, delay)
    })
  }, [terminalOpen, started])

  // Autoscroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const runCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    setLines(prev => [...prev, { text: `satyajit@portfolio:~$ ${cmd}`, color: '#4fc3f7', type: 'input' }])
    setHistory(prev => [cmd, ...prev])
    setHistoryIdx(-1)
    setInput('')

    if (trimmed === 'clear') {
      setTimeout(() => setLines([]), 50)
      return
    }

    if (COMMANDS[trimmed]) {
      setTimeout(() => {
        setLines(prev => [...prev, ...COMMANDS[trimmed].output])
      }, 50)
      // Navigate to section
      const navMap = { about: 'about', skills: 'skills', projects: 'projects', experience: 'experience', contact: 'contact' }
      if (navMap[trimmed]) setTimeout(() => openFile(navMap[trimmed]), 100)
      return
    }

    setTimeout(() => {
      setLines(prev => [...prev, { text: `bash: ${cmd}: command not found. Type "help" for commands.`, color: '#f44747', type: 'error' }])
    }, 50)
  }, [openFile])

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.trim()) runCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const nextIdx = Math.min(historyIdx + 1, history.length - 1)
      setHistoryIdx(nextIdx)
      setInput(history[nextIdx] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIdx = Math.max(historyIdx - 1, -1)
      setHistoryIdx(nextIdx)
      setInput(nextIdx === -1 ? '' : history[nextIdx] || '')
    }
  }

  // Drag to resize
  const onDragStart = (e) => {
    const startY = e.clientY
    const startH = terminalHeight
    const onMove = (ev) => {
      const delta = startY - ev.clientY
      const newH = Math.max(80, Math.min(500, startH + delta))
      setTerminalHeight(newH)
    }
    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  if (!terminalOpen) return null

  const displayHeight = terminalMax ? '100%' : terminalHeight

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: displayHeight, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="shrink-0 flex flex-col overflow-hidden"
      style={{ borderTop: '1px solid #3e3e42', background: '#1e1e1e' }}
    >
      {/* Drag handle */}
      <div
        className="resize-handle h-1 shrink-0 hover:bg-vsc-accent transition-colors"
        style={{ background: '#3e3e42' }}
        onMouseDown={onDragStart}
      />

      {/* Terminal header */}
      <div
        className="flex items-center px-3 shrink-0"
        style={{ height: 28, background: '#252526', borderBottom: '1px solid #3e3e42' }}
      >
        <div className="flex items-center gap-2 flex-1">
          <TermIcon size={12} style={{ color: '#858585' }} />
          <span className="text-xs font-mono" style={{ color: '#858585' }}>TERMINAL</span>
          <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: '#1e1e1e', color: '#4fc3f7', fontSize: 10 }}>
            bash
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setTerminalMax(p => !p)}
            className="p-1 rounded hover:bg-white/10 transition-colors"
            style={{ color: '#858585' }}
          >
            {terminalMax ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
          </button>
          <button
            onClick={() => setTerminalOpen(false)}
            className="p-1 rounded hover:bg-white/10 transition-colors"
            style={{ color: '#858585' }}
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Terminal content */}
      <div
        className="flex-1 overflow-y-auto p-3 font-mono text-xs leading-relaxed cursor-text"
        style={{ fontSize: 12, lineHeight: 1.6 }}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} style={{ color: line.color || '#d4d4d4' }}>
            {line.text || '\u00A0'}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center mt-1">
          <span style={{ color: '#4fc3f7', userSelect: 'none' }}>satyajit@portfolio:~$&nbsp;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="flex-1 bg-transparent outline-none border-none font-mono"
            style={{ color: '#d4d4d4', fontSize: 12, caretColor: '#aeafad' }}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  )
}
