import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AppProvider, useApp } from './context/AppContext'
import LoadingScreen from './components/LoadingScreen'
import ActivityBar from './components/ActivityBar'
import Explorer from './components/Explorer'
import TabBar from './components/TabBar'
import Editor from './components/Editor'
import Terminal from './components/Terminal'
import StatusBar from './components/StatusBar'
import CommandPalette from './components/CommandPalette'
import MobileNav from './components/MobileNav'
import Notifications from './components/Notifications'

function IDE() {
  const { isMobile, terminalOpen, explorerOpen } = useApp()

  return (
    <div
      className="flex flex-col"
      style={{ height: '100dvh', background: '#1e1e1e', overflow: 'hidden' }}
    >
      {/* ── Main workspace ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Activity bar (desktop only) */}
        <ActivityBar />

        {/* Explorer sidebar */}
        <Explorer />

        {/* Editor column */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">

          {/* Tab bar (desktop / tablet) */}
          {!isMobile && <TabBar />}

          {/* Editor + Terminal */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Editor />
            <AnimatePresence>
              {terminalOpen && !isMobile && <Terminal key="terminal" />}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <StatusBar />

      {/* Mobile bottom nav */}
      {isMobile && <MobileNav />}

      {/* Overlays */}
      <CommandPalette />
      <Notifications />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <AppProvider>
      <AnimatePresence mode="wait">
        {loading
          ? <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
          : <IDE key="ide" />
        }
      </AnimatePresence>
    </AppProvider>
  )
}
