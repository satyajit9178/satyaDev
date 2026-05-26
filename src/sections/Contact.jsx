import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Github, Linkedin, Twitter, Youtube, Instagram,
  Facebook, Code, Terminal, Award, Copy, CheckCheck, ExternalLink
} from 'lucide-react'
import { personal } from '../data/portfolio'

const ICON_MAP = {
  github:    Github,
  linkedin:  Linkedin,
  twitter:   Twitter,
  youtube:   Youtube,
  instagram: Instagram,
  facebook:  Facebook,
  code:      Code,
  terminal:  Terminal,
  award:     Award,
  mail:      Mail,
}

const CONTACTS = [
  {
    key: 'email',
    value: 'satyajits104@gmail.com',
    href: 'mailto:satyajits104@gmail.com',
    icon: 'mail',
    color: '#ce9178',
  },
  {
    key: 'github',
    value: 'github.com/satyajit9178',
    href: 'https://github.com/satyajit9178',
    icon: 'github',
    color: '#d4d4d4',
  },
  {
    key: 'linkedin',
    value: 'linkedin.com/in/satyajit-sahoo-0636a5297',
    href: 'https://linkedin.com/in/satyajit-sahoo-0636a5297',
    icon: 'linkedin',
    color: '#4fc3f7',
  },
  {
    key: 'twitter',
    value: 'twitter.com/Satyajit81170',
    href: 'https://twitter.com/Satyajit81170',
    icon: 'twitter',
    color: '#569cd6',
  },
  {
    key: 'leetcode',
    value: 'leetcode.com/u/satyajits',
    href: 'https://leetcode.com/u/satyajits/',
    icon: 'code',
    color: '#dcdcaa',
  },
  {
    key: 'geeksforgeeks',
    value: 'geeksforgeeks.org/profile/satyajio394',
    href: 'https://www.geeksforgeeks.org/profile/satyajio394',
    icon: 'terminal',
    color: '#6a9955',
  },
  {
    key: 'hackerrank',
    value: 'hackerrank.com/profile/satyajits104',
    href: 'https://www.hackerrank.com/profile/satyajits104',
    icon: 'award',
    color: '#4ec9b0',
  },
]

