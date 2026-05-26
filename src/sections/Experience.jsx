import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle, GraduationCap } from 'lucide-react'
import { experience, education } from '../data/portfolio'

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-4 w-4 h-4 rounded-full flex items-center justify-center"
           style={{ background: '#007ACC', border: '2px solid #1e1e1e', boxShadow: '0 0 12px rgba(0,122,204,0.5)' }}>
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>

      <div className="rounded-lg overflow-hidden mb-6"
           style={{ background: '#252526', border: '1px solid #3e3e42' }}>
        {/* Card header */}
        <div className="px-4 py-3" style={{ borderBottom: '1px solid #3e3e42', background: '#2d2d2d' }}>
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <div>{exp.logo && <img src={exp.logo} alt={exp.company} width={40} height={40} className="rounded-full" />}</div>
              <div className="font-semibold text-sm mb-0.5" style={{ color: '#4fc3f7' }}>
                {exp.role}
              </div>
              <div className="font-mono text-xs font-semibold" style={{ color: '#dcdcaa' }}>
                @ {exp.company}
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-xs font-mono shrink-0"
                  style={{ background: 'rgba(0,122,204,0.15)', color: '#007ACC', border: '1px solid #007ACC30' }}>
              {exp.type}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs font-mono" style={{ color: '#858585' }}>
            <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
            <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
          </div>
        </div>

        {/* Bullets as code comments */}
        <div className="px-4 py-3 font-mono text-xs leading-6 space-y-1">
          {exp.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.4 + i * 0.05 }}
              className="flex items-start gap-2"
            >
              <CheckCircle size={11} className="shrink-0 mt-0.5" style={{ color: '#6a9955' }} />
              <span style={{ color: '#a8a8a8' }}>{bullet}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-6">

        {/* File header */}
        <div className="mb-6 font-mono text-sm leading-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
            <span className="code-comment">{'# experience.md — Work Experience & Education'}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="code-comment">{'## Satyajit Sahoo | CSE Student & Frontend Developer'}</span>
          </motion.div>
        </div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <Briefcase size={16} style={{ color: '#007ACC' }} />
          <span className="text-sm font-semibold tracking-wide" style={{ color: '#d4d4d4' }}>Work Experience</span>
          <div className="flex-1 h-px" style={{ background: '#3e3e42' }} />
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1.5 top-4 bottom-4 w-px" style={{ background: '#3e3e42' }} />

          {/* Experience items */}
          {experience.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 mb-6 mt-4"
        >
          <GraduationCap size={16} style={{ color: '#007ACC' }} />
          <span className="text-sm font-semibold tracking-wide" style={{ color: '#d4d4d4' }}>Education</span>
          <div className="flex-1 h-px" style={{ background: '#3e3e42' }} />
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="rounded-lg overflow-hidden mb-4"
            style={{ background: '#252526', border: '1px solid #3e3e42' }}
          >
            <div className="px-4 py-3" style={{ borderBottom: '1px solid #3e3e42', background: '#2d2d2d' }}>
              <img src="outr-logo.png" alt="OUTR Logo" width={40} height={40} className="rounded-full" />
              
              <div className="font-semibold text-sm mb-0.5" style={{ color: '#4fc3f7' }}>
                {edu.degree}
              </div>
              <div className="font-mono text-xs font-semibold" style={{ color: '#dcdcaa' }}>
                {edu.institution}
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs font-mono" style={{ color: '#858585' }}>
                <span className="flex items-center gap-1"><Calendar size={11} />{edu.period}</span>
                <span className="flex items-center gap-1"><MapPin size={11} />{edu.location}</span>
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded text-xs font-mono"
                      style={{ background: 'rgba(0,122,204,0.15)', color: '#4fc3f7' }}>
                  CGPA: {edu.cgpa}
                </span>
              </div>
              <div className="space-y-1">
                {edu.highlights.map((h, j) => (
                  <div key={j} className="flex items-start gap-2 text-xs font-mono" style={{ color: '#a8a8a8' }}>
                    <CheckCircle size={11} className="shrink-0 mt-0.5" style={{ color: '#6a9955' }} />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 font-mono text-xs"
          style={{ color: '#4a4a4a' }}
        >
          <span>{'> '}</span>
          <span style={{ color: '#6a9955' }}>Currently in Year 3 of B.Tech — actively seeking internship & job opportunities</span>
        </motion.div>

      </div>
    </div>
  )
}
