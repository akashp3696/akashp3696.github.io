'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiBook, FiGlobe, FiArrowRight } from 'react-icons/fi'
import { FaBrain, FaMobileAlt, FaCode } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const cards = [
  { icon: <FiGlobe size={24} />, title: 'International Projects', desc: 'Delivered live projects in UAE & global market', color: '#7C3AED' },
  { icon: <FaBrain size={24} />, title: 'AI Integration', desc: 'Building AI‑powered applications & automation', color: '#06B6D4' },
  { icon: <FaMobileAlt size={24} />, title: 'Mobile Development', desc: 'Cross‑platform apps with Flutter & React Native', color: '#A855F7' },
  { icon: <FaCode size={24} />, title: 'Full Stack', desc: 'End‑to‑end product from DB to UI', color: '#22D3EE' },
]

const details = [
  { icon: <FiMapPin size={13} />, text: 'India (Available Worldwide)' },
  { icon: <FiBriefcase size={13} />, text: 'Open to Remote & Contract' },
  { icon: <FiBook size={13} />, text: 'B.Tech — Computer Science' },
  { icon: <FiGlobe size={13} />, text: 'English & Hindi' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10 overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">Get to know me</span>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Text — slides from left */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
              {[
                <>I&apos;m a passionate <strong className="text-[#0F172A]">Full Stack Developer</strong> with expertise in building end‑to‑end web and mobile applications. I love turning complex problems into elegant, performant solutions.</>,
                <>From <strong className="text-[#0F172A]">live Dubai‑based platforms</strong> to <strong className="text-[#0F172A]">AI‑powered automation tools</strong>, I&apos;ve delivered scalable products across multiple industries — e‑commerce, travel, entertainment &amp; wellness.</>,
                <>My versatility spans web, mobile, and AI integration — making me a one‑stop solution for modern product development.</>,
              ].map((para, i) => (
                <motion.p key={i} variants={fadeLeft}
                  className="text-[#475569] text-sm sm:text-base leading-relaxed mb-4">
                  {para}
                </motion.p>
              ))}

              <motion.div variants={fadeLeft} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 mt-6">
                {details.map((d) => (
                  <div key={d.text} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <span className="text-primary shrink-0">{d.icon}</span>
                    {d.text}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeLeft}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary !text-sm"
                >
                  See My Projects <FiArrowRight size={14} />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Cards — slide from right, staggered */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {cards.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeRight}
                  whileHover={{ y: -6, boxShadow: `0 16px 40px ${c.color}22` }}
                  className="glass p-4 sm:p-6 cursor-default"
                  style={{ transition: 'box-shadow 0.3s ease', borderRadius: 16 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-3 inline-block gradient-text"
                  >
                    {c.icon}
                  </motion.div>
                  <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0F172A] mb-1">{c.title}</h4>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
