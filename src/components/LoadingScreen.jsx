import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOT_MESSAGES = [
  { delay: 0,    text: '> Initializing portfolio environment...',    color: '#4ec9b0' },
  { delay: 400,  text: '> Loading modules: react@18, framer-motion', color: '#569cd6' },
  { delay: 800,  text: '> Compiling components...',                  color: '#d4d4d4' },
  { delay: 1100, text: '> Loading developer profile...',             color: '#dcdcaa' },
  { delay: 1400, text: '> Fetching projects from GitHub...',         color: '#d4d4d4' },
  { delay: 1700, text: '> Setting up workspace...',                  color: '#d4d4d4' },
  { delay: 2000, text: '✓ System ready. Welcome to Satyajit\'s portfolio.', color: '#6a9955' },
]

export default function LoadingScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    BOOT_MESSAGES.forEach((msg, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, msg])
        setProgress(Math.round(((i + 1) / BOOT_MESSAGES.length) * 100))
        if (i === BOOT_MESSAGES.length - 1) {
          setTimeout(() => {
            setDone(true)
            setTimeout(onComplete, 500)
          }, 400)
        }
      }, msg.delay)
    })
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: '#0d0d0d' }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl"
               style={{ background: 'linear-gradient(135deg, #007ACC, #4fc3f7)', boxShadow: '0 0 30px rgba(0,122,204,0.5)' }}>
            {'</>'}
          </div>
          <span className="text-2xl font-bold tracking-tight" style={{ color: '#d4d4d4', fontFamily: 'JetBrains Mono' }}>
            satyajit<span style={{ color: '#007ACC' }}>.</span>dev
          </span>
        </div>
        <p className="text-sm" style={{ color: '#6e7681' }}>Loading workspace...</p>
      </motion.div>

      {/* Terminal output */}
      <div className="w-full max-w-lg px-6">
        <div className="rounded-lg overflow-hidden border" style={{ borderColor: '#3e3e42', background: '#1e1e1e' }}>
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: '#3e3e42', background: '#252526' }}>
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
            <span className="ml-2 text-xs" style={{ color: '#6e7681' }}>bash — portfolio boot</span>
          </div>
          <div className="p-4 min-h-[180px] font-mono text-sm space-y-1">
            <AnimatePresence>
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="leading-relaxed"
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>
            {!done && (
              <span className="inline-block w-2 h-4 ml-1 animate-blink" style={{ background: '#aeafad', verticalAlign: 'middle' }} />
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1" style={{ color: '#6e7681' }}>
            <span>Building portfolio...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 rounded-full overflow-hidden" style={{ background: '#3e3e42' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #007ACC, #4fc3f7)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
