import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronDown, FileCode, FileJson, FileText, File, FolderOpen, Folder, X } from 'lucide-react'
import { useApp, FILES } from '../context/AppContext'

const FILE_ICON_MAP = {
  'js':   { icon: FileCode, color: '#dcdcaa' },
  'jsx':  { icon: FileCode, color: '#4fc3f7' },
  'ts':   { icon: FileCode, color: '#569cd6' },
  'json': { icon: FileJson, color: '#dcdcaa' },
  'md':   { icon: FileText, color: '#6a9955' },
  'pdf':  { icon: File,     color: '#f44747' },
}

function getFileInfo(filename) {
  const ext = filename.split('.').pop()
  return FILE_ICON_MAP[ext] || { icon: File, color: '#d4d4d4' }
}

export default function Explorer() {
  const { activeFile, openFile, explorerOpen, setExplorerOpen, isMobile, mobileDrawer, setMobileDrawer } = useApp()
  const [expanded, setExpanded] = useState({ portfolio: true })

  const isOpen = isMobile ? mobileDrawer : explorerOpen
  const width = isMobile ? '100%' : 220

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/60"
              onClick={() => setMobileDrawer(false)}
            />
          )}

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`shrink-0 overflow-hidden flex flex-col z-30 ${isMobile ? 'fixed left-0 top-0 bottom-0' : 'relative'}`}
            style={{
              background: '#252526',
              borderRight: '1px solid #3e3e42',
              width: isMobile ? 260 : undefined,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2 shrink-0"
                 style={{ borderBottom: '1px solid #3e3e42' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#bbbcbd', letterSpacing: '0.1em' }}>
                Explorer
              </span>
              <button
                onClick={() => isMobile ? setMobileDrawer(false) : setExplorerOpen(false)}
                className="p-0.5 rounded hover:bg-white/10 transition-colors"
                style={{ color: '#858585' }}
              >
                <X size={14} />
              </button>
            </div>

            {/* File tree */}
            <div className="flex-1 overflow-y-auto py-1 select-none">
              {/* PORTFOLIO folder */}
              <button
                onClick={() => setExpanded(p => ({ ...p, portfolio: !p.portfolio }))}
                className="w-full flex items-center gap-1 px-2 py-0.5 text-xs font-semibold hover:bg-white/5 transition-colors"
                style={{ color: '#bbbcbd' }}
              >
                {expanded.portfolio ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                <FolderOpen size={14} style={{ color: '#e8ab5c' }} />
                <span className="uppercase tracking-wider text-xs" style={{ letterSpacing: '0.08em' }}>Portfolio</span>
              </button>

              <AnimatePresence>
                {expanded.portfolio && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4">
                      {FILES.map((file) => {
                        const { icon: Icon, color } = getFileInfo(file.label)
                        const isActive = activeFile === file.id
                        return (
                          <motion.button
                            key={file.id}
                            onClick={() => openFile(file.id)}
                            whileHover={{ x: 2 }}
                            className="w-full flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors text-left"
                            style={{
                              background: isActive ? 'rgba(0,122,204,0.15)' : 'transparent',
                              color: isActive ? '#d4d4d4' : '#8a8a8a',
                              borderLeft: isActive ? '1px solid #007ACC' : '1px solid transparent',
                            }}
                          >
                            <Icon size={13} style={{ color, flexShrink: 0 }} />
                            <span className="truncate font-mono">{file.label}</span>
                            {isActive && (
                              <span className="ml-auto text-xs shrink-0 px-1 rounded"
                                    style={{ background: '#007ACC20', color: '#007ACC', fontSize: '10px' }}>
                                {file.lang}
                              </span>
                            )}
                          </motion.button>
                        )
                      })}

                      {/* Static extra files */}
                      <motion.button
                        whileHover={{ x: 2 }}
                        onClick={() => window.open('https://drive.google.com/file/d/1a07PPyoZFR1b7DC6SCWujoVRF5cmNuZq/view?usp=sharing', '_blank')}
                        className="w-full flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors text-left"
                        style={{ color: '#6e6e6e' }}
                      >
                        <File size={13} style={{ color: '#f44747', flexShrink: 0 }} />
                        <span className="truncate font-mono">resume.pdf</span>
                        <span className="ml-auto text-xs opacity-50">↗</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider + git section */}
              <div className="mt-3 px-3">
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#4a4a4a', letterSpacing: '0.08em' }}>
                  Source Control
                </div>
                <div className="text-xs flex items-center gap-2 px-1 py-0.5" style={{ color: '#6e7681' }}>
                  <span style={{ color: '#6a9955' }}>●</span>
                  <span className="font-mono">main</span>
                  <span style={{ color: '#4a4a4a' }}>↑ 1</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {['M about.js', 'M projects.jsx', 'A achievements.md'].map((line, i) => (
                    <div key={i} className="flex items-center gap-2 px-1 text-xs font-mono" style={{ color: '#6e7681' }}>
                      <span style={{ color: line.startsWith('M') ? '#dcdcaa' : '#6a9955' }}>{line[0]}</span>
                      <span>{line.slice(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer hint */}
            <div className="px-3 py-2 text-xs shrink-0" style={{ color: '#4a4a4a', borderTop: '1px solid #3e3e42' }}>
              Ctrl+P — Command Palette
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
