import React from 'react'
import { GitBranch, Wifi, AlertCircle, CheckCircle, Clock, FileCode } from 'lucide-react'
import { useApp, FILES } from '../context/AppContext'

export default function StatusBar() {
  const { activeFile, currentTime, terminalOpen, setTerminalOpen, isMobile } = useApp()
  const file = FILES.find(f => f.id === activeFile)

  const timeStr = currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })
  const dateStr = currentTime.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })

  return (
    <div
      className="flex items-center justify-between px-3 shrink-0 select-none"
      style={{
        height: 22,
        background: '#007ACC',
        color: 'rgba(255,255,255,0.9)',
        fontSize: 11,
        fontFamily: 'JetBrains Mono, monospace',
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 py-0.5 rounded cursor-pointer transition-colors">
          <GitBranch size={12} />
          <span>main</span>
        </div>
        {!isMobile && (
          <div className="flex items-center gap-1 opacity-80">
            <CheckCircle size={11} />
            <span>0 errors</span>
          </div>
        )}
        {!isMobile && (
          <div className="flex items-center gap-1 opacity-80">
            <span>⚡</span>
            <span>React 18</span>
          </div>
        )}
      </div>

      {/* Center - current file */}
      {file && !isMobile && (
        <div className="flex items-center gap-1 opacity-80">
          <FileCode size={11} />
          <span>{file.label}</span>
          <span className="opacity-60 ml-1">{file.lang}</span>
        </div>
      )}

      {/* Right */}
      <div className="flex items-center gap-3">
        {!isMobile && (
          <button
            onClick={() => setTerminalOpen(p => !p)}
            className="flex items-center gap-1 hover:bg-white/10 px-1 py-0.5 rounded cursor-pointer transition-colors opacity-80"
          >
            <span>{terminalOpen ? '⊟' : '⊞'}</span>
            <span>Terminal</span>
          </button>
        )}
        <div className="flex items-center gap-1 opacity-80">
          <Wifi size={11} />
          <span>Online</span>
        </div>
        <div className="flex items-center gap-1 opacity-70">
          <Clock size={11} />
          <span>{timeStr}</span>
          {!isMobile && <span className="opacity-60">{dateStr}</span>}
        </div>
        {!isMobile && (
          <div className="opacity-70">
            <span>UTF-8</span>
          </div>
        )}
        <div className="opacity-80 px-1 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.15)' }}>
          <span>✓ Deployed</span>
        </div>
      </div>
    </div>
  )
}
