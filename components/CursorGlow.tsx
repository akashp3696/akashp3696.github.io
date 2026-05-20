'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let mx = -300, my = -300
    let gx = -300, gy = -300

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      gx = lerp(gx, mx, 0.07)
      gy = lerp(gy, my, 0.07)
      if (glowRef.current) {
        glowRef.current.style.left = gx + 'px'
        glowRef.current.style.top  = gy + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div ref={glowRef} className="fixed pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2"
      style={{
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)',
      }}
    />
  )
}
