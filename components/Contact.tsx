'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiSend } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

const EMAIL_SERVICE_ID  = 'YOUR_EMAILJS_SERVICE_ID'
const EMAIL_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const EMAIL_PUBLIC_KEY  = 'YOUR_EMAILJS_PUBLIC_KEY'

const CONTACT_EMAIL   = 'akashprajapat006@gmail.com'
const WHATSAPP_NUMBER = '918718970484'
const LINKEDIN_URL    = 'https://www.linkedin.com/in/akash-prajapat-68a30a410/'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const contactItems = [
  { icon: <FiMail size={18} />, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', value: '+91 87189 70484', href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', value: 'akash-prajapat', href: LINKEDIN_URL },
  { icon: <FaGithub size={18} />, label: 'GitHub', value: 'github.com/akashp3696', href: 'https://github.com/akashp3696' },
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, EMAIL_PUBLIC_KEY)
      setStatus('sent')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputBase = {
    background: 'rgba(124,58,237,0.03)',
    border: '1.5px solid rgba(0,0,0,0.08)',
    color: '#0F172A',
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 z-10"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.03) 50%, transparent 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
            <span className="section-tag">Get in touch</span>
            <h2 className="section-title">Let&apos;s <span className="gradient-text">Work Together</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact info */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-bold text-[#0F172A] text-xl sm:text-2xl mb-2">Ready to start a project?</h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-6">
                I&apos;m open to freelance opportunities worldwide. Whether you need a full web
                application, mobile app, or AI integration — let&apos;s make it happen.
              </p>

              <div className="flex flex-col gap-2.5">
                {contactItems.map((c) => (
                  <a key={c.label} href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 glass rounded-xl hover:border-primary/30 hover:translate-x-1 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-primary shrink-0"
                      style={{ background: 'rgba(124,58,237,0.08)' }}>
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#94A3B8] text-xs uppercase tracking-wider">{c.label}</p>
                      <p className="text-[#0F172A] font-medium text-sm truncate">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUp} className="glass p-5 sm:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input name="from_name" type="text" placeholder="Your Name" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder-[#94A3B8]"
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                    onBlur={(e)  => (e.target.style.borderColor = 'rgba(0,0,0,0.08)')} />
                  <input name="from_email" type="email" placeholder="Your Email" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder-[#94A3B8]"
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                    onBlur={(e)  => (e.target.style.borderColor = 'rgba(0,0,0,0.08)')} />
                </div>
                <input name="subject" type="text" placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder-[#94A3B8]"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                  onBlur={(e)  => (e.target.style.borderColor = 'rgba(0,0,0,0.08)')} />
                <textarea name="message" placeholder="Tell me about your project..." rows={5} required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none placeholder-[#94A3B8]"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                  onBlur={(e)  => (e.target.style.borderColor = 'rgba(0,0,0,0.08)')} />

                <button type="submit" disabled={status === 'sending' || status === 'sent'}
                  className="btn-primary justify-center w-full disabled:opacity-70 disabled:cursor-not-allowed mt-1">
                  {status === 'sending' ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    : status === 'sent'  ? '✅ Message Sent!'
                    : status === 'error' ? '❌ Try Again'
                    : <><FiSend size={15} /> Send Message</>}
                </button>

                <p className="text-[#94A3B8] text-xs text-center">I reply within 24 hours</p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
