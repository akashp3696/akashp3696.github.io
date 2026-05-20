'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiBook, FiGlobe, FiArrowRight } from 'react-icons/fi'
import { FaBrain, FaMobileAlt, FaCode } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const cards = [
  { icon: <FiGlobe size={24} />, title: 'International Projects', desc: 'Delivered live projects in UAE & global market' },
  { icon: <FaBrain size={24} />, title: 'AI Integration', desc: 'Building AI‑powered applications & automation' },
  { icon: <FaMobileAlt size={24} />, title: 'Mobile Development', desc: 'Cross‑platform apps with Flutter & React Native' },
  { icon: <FaCode size={24} />, title: 'Full Stack', desc: 'End‑to‑end product from DB to UI' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">Get to know me</span>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Text */}
            <motion.div variants={fadeUp}>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-4">
                I&apos;m a passionate <strong className="text-[#0F172A]">Full Stack Developer</strong> with
                expertise in building end‑to‑end web and mobile applications. I love turning complex
                problems into elegant, performant solutions.
              </p>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-4">
                From <strong className="text-[#0F172A]">live Dubai‑based platforms</strong> to{' '}
                <strong className="text-[#0F172A]">AI‑powered automation tools</strong>, I&apos;ve
                delivered scalable products across multiple industries — e‑commerce, travel,
                entertainment, health &amp; wellness.
              </p>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6">
                My versatility spans web, mobile, and AI integration, making me a one‑stop
                solution for modern product development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                {[
                  { icon: <FiMapPin size={14} />, text: 'India (Available Worldwide)' },
                  { icon: <FiBriefcase size={14} />, text: 'Open to Remote & Contract' },
                  { icon: <FiBook size={14} />, text: 'B.Tech — Computer Science' },
                  { icon: <FiGlobe size={14} />, text: 'English & Hindi' },
                ].map((d) => (
                  <div key={d.text} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <span className="text-primary shrink-0">{d.icon}</span>
                    {d.text}
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary !text-sm"
              >
                See My Projects <FiArrowRight size={14} />
              </button>
            </motion.div>

            {/* Cards */}
            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {cards.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="glass glass-hover p-4 sm:p-6">
                  <div className="gradient-text mb-2.5">{c.icon}</div>
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
