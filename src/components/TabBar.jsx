import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileCode, FileJson, FileText, File } from 'lucide-react'
import { useApp, FILES } from '../context/AppContext'

function getTabIcon(filename) {
  const ext = filename.split('.').pop()
  const map = {
    js:   { icon: FileCode, color: '#dcdcaa' },
    jsx:  { icon: FileCode, color: '#4fc3f7' },
    ts:   { icon: FileCode, color: '#569cd6' },
    json: { icon: FileJson, color: '#dcdcaa' },
    md:   { icon: FileText, color: '#6a9955' },
    pdf:  { icon: File,     color: '#f44747' },
  }
  return map[ext] || { icon: File, color: '#d4d4d4' }
}

export default function TabBar() {
  const { openTabs, activeFile, openFile, closeTab } = useApp()

  const tabs = openTabs
    .map(id => FILES.find(f => f.id === id))
    .filter(Boolean)

  return (
    <div
      className="flex items-end overflow-x-auto no-scrollbar shrink-0"
      style={{ background: '#2d2d2d', borderBottom: '1px solid #1e1e1e', minHeight: 35, maxHeight: 35 }}
    >
      <AnimatePresence initial={false}>
        {tabs.map((file) => {
          const isActive = activeFile === file.id
          const { icon: Icon, color } = getTabIcon(file.label)
          return (
            <motion.div
              key={file.id}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center shrink-0"
            >
              <button
                onClick={() => openFile(file.id)}
                className="relative flex items-center gap-1.5 px-3 h-[35px] text-xs font-mono whitespace-nowrap transition-colors group"
                style={{
                  background: isActive ? '#1e1e1e' : 'transparent',
                  color: isActive ? '#d4d4d4' : '#858585',
                  borderRight: '1px solid #1e1e1e',
                  borderTop: isActive ? '1px solid #007ACC' : '1px solid transparent',
                  paddingTop: isActive ? 0 : 1,
                }}
              >
                <Icon size={13} style={{ color, flexShrink: 0 }} />
                <span>{file.label}</span>
                <button
                  onClick={(e) => closeTab(file.id, e)}
                  className="ml-1 p-0.5 rounded opacity-0 group-hover:opacity-100 hover:bg-white/10 transition-all"
                  style={{ color: '#858585' }}
                >
                  <X size={11} />
                </button>
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
      <div className="flex-1" style={{ borderBottom: '1px solid #3e3e42', height: 35 }} />
    </div>
  )
}
