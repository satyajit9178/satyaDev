import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'

export default function Notifications() {
  const { notifications } = useApp()

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2 rounded-lg text-xs font-mono shadow-xl"
            style={{
              background: '#252526',
              border: '1px solid #3e3e42',
              color: n.type === 'error' ? '#f44747' : '#d4d4d4',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            {n.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
