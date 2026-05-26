import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { technologies } from '../data/portfolio'

const CATEGORIES = {
  frontend: { label: 'Frontend',  color: '#4fc3f7', bg: 'rgba(79,195,247,0.1)' },
  backend:  { label: 'Backend & Languages', color: '#ce9178', bg: 'rgba(206,145,120,0.1)' },
  tools:    { label: 'Tools & DevOps', color: '#6a9955', bg: 'rgba(106,153,85,0.1)' },
}

function SkillBar({ level, color, delay }) {
  return (
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#3e3e42' }}>
      <motion.div
        className="h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ delay, duration: 0.8, ease: 'easeOut' }}
        style={{ background: color }}
      />
    </div>
  )
}

function TechCard({ tech, index, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileHover={{ scale: 1.04, y: -3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col items-center gap-2 rounded-lg p-3 cursor-default transition-all"
      style={{
        background: hovered ? '#2a2d2e' : '#252526',
        border: `1px solid ${hovered ? color : '#3e3e42'}`,
        boxShadow: hovered ? `0 0 12px ${color}30` : 'none',
      }}
    >
      <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain"
           onError={e => { e.target.style.display = 'none' }} />
      <span className="text-xs font-mono text-center leading-tight" style={{ color: hovered ? '#d4d4d4' : '#8a8a8a' }}>
        {tech.name}
      </span>
      {hovered && (
        <div className="w-full">
          <SkillBar level={tech.level} color={color} delay={0} />
          <div className="text-center mt-0.5" style={{ color, fontSize: 10 }}>{tech.level}%</div>
        </div>
      )}
    </motion.div>
  )
}

export default function Skills() {
  const grouped = Object.entries(CATEGORIES).map(([key, meta]) => ({
    key, meta,
    techs: technologies.filter(t => t.category === key)
  }))

  return (
    <div className="h-full overflow-y-auto p-0">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">

        {/* File header */}
        <div className="mb-6 font-mono text-sm leading-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
            <span className="code-comment">{'// skills.ts — Technical Skills & Proficiency'}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="code-comment">{'// Hover over a card to see proficiency level'}</span>
          </motion.div>
        </div>

        {/* TypeScript interface */}
        <div className="mb-8 font-mono text-sm leading-7 rounded-lg p-4" style={{ background: '#252526', border: '1px solid #3e3e42' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            <span className="code-keyword">interface&nbsp;</span>
            <span className="code-type">SkillSet</span>
            <span className="code-punct">&nbsp;{'{'}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="pl-4">
            <span className="code-prop">frontend</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-type">string[]</span>
            <span className="code-comment">&nbsp;// React, HTML, CSS, Tailwind, JS</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="pl-4">
            <span className="code-prop">languages</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-type">string[]</span>
            <span className="code-comment">&nbsp;// C, C++, Java, JavaScript</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pl-4">
            <span className="code-prop">tools</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-type">string[]</span>
            <span className="code-comment">&nbsp;// Git, VS Code, Vite, Vercel</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="pl-4">
            <span className="code-prop">proficiency</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-type">Record</span>
            <span className="code-punct">{'<'}string, number{'>'}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <span className="code-punct">{'}'}</span>
          </motion.div>
        </div>

        {/* Tech categories */}
        {grouped.map(({ key, meta, techs }, gi) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + gi * 0.15 }}
            className="mb-8"
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1" style={{ background: '#3e3e42' }} />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
                   style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.color}40` }}>
                <span>// {meta.label}</span>
              </div>
              <div className="h-px flex-1" style={{ background: '#3e3e42' }} />
            </div>

            {/* Tech grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
              {techs.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i + gi * 3} color={meta.color} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="rounded-lg p-4 font-mono text-sm"
          style={{ background: '#252526', border: '1px solid #3e3e42' }}
        >
          <div className="mb-3">
            <span className="code-keyword">const&nbsp;</span>
            <span className="code-fn">summary</span>
            <span className="code-punct">&nbsp;= {`{`}</span>
          </div>
          {[
            { key: 'totalTechs',    val: '16',               color: '#b5cea8' },
            { key: 'primaryStack',  val: '"React + Tailwind"', color: '#ce9178' },
            { key: 'dsa',           val: '"C++ (LeetCode)"',   color: '#ce9178' },
            { key: 'yearOfStudy',   val: '"3rd Year (2026)"',  color: '#ce9178' },
          ].map(({ key, val, color }) => (
            <div key={key} className="pl-4">
              <span className="code-prop">{key}</span>
              <span className="code-punct">: </span>
              <span style={{ color }}>{val}</span>
              <span className="code-punct">,</span>
            </div>
          ))}
          <div><span className="code-punct">{`}`}</span></div>
        </motion.div>

      </div>
    </div>
  )
}
