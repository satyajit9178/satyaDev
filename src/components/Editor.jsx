import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'
import Achievements from '../sections/Achievements'

const SECTION_MAP = {
  about:        About,
  skills:       Skills,
  projects:     Projects,
  experience:   Experience,
  contact:      Contact,
  achievements: Achievements,
}

const WELCOME_FILE = 'about'

// Breadcrumb path for each section
const BREADCRUMBS = {
  about:        ['Portfolio', 'about.js'],
  skills:       ['Portfolio', 'skills.ts'],
  projects:     ['Portfolio', 'projects.jsx'],
  experience:   ['Portfolio', 'experience.md'],
  contact:      ['Portfolio', 'contact.json'],
  achievements: ['Portfolio', 'achievements.md'],
}

export default function Editor() {
  const { activeFile, openTabs, isMobile } = useApp()
  const scrollRef = useRef(null)

  // Reset scroll on file change
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [activeFile])

  const ActiveSection = SECTION_MAP[activeFile] || SECTION_MAP[WELCOME_FILE]
  const crumbs = BREADCRUMBS[activeFile] || BREADCRUMBS[WELCOME_FILE]

  return (
    <div className="flex-1 flex flex-col overflow-hidden min-w-0">
      {/* Breadcrumb bar */}
      {!isMobile && (
        <div
          className="flex items-center px-4 gap-1 shrink-0 text-xs font-mono"
          style={{ height: 22, background: '#1e1e1e', borderBottom: '1px solid #2d2d2d', color: '#858585' }}
        >
          {crumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              <span style={{ color: i === crumbs.length - 1 ? '#d4d4d4' : '#6e7681' }}>{crumb}</span>
              {i < crumbs.length - 1 && <span style={{ color: '#3e3e42' }}>&nbsp;›&nbsp;</span>}
            </React.Fragment>
          ))}
          <span className="ml-2 cursor-blink" />
        </div>
      )}

      {/* Line number gutter + content */}
      <div ref={scrollRef} className="flex-1 flex overflow-hidden">
        {/* Line number gutter - decorative */}
        {!isMobile && (
          <div
            className="shrink-0 select-none flex flex-col pt-6 font-mono text-xs leading-7 text-right pr-4"
            style={{
              width: 52,
              color: '#3e3e42',
              background: '#1e1e1e',
              borderRight: '1px solid #2a2a2a',
              overflowY: 'hidden',
            }}
          >
            {Array.from({ length: 60 }, (_, i) => (
              <div key={i} style={{ lineHeight: '28px', fontSize: 11 }}>{i + 1}</div>
            ))}
          </div>
        )}

        {/* Main editor content */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFile}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute inset-0 overflow-y-auto"
              style={{ background: '#1e1e1e' }}
            >
              <ActiveSection />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
