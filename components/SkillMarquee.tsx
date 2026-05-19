'use client'

const techStack = [
  'React.js', 'Node.js', 'TypeScript', 'Python', 'Flutter', 'React Native',
  'MongoDB', 'MySQL', 'Spring Boot', 'Java', 'REST API', 'HTML / CSS',
  'JavaScript', 'Full Stack', 'AI / ML', 'Mobile Dev',
]

export default function SkillMarquee() {
  const doubled = [...techStack, ...techStack]

  return (
    <div className="relative overflow-hidden py-6 border-y border-[rgba(255,255,255,0.05)] z-10"
      style={{ background: 'rgba(124,58,237,0.03)' }}>
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0A0A14, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #0A0A14, transparent)' }} />

      <div className="flex items-center gap-6 w-max animate-marquee">
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="text-sm font-medium text-[#64748B] whitespace-nowrap hover:text-primary-light transition-colors cursor-default">
              {tech}
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
