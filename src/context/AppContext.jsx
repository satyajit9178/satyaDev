import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const AppContext = createContext(null)

export const FILES = [
  { id: 'about',        label: 'about.js',         icon: '📄', lang: 'JS',   section: 'About' },
  { id: 'skills',       label: 'skills.ts',         icon: '📘', lang: 'TS',   section: 'Skills' },
  { id: 'projects',     label: 'projects.jsx',      icon: '⚛️',  lang: 'JSX',  section: 'Projects' },
  { id: 'experience',   label: 'experience.md',     icon: '📋', lang: 'MD',   section: 'Experience' },
  { id: 'contact',      label: 'contact.json',      icon: '📬', lang: 'JSON', section: 'Contact' },
  { id: 'achievements', label: 'achievements.md',   icon: '🏆', lang: 'MD',   section: 'Achievements' },
]

export const ACTIVITY_ICONS = [
  { id: 'about',      section: 'about' },
  { id: 'skills',     section: 'skills' },
  { id: 'projects',   section: 'projects' },
  { id: 'experience', section: 'experience' },
  { id: 'contact',    section: 'contact' },
]

export function AppProvider({ children }) {
  const [activeFile, setActiveFile]       = useState('about')
  const [openTabs, setOpenTabs]           = useState(['about'])
  const [explorerOpen, setExplorerOpen]   = useState(true)
  const [terminalOpen, setTerminalOpen]   = useState(true)
  const [terminalHeight, setTerminalHeight] = useState(200)
  const [terminalMax, setTerminalMax]     = useState(false)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [isMobile, setIsMobile]           = useState(false)
  const [isTablet, setIsTablet]           = useState(false)
  const [mobileDrawer, setMobileDrawer]   = useState(false)
  const [notifications, setNotifications] = useState([])
  const [currentTime, setCurrentTime]     = useState(new Date())

  // Responsive detection
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setIsMobile(w < 768)
      setIsTablet(w >= 768 && w < 1024)
      if (w < 768) setExplorerOpen(false)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Clock
  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  // Command palette shortcut
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault()
        setCmdPaletteOpen(p => !p)
      }
      if (e.key === 'Escape') {
        setCmdPaletteOpen(false)
        setMobileDrawer(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openFile = useCallback((fileId) => {
    setActiveFile(fileId)
    setOpenTabs(prev => prev.includes(fileId) ? prev : [...prev, fileId])
    if (isMobile) setMobileDrawer(false)
  }, [isMobile])

  const closeTab = useCallback((fileId, e) => {
    e?.stopPropagation()
    setOpenTabs(prev => {
      const next = prev.filter(t => t !== fileId)
      if (next.length === 0) return ['about']
      if (activeFile === fileId) setActiveFile(next[next.length - 1])
      return next
    })
  }, [activeFile])

  const addNotification = useCallback((msg, type = 'info') => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, msg, type }])
    setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), 4000)
  }, [])

  const value = {
    activeFile, openFile,
    openTabs, closeTab,
    explorerOpen, setExplorerOpen,
    terminalOpen, setTerminalOpen,
    terminalHeight, setTerminalHeight,
    terminalMax, setTerminalMax,
    cmdPaletteOpen, setCmdPaletteOpen,
    isMobile, isTablet,
    mobileDrawer, setMobileDrawer,
    notifications, addNotification,
    currentTime,
    FILES, ACTIVITY_ICONS,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be inside AppProvider')
  return ctx
}
