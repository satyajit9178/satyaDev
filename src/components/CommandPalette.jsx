import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, FileCode, FileJson, FileText, File, ArrowRight } from 'lucide-react'
import { useApp, FILES } from '../context/AppContext'

function getIcon(filename) {
  const ext = filename.split('.').pop()
  const map = { js: FileCode, jsx: FileCode, ts: FileCode, json: FileJson, md: FileText }
  return map[ext] || File
}

function getColor(filename) {
  const ext = filename.split('.').pop()
  const map = { js: '#dcdcaa', jsx: '#4fc3f7', ts: '#569cd6', json: '#dcdcaa', md: '#6a9955', pdf: '#f44747' }
  return map[ext] || '#d4d4d4'
}

const EXTRA_COMMANDS = [
  { id: '__github', label: '> Open GitHub Profile', action: () => window.open('https://github.com/satyajit9178', '_blank') },
  { id: '__linkedin', label: '> Open LinkedIn', action: () => window.open('https://linkedin.com/in/satyajit-sahoo-0636a5297', '_blank') },
  { id: '__resume', label: '> Download Resume', action: () => window.open('https://drive.google.com/file/d/1Eziaj53IOUmd2wQ9vhObHBnkk_6dsqRp/view?usp=sharing', '_blank') },
]

export default function CommandPalette() {
  const { cmdPaletteOpen, setCmdPaletteOpen, openFile } = useApp()
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    if (cmdPaletteOpen) {
      setQuery('')
      setSelected(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [cmdPaletteOpen])

  const allItems = [
    ...FILES.map(f => ({
      id: f.id,
      label: f.label,
      section: f.section,
      type: 'file',
      action: () => { openFile(f.id); setCmdPaletteOpen(false) }
    })),
    ...EXTRA_COMMANDS.map(c => ({
      ...c,
      type: 'command',
      action: () => { c.action(); setCmdPaletteOpen(false) }
    }))
  ]

  const filtered = query
    ? allItems.filter(item => item.label.toLowerCase().includes(query.toLowerCase()) || (item.section || '').toLowerCase().includes(query.toLowerCase()))
    : allItems

  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(p => Math.min(p + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(p => Math.max(p - 1, 0)) }
    if (e.key === 'Enter' && filtered[selected]) filtered[selected].action()
  }

  return (
    <AnimatePresence>
      {cmdPaletteOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setCmdPaletteOpen(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-lg rounded-lg overflow-hidden shadow-2xl"
            style={{ background: '#252526', border: '1px solid #3e3e42', maxWidth: 580 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid #3e3e42' }}>
              <Search size={16} style={{ color: '#858585', flexShrink: 0 }} />
              <input
                ref={inputRef}
                value={query}
                onChange={e => { setQuery(e.target.value); setSelected(0) }}
                onKeyDown={onKey}
                placeholder="Search files or commands..."
                className="flex-1 bg-transparent outline-none border-none font-mono text-sm"
                style={{ color: '#d4d4d4', fontSize: 14 }}
              />
              <kbd className="text-xs px-1.5 py-0.5 rounded" style={{ background: '#3e3e42', color: '#858585' }}>ESC</kbd>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <div className="px-4 py-3 text-sm" style={{ color: '#858585' }}>No results found</div>
              ) : (
                filtered.map((item, i) => {
                  const Icon = item.type === 'file' ? getIcon(item.label) : ArrowRight
                  const color = item.type === 'file' ? getColor(item.label) : '#007ACC'
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelected(i)}
                      className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors"
                      style={{
                        background: i === selected ? 'rgba(0,122,204,0.15)' : 'transparent',
                        color: '#d4d4d4',
                      }}
                    >
                      <Icon size={14} style={{ color, flexShrink: 0 }} />
                      <span className="font-mono">{item.label}</span>
                      {item.section && (
                        <span className="ml-auto text-xs" style={{ color: '#858585' }}>{item.section}</span>
                      )}
                    </button>
                  )
                })
              )}
            </div>

            <div className="px-4 py-2 text-xs flex gap-4" style={{ borderTop: '1px solid #3e3e42', color: '#858585' }}>
              <span>↑↓ Navigate</span>
              <span>↵ Open</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
