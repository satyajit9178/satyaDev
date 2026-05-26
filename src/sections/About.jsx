import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin, GraduationCap, User } from 'lucide-react'
import { personal } from '../data/portfolio'

function CodeLine({ children, delay = 0, indent = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="code-line flex"
      style={{ paddingLeft: indent * 16 }}
    >
      {children}
    </motion.div>
  )
}

const TAGLINE_TECHS = ["JavaScript", "React", "HTML & CSS", "C++", "Node.js"]

function Avatar() {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative">
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #007ACC, #4fc3f7, #007ACC)',
          padding: 2,
          borderRadius: '50%',
          animation: 'spin 4s linear infinite',
        }}
      />
      {/* Avatar wrapper */}
      <div
        className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex items-center justify-center"
        style={{
          border: '3px solid #007ACC',
          boxShadow: '0 0 24px rgba(0,122,204,0.5), 0 0 48px rgba(0,122,204,0.2)',
          background: '#252526',
        }}
      >
        {!imgError ? (
          <img
            src="/avatar.jpg"
            alt="Satyajit Sahoo"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback: initials */
          <div
            className="w-full h-full flex items-center justify-center font-mono font-bold select-none"
            style={{
              background: 'linear-gradient(135deg, #007ACC22, #4fc3f722)',
              color: '#4fc3f7',
              fontSize: 36,
              letterSpacing: '-2px',
            }}
          >
            SS
          </div>
        )}
      </div>
      {/* Online indicator */}
      <div
        className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
        style={{ background: '#4ec9b0', borderColor: '#1e1e1e', boxShadow: '0 0 8px rgba(78,201,176,0.8)' }}
        title="Available for opportunities"
      />
    </div>
  )
}

