import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User, Code2, FolderOpen, Briefcase, Mail, Trophy,
  Github, Settings, ChevronLeft, ChevronRight, FileText
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const TOP_ITEMS = [
  { id: 'about',        icon: User,        label: 'About Me',    file: 'about' },
  { id: 'skills',       icon: Code2,       label: 'Skills',      file: 'skills' },
  { id: 'projects',     icon: FolderOpen,  label: 'Projects',    file: 'projects' },
  { id: 'experience',   icon: Briefcase,   label: 'Experience',  file: 'experience' },
  { id: 'contact',      icon: Mail,        label: 'Contact',     file: 'contact' },
  { id: 'achievements', icon: Trophy,      label: 'Achievements',file: 'achievements' },
]

const BOTTOM_ITEMS = [
  { id: 'github',   icon: Github,   label: 'GitHub Profile', href: 'https://github.com/satyajit9178' },
  { id: 'resume',   icon: FileText, label: 'View Resume',    href: 'https://drive.google.com/file/d/1a07PPyoZFR1b7DC6SCWujoVRF5cmNuZq/view?usp=sharing' },
  { id: 'settings', icon: Settings, label: 'Settings',       action: 'settings' },
]

export default function ActivityBar() {
  const { activeFile, openFile, explorerOpen, setExplorerOpen, isMobile } = useApp()
  const [tooltip, setTooltip] = useState(null)

  if (isMobile) return null

  const handleClick = (item) => {
    if (item.file) {
      openFile(item.file)
      // Toggle explorer on same file click
      if (activeFile === item.file) {
        setExplorerOpen(p => !p)
      } else {
        setExplorerOpen(true)
      }
    }
  }

  return (
    <div
      className="flex flex-col items-center py-2 z-10 relative shrink-0"
      style={{ width: 48, background: '#333333', borderRight: '1px solid #1e1e1e' }}
    >
      {/* Top icons */}
      <div className="flex flex-col gap-1 w-full">
        {TOP_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = activeFile === item.id
          return (
            <div key={item.id} className="relative group">
              <motion.button
                onClick={() => handleClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center py-3 relative transition-colors"
                style={{
                  color: isActive ? '#ffffff' : '#858585',
                  borderLeft: isActive ? '2px solid #007ACC' : '2px solid transparent',
                }}
                onMouseEnter={() => setTooltip(item.id)}
                onMouseLeave={() => setTooltip(null)}
              >
                <Icon size={22} strokeWidth={isActive ? 1.8 : 1.5} />
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="actbar-indicator"
                    className="absolute inset-0"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  />
                )}
              </motion.button>
              {/* Tooltip */}
              {tooltip === item.id && (
                <motion.div
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-50 whitespace-nowrap pointer-events-none"
                >
                  <div className="px-2 py-1 rounded text-xs font-mono"
                       style={{ background: '#252526', color: '#d4d4d4', border: '1px solid #3e3e42', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                    {item.label}
                  </div>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      {/* Divider */}
      <div className="flex-1" />
      <div className="w-8 h-px mb-2" style={{ background: '#3e3e42' }} />

      {/* Bottom icons */}
      <div className="flex flex-col gap-1 w-full">
        {BOTTOM_ITEMS.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="relative group">
              <motion.button
                onClick={() => {
                  if (item.href) window.open(item.href, '_blank')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center py-3 transition-colors"
                style={{ color: '#858585' }}
                onMouseEnter={() => setTooltip(item.id)}
                onMouseLeave={() => setTooltip(null)}
              >
                <Icon size={20} strokeWidth={1.5} />
              </motion.button>
              {tooltip === item.id && (
                <motion.div
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-50 whitespace-nowrap pointer-events-none"
                >
                  <div className="px-2 py-1 rounded text-xs font-mono"
                       style={{ background: '#252526', color: '#d4d4d4', border: '1px solid #3e3e42', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                    {item.label}
                  </div>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
