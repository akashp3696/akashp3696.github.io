'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let mx = -200, my = -200
    let gx = -200, gy = -200

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
    }

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
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Large trailing glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
        }}
      />
      {/* Tiny dot cursor */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
        style={{ background: 'rgba(168,85,247,0.7)', mixBlendMode: 'screen' }}
      />
    </>
  )
}