export default function About() {
  const [techIdx, setTechIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setTechIdx(i => (i + 1) % TAGLINE_TECHS.length), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="h-full overflow-y-auto p-0">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">

        {/* ── HERO: Avatar + name + tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 p-5 rounded-xl"
          style={{ background: '#252526', border: '1px solid #3e3e42' }}
        >
          {/* Avatar */}
          <div className="shrink-0">
            <Avatar />
          </div>

          {/* Name + info */}
          <div className="flex-1 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="font-mono text-xs mb-1"
              style={{ color: '#6a9955' }}
            >
              {'// developer.profile.js'}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bold mb-1"
              style={{ color: '#d4d4d4', fontSize: 26, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '-0.5px' }}
            >
              Satyajit <span style={{ color: '#4fc3f7' }}>Sahoo</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="font-mono text-sm mb-2"
              style={{ color: '#858585' }}
            >
              <span style={{ color: '#ce9178' }}>Frontend Developer</span>
              <span style={{ color: '#3e3e42' }}> · </span>
              <span>CSE Student @ OUTR</span>
            </motion.div>

            {/* Tagline with cycling tech */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs mb-3 flex items-center gap-2 justify-center sm:justify-start flex-wrap"
            >
              <span style={{ color: '#858585' }}>I build web experiences using</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={techIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="px-2 py-0.5 rounded font-semibold"
                  style={{ background: 'rgba(0,122,204,0.15)', color: '#4fc3f7', border: '1px solid #007ACC40' }}
                >
                  {TAGLINE_TECHS[techIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Meta chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap items-center gap-2 justify-center sm:justify-start"
            >
              <span className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: '#1e1e1e', color: '#6a9955', border: '1px solid #6a995540' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Open to opportunities
              </span>
              <span className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: '#1e1e1e', color: '#858585', border: '1px solid #3e3e42' }}>
                <MapPin size={10} />
                Bhubaneswar, India
              </span>
              <span className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: '#1e1e1e', color: '#858585', border: '1px solid #3e3e42' }}>
                CGPA: <span style={{ color: '#dcdcaa' }}>8.99</span>
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* File header comment */}
        <div className="mb-6 line-numbers font-mono text-sm leading-7">
          <CodeLine delay={0.05}>
            <span className="code-comment">{'// about.js — Developer Profile'}</span>
          </CodeLine>
          <CodeLine delay={0.1}>
            <span className="code-comment">{'// Last modified: May 2026 | Branch: main'}</span>
          </CodeLine>
          <CodeLine delay={0.15}>
            <span style={{ color: '#3e3e42' }}>{'─'.repeat(48)}</span>
          </CodeLine>
        </div>

        {/* Hero: const developer = { ... } */}
        <div className="mb-8 font-mono text-sm leading-7 line-numbers">
          <CodeLine delay={0.2}>
            <span className="code-keyword">const&nbsp;</span>
            <span className="code-fn">developer</span>
            <span className="code-punct">&nbsp;=&nbsp;{'{'}</span>
          </CodeLine>
          <CodeLine delay={0.25} indent={1}>
            <span className="code-prop">name</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-string">"Satyajit Sahoo"</span>
            <span className="code-punct">,</span>
          </CodeLine>
          <CodeLine delay={0.3} indent={1}>
            <span className="code-prop">role</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-string">"Frontend Developer &amp; CSE Student"</span>
            <span className="code-punct">,</span>
          </CodeLine>
          <CodeLine delay={0.35} indent={1}>
            <span className="code-prop">location</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-string">"Bhubaneswar, Odisha, India"</span>
            <span className="code-punct">,</span>
          </CodeLine>
          <CodeLine delay={0.4} indent={1}>
            <span className="code-prop">university</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-string">"Odisha University of Technology &amp; Research"</span>
            <span className="code-punct">,</span>
          </CodeLine>
          <CodeLine delay={0.45} indent={1}>
            <span className="code-prop">cgpa</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-number">8.99</span>
            <span className="code-punct">,</span>
          </CodeLine>
          <CodeLine delay={0.5} indent={1}>
            <span className="code-prop">email</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-string">"satyajits104@gmail.com"</span>
            <span className="code-punct">,</span>
          </CodeLine>
          <CodeLine delay={0.55} indent={1}>
            <span className="code-prop">status</span>
            <span className="code-punct">:&nbsp;</span>
            <span style={{ color: '#6a9955' }}>"🟢 Open to opportunities"</span>
            <span className="code-punct">,</span>
          </CodeLine>
          <CodeLine delay={0.6} indent={1}>
            <span className="code-prop">currentFocus</span>
            <span className="code-punct">:&nbsp;</span>
            <span className="code-string">
              "
              <motion.span
                key={techIdx}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ color: '#ce9178' }}
              >
                {TAGLINE_TECHS[techIdx]}
              </motion.span>
              "
            </span>
            <span className="code-punct">,</span>
          </CodeLine>
          <CodeLine delay={0.65}>
            <span className="code-punct">{'}'}</span>
            <span className="code-punct">;</span>
          </CodeLine>
        </div>

        {/* Bio as comments */}
        <div className="mb-8 font-mono text-sm leading-7 space-y-1 line-numbers">
          <CodeLine delay={0.7}>
            <span className="code-comment">{'/**'}</span>
          </CodeLine>
          {personal.bio.map((line, i) => (
            <CodeLine key={i} delay={0.72 + i * 0.05}>
              <span className="code-comment">{` * ${line}`}</span>
            </CodeLine>
          ))}
          <CodeLine delay={0.92}>
            <span className="code-comment">{' */'}</span>
          </CodeLine>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-8 font-mono text-sm line-numbers"
        >
          <CodeLine delay={1.0}>
            <span className="code-keyword">const&nbsp;</span>
            <span className="code-fn">connect</span>
            <span className="code-punct">&nbsp;= () =&gt;&nbsp;{'{'}</span>
          </CodeLine>
          <CodeLine delay={1.05} indent={1}>
            <span className="code-keyword">return&nbsp;</span>
            <span className="code-punct">[</span>
          </CodeLine>
          <div className="pl-8 flex flex-wrap gap-2 my-2">
            {[
              { icon: Github,   href: 'https://github.com/satyajit9178',                      label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/satyajit-sahoo-0636a5297',     label: 'LinkedIn' },
              { icon: Twitter,  href: 'https://twitter.com/Satyajit81170',                    label: 'Twitter' },
              { icon: Mail,     href: 'mailto:satyajits104@gmail.com',                        label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors font-mono"
                style={{ background: '#2d2d2d', color: '#d4d4d4', border: '1px solid #3e3e42' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#007ACC'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#3e3e42'}
              >
                <Icon size={13} style={{ color: '#4fc3f7' }} />
                {label}
                <ExternalLink size={10} style={{ color: '#858585' }} />
              </motion.a>
            ))}
          </div>
          <CodeLine delay={1.1} indent={1}>
            <span className="code-punct">]</span>
          </CodeLine>
          <CodeLine delay={1.15}>
            <span className="code-punct">{'}'}</span>
          </CodeLine>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="rounded-lg p-4 mb-6"
          style={{ background: '#252526', border: '1px solid #3e3e42' }}
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg shrink-0" style={{ background: 'rgba(0,122,204,0.1)' }}>
              <GraduationCap size={20} style={{ color: '#007ACC' }} />
            </div>
            <div>
              <div className="text-sm font-semibold mb-0.5" style={{ color: '#d4d4d4' }}>
                Odisha University of Technology and Research
              </div>
              <div className="text-xs mb-1" style={{ color: '#858585' }}>
                B.Tech — Computer Science & Engineering · Aug 2023 – 2027
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(0,122,204,0.15)', color: '#4fc3f7' }}>
                  CGPA: 8.99/10
                </span>
                <span className="text-xs flex items-center gap-1" style={{ color: '#6a9955' }}>
                  <MapPin size={10} />
                  Bhubaneswar, Odisha
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          {[
            { label: 'Projects', value: '5+', color: '#4fc3f7' },
            { label: 'Internships', value: '2', color: '#6a9955' },
            { label: 'CGPA', value: '8.99', color: '#dcdcaa' },
            { label: 'Technologies', value: '16+', color: '#c586c0' },
          ].map(({ label, value, color }) => (
            <div key={label} className="text-center rounded-lg p-3" style={{ background: '#252526', border: '1px solid #3e3e42' }}>
              <div className="text-2xl font-bold font-mono mb-0.5" style={{ color }}>{value}</div>
              <div className="text-xs" style={{ color: '#858585' }}>{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}