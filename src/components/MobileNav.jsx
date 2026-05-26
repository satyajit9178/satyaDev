import React from 'react'
import { motion } from 'framer-motion'
import { User, Code2, FolderOpen, Briefcase, Mail } from 'lucide-react'
import { useApp } from '../context/AppContext'

const NAV = [
  { id: 'about',      icon: User,       label: 'About' },
  { id: 'skills',     icon: Code2,      label: 'Skills' },
  { id: 'projects',   icon: FolderOpen, label: 'Projects' },
  { id: 'experience', icon: Briefcase,  label: 'Experience' },
  { id: 'contact',    icon: Mail,       label: 'Contact' },
]

export default function MobileNav() {
  const { activeFile, openFile } = useApp()

  return (
    <div
      className="flex items-stretch shrink-0"
      style={{ background: '#252526', borderTop: '1px solid #3e3e42', height: 56 }}
    >
      {NAV.map((item) => {
        const Icon = item.icon
        const isActive = activeFile === item.id
        return (
          <button
            key={item.id}
            onClick={() => openFile(item.id)}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors relative"
            style={{ color: isActive ? '#4fc3f7' : '#6e7681' }}
          >
            {isActive && (
              <motion.div
                layoutId="mobile-indicator"
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: '#007ACC' }}
              />
            )}
            <Icon size={18} strokeWidth={isActive ? 2 : 1.5} />
            <span style={{ fontSize: 10 }}>{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
