'use client'

import { motion } from 'framer-motion'
import { FiCode, FiServer, FiSmartphone, FiDatabase } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const categories = [
  { icon: <FiCode size={18} />, title: 'Frontend', skills: ['React.js', 'JavaScript', 'HTML / CSS', 'React Native'] },
  { icon: <FiServer size={18} />, title: 'Backend', skills: ['Node.js', 'Python', 'Java', 'Spring Boot', 'REST API'] },
  { icon: <FiSmartphone size={18} />, title: 'Mobile', skills: ['Flutter', 'React Native', 'App Development', 'Mobile App Dev.'] },
  { icon: <FiDatabase size={18} />, title: 'Database & More', skills: ['MongoDB', 'MySQL', 'Full Stack Dev.'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.03) 50%, transparent 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">What I work with</span>
            <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {categories.map((cat) => (
              <motion.div key={cat.title} variants={fadeUp} className="glass glass-hover p-5 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="gradient-text">{cat.icon}</span>
                  <h3 className="font-display font-semibold text-[#0F172A] text-sm sm:text-base">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="pill !text-xs sm:!text-sm">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
