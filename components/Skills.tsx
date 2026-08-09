'use client'

import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const pillAnim = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show:   { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } },
}

interface SkillCategory {
  icon: React.ReactNode
  title: string
  skills: string[]
  accent: string
}

const categories: SkillCategory[] = [
  {
    icon: <FiCode size={20} />, title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML / CSS'],
    accent: 'rgba(124,58,237,0.08)',
  },
  {
    icon: <FiServer size={20} />, title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'Java', 'Spring Boot', 'REST API'],
    accent: 'rgba(6,182,212,0.08)',
  },
  {
    icon: <FiDatabase size={20} />, title: 'Database & More',
    skills: ['MongoDB', 'MySQL', 'Full Stack Dev.'],
    accent: 'rgba(34,211,238,0.08)',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 50%, transparent 100%)' }}>
      {/* Decorative dots */}
      <div className="pointer-events-none absolute top-12 right-8 w-3 h-3 rounded-full bg-primary opacity-20 animate-pulse" />
      <div className="pointer-events-none absolute bottom-16 left-12 w-2 h-2 rounded-full bg-accent opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="pointer-events-none absolute top-1/2 left-4 w-1.5 h-1.5 rounded-full bg-primary opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">What I work with</span>
            <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(124,58,237,0.1)' }}
                className="glass p-5 sm:p-7 cursor-default"
                style={{ borderRadius: 16, transition: 'box-shadow 0.3s ease' }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center gradient-text"
                    style={{ background: cat.accent }}
                  >
                    {cat.icon}
                  </motion.div>
                  <h3 className="font-display font-semibold text-[#0F172A] text-sm sm:text-base">{cat.title}</h3>
                </div>

                {/* Animated pills */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: ci * 0.05 } } }}
                  className="flex flex-wrap gap-2"
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={pillAnim}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="pill !text-xs sm:!text-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
