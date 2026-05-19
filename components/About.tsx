'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiBook, FiGlobe, FiArrowRight } from 'react-icons/fi'
import { FaBrain, FaMobileAlt, FaCode } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const cards = [
  { icon: <FiGlobe size={28} />, title: 'International Projects', desc: 'Delivered live projects in UAE & global market' },
  { icon: <FaBrain size={28} />, title: 'AI Integration', desc: 'Building AI‑powered applications & automation' },
  { icon: <FaMobileAlt size={28} />, title: 'Mobile Development', desc: 'Cross‑platform apps with Flutter & React Native' },
  { icon: <FaCode size={28} />, title: 'Full Stack', desc: 'End‑to‑end product from DB to UI' },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="section-tag">Get to know me</span>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <motion.div variants={fadeUp}>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-5">
                I&apos;m a passionate{' '}
                <strong className="text-white">Full Stack Developer</strong> with expertise in
                building end‑to‑end web and mobile applications. I love turning complex problems
                into elegant, performant solutions.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-5">
                From{' '}
                <strong className="text-white">live Dubai‑based platforms</strong> to{' '}
                <strong className="text-white">AI‑powered automation tools</strong>, I&apos;ve
                delivered scalable products across multiple industries — e‑commerce, travel,
                entertainment, health &amp; wellness.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
                My versatility spans web, mobile, and AI integration, making me a one‑stop
                solution for modern product development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <FiMapPin />, text: 'India (Available Worldwide)' },
                  { icon: <FiBriefcase />, text: 'Open to Remote & Contract' },
                  { icon: <FiBook />, text: 'B.Tech — Computer Science' },
                  { icon: <FiGlobe />, text: 'English & Hindi' },
                ].map((d) => (
                  <div key={d.text} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                    <span className="text-primary-light">{d.icon}</span>
                    {d.text}
                  </div>
                ))}
              </div>

              {/* CTA instead of download */}
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                See My Projects <FiArrowRight size={15} />
              </button>
            </motion.div>

            {/* Cards */}
            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-2 gap-4"
            >
              {cards.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="glass glass-hover p-6">
                  <div className="gradient-text mb-3">{c.icon}</div>
                  <h4 className="font-display font-semibold text-sm text-white mb-1">{c.title}</h4>
                  <p className="text-[#64748B] text-xs leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
