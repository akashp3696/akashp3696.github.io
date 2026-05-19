'use client'

import { useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const projects = [
  {
    id: 1,
    title: 'Baggi.ae',
    tag: 'E-Commerce · UAE',
    badge: 'Live',
    badgeClass: 'bg-emerald-500',
    gradient: 'from-blue-600 to-cyan-400',
    icon: '🛒',
    desc: 'Live e-commerce platform for the UAE market with real-time delivery tracking, multi-vendor support, and Arabic/English bilingual interface. Currently serving customers across Dubai.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
    liveUrl: 'https://baggi.ae',
  },
  {
    id: 2,
    title: 'AdlerQA',
    tag: 'AI · Quality Assurance',
    badge: 'AI',
    badgeClass: 'bg-violet-500',
    gradient: 'from-violet-600 to-purple-400',
    icon: '🤖',
    desc: 'AI-powered test automation platform that intelligently generates, executes, and maintains test cases using machine learning — reducing manual QA effort significantly.',
    tech: ['Python', 'React.js', 'Node.js', 'AI/ML'],
    liveUrl: '',
  },
  {
    id: 3,
    title: 'NexGen',
    tag: 'AI · Business Intelligence',
    badge: 'AI',
    badgeClass: 'bg-violet-500',
    gradient: 'from-emerald-600 to-teal-400',
    icon: '🧠',
    desc: 'Next-generation AI platform for business automation with real-time analytics, predictive insights, and intelligent reporting for enterprise clients.',
    tech: ['React.js', 'Python', 'Node.js', 'MongoDB'],
    liveUrl: '',
  },
  {
    id: 4,
    title: 'Tripolo',
    tag: 'Travel · Mobile App',
    badge: 'App',
    badgeClass: 'bg-orange-500',
    gradient: 'from-red-500 to-orange-400',
    icon: '✈️',
    desc: 'Smart travel planning application with AI-powered itinerary generation, real-time flight tracking, hotel recommendations, and collaborative trip planning features.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'REST API'],
    liveUrl: '',
  },
  {
    id: 5,
    title: 'CineCelebrate',
    tag: 'Entertainment · Web App',
    badge: 'Web',
    badgeClass: 'bg-amber-500',
    gradient: 'from-amber-500 to-yellow-400',
    icon: '🎬',
    desc: 'Movie event and celebration booking platform connecting cinema lovers with exclusive screening events, premiere tickets, and curated movie experiences.',
    tech: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    liveUrl: '',
  },
  {
    id: 6,
    title: 'Conscious Cut',
    tag: 'Health · Wellness',
    badge: 'App',
    badgeClass: 'bg-cyan-600',
    gradient: 'from-cyan-600 to-teal-400',
    icon: '🌿',
    desc: 'Health & wellness platform promoting mindful living through curated content, meal planning tools, and community features for health-conscious individuals.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Flutter'],
    liveUrl: '',
  },
]

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width  / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -8
    const rotY = ((x - cx) / cx) *  8
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
  }

  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.18s ease', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="section-tag">What I&apos;ve built</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <TiltCard>
                  <div className="glass overflow-hidden flex flex-col group cursor-default h-full"
                    style={{
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.borderColor = 'rgba(124,58,237,0.5)'
                      el.style.boxShadow = '0 0 30px rgba(124,58,237,0.15), inset 0 0 30px rgba(124,58,237,0.03)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.borderColor = 'rgba(255,255,255,0.08)'
                      el.style.boxShadow = 'none'
                    }}
                  >
                    {/* Image area */}
                    <div className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-5xl overflow-hidden`}>
                      <span className="group-hover:scale-110 transition-transform duration-500 select-none">{p.icon}</span>

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)' }} />

                      {/* Hover overlay with link */}
                      {p.liveUrl && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors">
                            <FiExternalLink size={16} />
                          </a>
                        </div>
                      )}

                      <span className={`absolute top-3 right-3 ${p.badgeClass} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                        {p.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{p.tag}</p>
                      <h3 className="font-display font-bold text-white text-lg mb-2">{p.title}</h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded text-accent font-medium"
                            style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
