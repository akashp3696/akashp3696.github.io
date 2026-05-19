'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'

const ROLES = [
  'Full Stack Developer',
  'React.js Developer',
  'Node.js Developer',
  'Flutter Developer',
  'AI Integration Expert',
  'Mobile App Developer',
]

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const speed = deleting ? 45 : 100
    const pause = !deleting && text === current ? 1800 : 0

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) setDeleting(true)
        else setText(current.slice(0, text.length + 1))
      } else {
        if (text === '') {
          setDeleting(false)
          setWordIdx((i) => (i + 1) % words.length)
        } else {
          setText(current.slice(0, text.length - 1))
        }
      }
    }, pause || speed)
    return () => clearTimeout(timer)
  }, [text, wordIdx, deleting, words])

  return text
}

function useCounter(target: number, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const step = target / 60
    let cur = 0
    const id = setInterval(() => {
      cur += step
      if (cur >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(cur))
    }, 25)
    return () => clearInterval(id)
  }, [target, started])
  return count
}

export default function Hero() {
  const typed = useTypewriter(ROLES)
  const [countersOn, setCountersOn] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setCountersOn(true) },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const projects = useCounter(20, countersOn)
  const clients  = useCounter(15, countersOn)
  const years    = useCounter(3,  countersOn)

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
  const item    = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 pt-28 pb-16 z-10">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 60%)' }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p variants={item} className="text-accent font-medium mb-2 text-lg">
            Hello, I&apos;m
          </motion.p>

          <motion.h1 variants={item} className="font-display text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
            Akash <span className="gradient-text">Prajapat</span>
          </motion.h1>

          <motion.div variants={item} className="text-[#94A3B8] text-xl mb-6 h-8 flex items-center gap-1">
            <span>I&apos;m a </span>
            <span className="text-primary-light font-semibold">{typed}</span>
            <span className="animate-blink text-primary ml-0.5">|</span>
          </motion.div>

          <motion.p variants={item} className="text-[#94A3B8] text-base leading-relaxed max-w-lg mb-8">
            Building scalable web &amp; mobile applications with cutting‑edge technologies.
            Specialized in Full Stack, Mobile &amp; AI‑powered solutions — available worldwide
            for freelance projects.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              <FiMail size={16} /> Get in Touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} ref={statsRef} className="flex items-center gap-8">
            {[
              { val: projects, label: 'Projects Done' },
              { val: clients,  label: 'Happy Clients' },
              { val: years,    label: 'Years Exp.' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-10 bg-[rgba(255,255,255,0.08)]" />}
                <div className="text-center">
                  <p className="font-display text-3xl font-bold gradient-text">
                    {s.val}<span className="text-primary-light">+</span>
                  </p>
                  <p className="text-xs text-[#64748B] uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          className="hidden md:flex justify-center"
        >
          <div className="relative flex flex-col items-center gap-5">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(124,58,237,0.35)] animate-spin-slow" />
              <div className="absolute -inset-5 rounded-full animate-spin-reverse opacity-70"
                style={{ background: 'radial-gradient(circle at 10% 50%, #7C3AED 2.5px, transparent 2.5px), radial-gradient(circle at 90% 50%, #06B6D4 2.5px, transparent 2.5px), radial-gradient(circle at 50% 10%, #A855F7 2.5px, transparent 2.5px), radial-gradient(circle at 50% 90%, #22D3EE 2.5px, transparent 2.5px)' }} />
              <div className="absolute inset-4 rounded-full overflow-hidden ring-4 ring-primary/40 animate-float">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Akash Prajapat"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://ui-avatars.com/api/?name=Akash+Prajapat&background=7C3AED&color=fff&size=280'
                  }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-emerald-400 font-medium text-sm"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-green" />
              Available for Freelance
            </div>

            {/* Floating tech badges */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="glass px-3 py-2 text-xs font-semibold text-primary-light shadow-xl">
                ⚛ React.js
              </motion.div>
            </div>
            <div className="absolute -right-12 top-1/3">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                className="glass px-3 py-2 text-xs font-semibold text-accent shadow-xl">
                📱 Flutter
              </motion.div>
            </div>
            <div className="absolute -right-8 top-2/3">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
                className="glass px-3 py-2 text-xs font-semibold text-[#A3E635] shadow-xl">
                🤖 AI/ML
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569] text-xs hover:text-[#94A3B8] transition-colors animate-bounce-slow"
      >
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-current" />
        </div>
        <FiArrowDown size={14} />
      </button>
    </section>
  )
}
