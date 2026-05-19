import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'
import CursorGlow from '@/components/CursorGlow'
import ScrollProgress from '@/components/ScrollProgress'
import SkillMarquee from '@/components/SkillMarquee'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark text-[#E2E8F0] overflow-x-hidden">
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <SkillMarquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
