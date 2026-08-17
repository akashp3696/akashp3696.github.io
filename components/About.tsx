'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiBook, FiGlobe, FiArrowRight, FiZap } from 'react-icons/fi'
import { FaBrain, FaCode, FaMobileAlt } from 'react-icons/fa'

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
  { icon: <FiGlobe size={24} />, title: 'International Projects', desc: '30+ projects for 15+ clients, 10+ live in UAE & global markets', color: '#7C3AED' },
  { icon: <FaCode size={24} />, title: 'Full Stack Development', desc: 'Java (Spring Boot), Node.js & React — scalable, high‑performance apps', color: '#06B6D4' },
  { icon: <FaMobileAlt size={24} />, title: 'Mobile Development', desc: '9 React Native + 3 Flutter apps shipped', color: '#A855F7' },
  { icon: <FiZap size={24} />, title: 'Performance & Scale', desc: 'WebSocket 500+ concurrent connections, 90% payload reduction', color: '#22D3EE' },
]

const details = [
  { icon: <FiMapPin size={13} />, text: 'India (Available Worldwide)' },
  { icon: <FiBriefcase size={13} />, text: 'Open to Remote, Contract & Freelance' },
  { icon: <FiBook size={13} />, text: 'B.Tech — Computer Science' },
  { icon: <FiGlobe size={13} />, text: 'English & Hindi' },
  { icon: <FaBrain size={13} />, text: '30+ Projects · 15+ Clients' },
  { icon: <FiZap size={13} />, text: '10+ Live Production Apps' },
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
                <>I&apos;m a passionate <strong className="text-[#0F172A]">Full Stack Developer</strong> with <strong className="text-[#0F172A]">5+ years of experience in React</strong> and <strong className="text-[#0F172A]">3+ years specializing in backend development &amp; performance optimization</strong>. I build scalable, high‑performance web and mobile applications using <strong className="text-[#0F172A]">Java (Spring Boot)</strong>, the <strong className="text-[#0F172A]">MERN stack</strong>, and <strong className="text-[#0F172A]">React Native / Flutter</strong> for mobile.</>,
                <>I&apos;ve delivered <strong className="text-[#0F172A]">30+ projects for 15+ clients</strong>, including <strong className="text-[#0F172A]">10+ live, production platforms</strong> serving international markets — a service platform for the UAE market, an AI‑powered test automation tool, and a real‑time travel‑tech app. My work spans e‑commerce, travel, entertainment, wellness, and internal‑use SaaS tools built for business operations.</>,
                <>I also use <strong className="text-[#0F172A]">AI‑assisted tools</strong> like GitHub Copilot and Cursor to move faster while keeping code clean — and I focus on clear communication and reliable delivery, whether it&apos;s a quick fix or a full product build.</>,
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
              className="flex flex-col gap-3 sm:gap-4"
            >
              {cards.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeRight}
                  whileHover={{ x: 6, boxShadow: `0 16px 40px ${c.color}22` }}
                  className="glass p-4 sm:p-5 flex items-center gap-4 cursor-default"
                  style={{ transition: 'box-shadow 0.3s ease, transform 0.3s ease', borderRadius: 16 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 gradient-text"
                    style={{ background: `${c.color}14` }}
                  >
                    {c.icon}
                  </motion.div>
                  <div className="min-w-0">
                    <h4 className="font-display font-semibold text-sm sm:text-base text-[#0F172A] mb-0.5">{c.title}</h4>
                    <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
