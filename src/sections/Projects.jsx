import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, GitBranch, Star, GitCommit, CheckCircle, Tag } from 'lucide-react'
import { projects } from '../data/portfolio'

const TAG_COLORS = {
  'React':      '#4fc3f7',
  'Node.js':    '#6a9955',
  'MySQL':      '#4fc3f7',
  'Tailwind CSS': '#38bdf8',
  'Vite':       '#dcdcaa',
  'JavaScript': '#dcdcaa',
  'HTML':       '#ce9178',
  'CSS':        '#569cd6',
  'AI API':     '#c586c0',
  'REST API':   '#6a9955',
  'Vercel':     '#d4d4d4',
  'TypeScript': '#569cd6',
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="rounded-lg overflow-hidden"
      style={{ background: '#252526', border: '1px solid #3e3e42' }}
    >
      {/* Card header - file path style */}
      <div
        className="flex items-center justify-between px-3 py-2 cursor-pointer select-none"
        style={{ background: '#2d2d2d', borderBottom: '1px solid #3e3e42' }}
        onClick={() => setExpanded(p => !p)}
      >
        <div className="flex items-center gap-2">
          <span className="code-comment text-xs font-mono">{'// '}</span>
          <span className="text-xs font-mono font-semibold" style={{ color: '#dcdcaa' }}>
            {project.shortName}
          </span>
          <span className="text-xs font-mono" style={{ color: '#858585' }}>.jsx</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="flex items-center gap-1" style={{ color: '#6a9955' }}>
            <CheckCircle size={11} />
            deployed
          </span>
          <span className="flex items-center gap-1" style={{ color: '#858585' }}>
            <GitBranch size={11} />
            {project.branch}
          </span>
          <span className="flex items-center gap-1" style={{ color: '#858585' }}>
            <GitCommit size={11} />
            {project.commits}
          </span>
          <span className="flex items-center gap-1" style={{ color: '#dcdcaa' }}>
            <Star size={11} />
            {project.stars}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Project image/placeholder */}
        <div className="mb-4 rounded-md overflow-hidden"
             style={{ background: '#1e1e1e', border: '1px solid #3e3e42', height: 120, position: 'relative' }}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            className="w-full h-full flex items-center justify-center font-mono text-xs"
            style={{ color: '#3e3e42', display: project.image ? 'none' : 'flex' }}
          >
            <div className="text-center">
              <div style={{ color: '#4fc3f7', fontSize: 28 }}>{'</>'}</div>
              <div className="mt-1">{project.shortName}</div>
            </div>
          </div>
          {/* Overlay gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-12"
               style={{ background: 'linear-gradient(to top, #252526, transparent)' }} />
        </div>

        {/* Title */}
        <h3 className="font-semibold mb-2 text-sm" style={{ color: '#4fc3f7' }}>
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed mb-3 font-mono" style={{ color: '#8a8a8a' }}>
          <span className="code-comment">{'/* '}</span>
          {project.description}
          <span className="code-comment">{' */'}</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-mono"
              style={{
                color: TAG_COLORS[tag] || '#d4d4d4',
                background: `${TAG_COLORS[tag] || '#d4d4d4'}15`,
                border: `1px solid ${TAG_COLORS[tag] || '#d4d4d4'}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Fake code snippet */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-4 overflow-hidden"
            >
              <div className="rounded-md p-3 font-mono text-xs leading-6"
                   style={{ background: '#1e1e1e', border: '1px solid #3e3e42' }}>
                <div><span className="code-keyword">export default function</span> <span className="code-fn">{project.shortName}</span><span className="code-punct">() {'{'}</span></div>
                <div className="pl-4"><span className="code-keyword">return</span> <span className="code-punct">{'('}</span></div>
                <div className="pl-8"><span className="code-tag">{'<ProjectCard'}</span></div>
                <div className="pl-10"><span className="code-attr">name</span><span className="code-punct">={'"'}</span><span className="code-string">{project.name}</span><span className="code-punct">{'"'}</span></div>
                <div className="pl-10"><span className="code-attr">status</span><span className="code-punct">={'"'}</span><span className="code-string">{project.status}</span><span className="code-punct">{'"'}</span></div>
                <div className="pl-10"><span className="code-attr">commits</span><span className="code-punct">={'{'}{'{'}</span><span className="code-number">{project.commits}</span><span className="code-punct">{'}'}</span></div>
                <div className="pl-8"><span className="code-tag">{'/>'}</span></div>
                <div className="pl-4"><span className="code-punct">{')'}</span></div>
                <div><span className="code-punct">{'}'}</span></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-colors"
            style={{ background: '#007ACC', color: '#fff' }}
          >
            <ExternalLink size={12} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-colors"
            style={{ background: '#2d2d2d', color: '#d4d4d4', border: '1px solid #3e3e42' }}
          >
            <Github size={12} />
            Source
          </motion.a>
          <button
            onClick={() => setExpanded(p => !p)}
            className="ml-auto text-xs font-mono transition-colors px-2 py-1 rounded"
            style={{ color: '#858585', background: '#2d2d2d' }}
          >
            {expanded ? '▲ collapse' : '▼ expand'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <div className="h-full overflow-y-auto p-0">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">

        {/* File header */}
        <div className="mb-6 font-mono text-sm leading-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
            <span className="code-comment">{'// projects.jsx — Portfolio Projects'}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="code-comment">{'// All projects deployed on Vercel | Click cards to expand'}</span>
          </motion.div>
        </div>

        {/* Import-style header */}
        <div className="mb-6 font-mono text-sm leading-7 space-y-0.5">
          {[
            `import { useState } from "react"`,
            `import { ProjectCard } from "./components"`,
            `import { projects } from "./data"`,
            ``,
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="font-mono text-sm"
              style={{ color: line.startsWith('import') ? '#c586c0' : '#d4d4d4' }}
            >
              {line || '\u00A0'}
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex gap-4 mb-6 text-xs font-mono"
        >
          {[
            { label: '5 projects', color: '#4fc3f7' },
            { label: '5 deployed', color: '#6a9955' },
            { label: 'All on Vercel', color: '#dcdcaa' },
          ].map(({ label, color }) => (
            <span key={label} className="flex items-center gap-1.5" style={{ color }}>
              <span style={{ color: '#3e3e42' }}>•</span>
              {label}
            </span>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 font-mono text-xs text-center py-4 rounded-lg"
          style={{ color: '#3e3e42', background: '#252526', border: '1px solid #2d2d2d' }}
        >
          <span className="code-comment">{'/* More projects coming soon... visit GitHub for latest */'}</span>
        </motion.div>

      </div>
    </div>
  )
}
