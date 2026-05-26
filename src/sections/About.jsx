import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin, GraduationCap, Briefcase } from 'lucide-react'
import { personal, socials } from '../data/portfolio'

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

export default function About() {
  const [techIdx, setTechIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setTechIdx(i => (i + 1) % TAGLINE_TECHS.length), 2000)
    return () => clearInterval(t)
  }, [])

  const socialIconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  }

  return (
    <div className="h-full overflow-y-auto p-0">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">

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
              <img src="outr-logo.png" alt="OUTR Logo" width={40} height={40} className="rounded-full" />
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
