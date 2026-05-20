'use client'

const techStack = [
  'React.js', 'Node.js', 'TypeScript', 'Python', 'Flutter', 'React Native',
  'MongoDB', 'MySQL', 'Spring Boot', 'Java', 'REST API', 'HTML / CSS',
  'JavaScript', 'Full Stack', 'AI / ML', 'Mobile Dev',
]

export default function SkillMarquee() {
  const doubled = [...techStack, ...techStack]

  return (
    <div className="relative overflow-hidden py-5 z-10"
      style={{
        background: 'rgba(124,58,237,0.03)',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}>
      {/* Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #F6F8FF, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #F6F8FF, transparent)' }} />

      <div className="flex items-center gap-6 w-max animate-marquee">
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="text-sm font-medium text-[#94A3B8] whitespace-nowrap hover:text-primary transition-colors cursor-default">
              {tech}
            </span>
            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'rgba(124,58,237,0.3)' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