function ContactRow({ item, index }) {
  const [copied, setCopied] = useState(false)
  const Icon = ICON_MAP[item.icon] || Mail

  const copy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(item.href.replace('mailto:', '')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.07, duration: 0.3 }}
      className="flex items-center group"
    >
      {/* JSON line */}
      <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-l-md font-mono text-xs"
           style={{ background: '#252526' }}>
        <span className="code-string shrink-0">"{item.key}"</span>
        <span className="code-punct shrink-0">:&nbsp;</span>
        <span style={{ color: item.color }} className="truncate">"{item.value}"</span>
        <span className="code-punct shrink-0">,</span>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-1 px-2 py-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity"
           style={{ background: '#2d2d2d', borderLeft: '1px solid #3e3e42' }}>
        <button
          onClick={copy}
          className="p-1 rounded hover:bg-white/10 transition-colors"
          title="Copy"
          style={{ color: '#858585' }}
        >
          {copied ? <CheckCheck size={13} style={{ color: '#6a9955' }} /> : <Copy size={13} />}
        </button>
        <a
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="p-1 rounded hover:bg-white/10 transition-colors"
          title="Open"
          style={{ color: '#858585' }}
        >
          <ExternalLink size={13} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)
    window.open(`mailto:satyajits104@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-6">

        {/* File header */}
        <div className="mb-6 font-mono text-sm leading-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
            <span className="code-comment">{'// contact.json — Contact Information'}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="code-comment">{'// Hover rows to copy or open links'}</span>
          </motion.div>
        </div>

        {/* JSON block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg overflow-hidden mb-6"
          style={{ border: '1px solid #3e3e42' }}
        >
          {/* JSON opening */}
          <div className="px-4 py-2 font-mono text-xs" style={{ background: '#2d2d2d', borderBottom: '1px solid #3e3e42' }}>
            <span className="code-punct">{'{'}</span>
          </div>

          {/* Header fields */}
          <div className="px-4 py-2 font-mono text-xs space-y-1" style={{ background: '#252526', borderBottom: '1px solid #3e3e42' }}>
            {[
              { k: 'name',     v: '"Satyajit Sahoo"',                           c: '#4fc3f7' },
              { k: 'role',     v: '"Frontend Developer & CSE Student"',          c: '#ce9178' },
              { k: 'location', v: '"Bhubaneswar, Odisha, India"',                c: '#ce9178' },
              { k: 'status',   v: '"🟢 Open to internships & opportunities"',   c: '#6a9955' },
            ].map(({ k, v, c }, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 + i * 0.05 }}
                className="flex items-center gap-2"
              >
                <span className="code-string">"{k}"</span>
                <span className="code-punct">:</span>
                <span style={{ color: c }}>{v}</span>
                <span className="code-punct">,</span>
              </motion.div>
            ))}
          </div>

          {/* Contact links */}
          <div className="py-1" style={{ background: '#1e1e1e' }}>
            <div className="px-4 py-1 font-mono text-xs" style={{ color: '#858585' }}>
              <span className="code-string">"links"</span>
              <span className="code-punct">: {'{'}</span>
            </div>
            <div className="space-y-0.5 px-2">
              {CONTACTS.map((item, i) => (
                <ContactRow key={item.key} item={item} index={i} />
              ))}
            </div>
            <div className="px-4 py-1 font-mono text-xs" style={{ color: '#d4d4d4' }}>
              <span className="code-punct">{'}'}</span>
            </div>
          </div>

          {/* JSON closing */}
          <div className="px-4 py-2 font-mono text-xs" style={{ background: '#2d2d2d', borderTop: '1px solid #3e3e42' }}>
            <span className="code-punct">{'}'}</span>
          </div>
        </motion.div>

        {/* Quick message form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid #3e3e42' }}
        >
          <div className="px-4 py-2 flex items-center gap-2" style={{ background: '#2d2d2d', borderBottom: '1px solid #3e3e42' }}>
            <Mail size={13} style={{ color: '#007ACC' }} />
            <span className="text-xs font-mono font-semibold" style={{ color: '#d4d4d4' }}>sendMessage()</span>
            <span className="text-xs font-mono" style={{ color: '#858585' }}>— opens your email client</span>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-3" style={{ background: '#252526' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono mb-1" style={{ color: '#858585' }}>
                  <span className="code-prop">name</span>
                  <span className="code-punct">: string</span>
                </label>
                <input
                  required
                  value={formState.name}
                  onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                  placeholder='"Your Name"'
                  className="w-full rounded px-3 py-2 text-xs font-mono outline-none transition-colors"
                  style={{ background: '#1e1e1e', border: '1px solid #3e3e42', color: '#d4d4d4' }}
                  onFocus={e => e.target.style.borderColor = '#007ACC'}
                  onBlur={e => e.target.style.borderColor = '#3e3e42'}
                />
              </div>
              <div>
                <label className="block text-xs font-mono mb-1" style={{ color: '#858585' }}>
                  <span className="code-prop">email</span>
                  <span className="code-punct">: string</span>
                </label>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                  placeholder='"your@email.com"'
                  className="w-full rounded px-3 py-2 text-xs font-mono outline-none transition-colors"
                  style={{ background: '#1e1e1e', border: '1px solid #3e3e42', color: '#d4d4d4' }}
                  onFocus={e => e.target.style.borderColor = '#007ACC'}
                  onBlur={e => e.target.style.borderColor = '#3e3e42'}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono mb-1" style={{ color: '#858585' }}>
                <span className="code-prop">message</span>
                <span className="code-punct">: string</span>
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                placeholder='"Hello Satyajit, I wanted to..."'
                className="w-full rounded px-3 py-2 text-xs font-mono outline-none transition-colors resize-none"
                style={{ background: '#1e1e1e', border: '1px solid #3e3e42', color: '#d4d4d4' }}
                onFocus={e => e.target.style.borderColor = '#007ACC'}
                onBlur={e => e.target.style.borderColor = '#3e3e42'}
              />
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-semibold"
                style={{ background: sent ? '#6a9955' : '#007ACC', color: '#fff' }}
              >
                <Mail size={13} />
                {sent ? '✓ Opening email...' : 'sendMessage()'}
              </motion.button>
              <span className="text-xs font-mono" style={{ color: '#4a4a4a' }}>
                // Opens your default email app
              </span>
            </div>
          </form>
        </motion.div>

      </div>
    </div>
  )
}
