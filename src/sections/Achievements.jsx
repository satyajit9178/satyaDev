import React from 'react'
import { motion } from 'framer-motion'
import { achievements } from '../data/portfolio'

const TYPE_META = {
  academic:  { color: '#4fc3f7', bg: 'rgba(79,195,247,0.1)',   label: 'Academic'   },
  career:    { color: '#dcdcaa', bg: 'rgba(220,220,170,0.1)',  label: 'Career'     },
  project:   { color: '#c586c0', bg: 'rgba(197,134,192,0.1)', label: 'Project'    },
  skill:     { color: '#ce9178', bg: 'rgba(206,145,120,0.1)', label: 'Skill'      },
  community: { color: '#6a9955', bg: 'rgba(106,153,85,0.1)',  label: 'Community'  },
}

const STATS = [
  { label: 'CGPA',         value: '8.99',  unit: '/ 10',   color: '#4fc3f7' },
  { label: 'Projects',     value: '5+',    unit: 'live',   color: '#c586c0' },
  { label: 'Internships',  value: '2',     unit: 'done',   color: '#dcdcaa' },
  { label: 'Technologies', value: '16+',   unit: 'stack',  color: '#6a9955' },
]

export default function Achievements() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-6">

        {/* Markdown-style header */}
        <div className="mb-6 font-mono text-sm leading-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
            <span style={{ color: '#dcdcaa' }} className="font-bold text-lg"># achievements.md</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span style={{ color: '#858585' }}>## Milestones, Recognitions & Progress</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            <div className="h-px mt-2" style={{ background: '#3e3e42' }} />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          {STATS.map(({ label, value, unit, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 + i * 0.05 }}
              className="text-center rounded-lg p-4"
              style={{ background: '#252526', border: `1px solid ${color}30` }}
            >
              <div className="font-mono font-bold mb-0.5" style={{ color, fontSize: 26 }}>{value}</div>
              <div className="text-xs font-mono" style={{ color: '#858585' }}>{unit}</div>
              <div className="text-xs mt-0.5" style={{ color: '#6e7681' }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div className="space-y-3">
          {achievements.map((ach, i) => {
            const meta = TYPE_META[ach.type] || TYPE_META.skill
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.35 }}
                whileHover={{ x: 4 }}
                className="rounded-lg overflow-hidden"
                style={{ background: '#252526', border: '1px solid #3e3e42' }}
              >
                <div className="flex items-start gap-3 p-4">
                  {/* Icon */}
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                    style={{ background: meta.bg, border: `1px solid ${meta.color}30` }}
                  >
                    {ach.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                      <div>
                        {/* Markdown-style heading */}
                        <span className="font-mono text-sm font-semibold" style={{ color: '#d4d4d4' }}>
                          <span style={{ color: meta.color }}>### </span>
                          {ach.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-mono"
                          style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.color}30` }}
                        >
                          {meta.label}
                        </span>
                        <span className="text-xs font-mono" style={{ color: '#6e7681' }}>{ach.date}</span>
                      </div>
                    </div>
                    {/* Markdown-style description */}
                    <p className="text-xs font-mono leading-relaxed" style={{ color: '#8a8a8a' }}>
                      <span style={{ color: '#4a4a4a' }}>{'> '}</span>
                      {ach.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Markdown footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8 font-mono text-xs space-y-1"
          style={{ color: '#4a4a4a', borderTop: '1px solid #3e3e42', paddingTop: 16 }}
        >
          <div>---</div>
          <div style={{ color: '#6a9955' }}>*"The best way to predict the future is to build it."*</div>
          <div className="mt-2">
            <span style={{ color: '#858585' }}>Last updated: </span>
            <span style={{ color: '#007ACC' }}>May 2026</span>
            <span style={{ color: '#858585' }}> · Branch: </span>
            <span style={{ color: '#6a9955' }}>main</span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
