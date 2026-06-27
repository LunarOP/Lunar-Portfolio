"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  alpha: number
  targetAlpha: number
  twinkleSpeed: number
  phase: number
  dx: number
  dy: number
}

export function SparklesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const width = canvas.width
      const height = canvas.height
      // Density: Proportional to screen size for premium balance without clutter
      const count = Math.min(Math.floor(width * 0.04), 100)
      particles = []

      for (let i = 0; i < count; i++) {
        particles.push(createParticle(width, height, true))
      }
    }

    const createParticle = (width: number, height: number, randomY = false): Particle => {
      const size = Math.random() * 1.5 + 0.6 // between 0.6px and 2.1px
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : height + 10,
        size,
        alpha: 0,
        targetAlpha: Math.random() * 0.65 + 0.25, // peak brightness
        twinkleSpeed: Math.random() * 0.012 + 0.004, // phase increment speed (very slow transitions)
        phase: Math.random() * Math.PI, // start at random phase
        dx: (Math.random() - 0.5) * 0.08, // slow horizontal drift
        dy: -(Math.random() * 0.22 + 0.08), // slow upward drift
      }
    }

    const drawParticle = (p: Particle) => {
      if (!ctx) return
      
      // Twinkle opacity calculated using a smooth sine wave
      p.alpha = Math.sin(p.phase) * p.targetAlpha
      if (p.alpha < 0) p.alpha = 0

      // Draw outer soft glow
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.8)
      grad.addColorStop(0, `rgba(253, 230, 138, ${p.alpha * 0.95})`) // soft golden/champagne core
      grad.addColorStop(0.35, `rgba(245, 158, 11, ${p.alpha * 0.45})`) // warm amber halo
      grad.addColorStop(1, "rgba(0, 0, 0, 0)")
      
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size * 2.8, 0, Math.PI * 2)
      ctx.fill()

      // Draw high-intensity center core
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size * 0.75, 0, Math.PI * 2)
      ctx.fill()

      // Draw subtle cross flare for brighter, larger particles at peak alpha
      if (p.size > 1.3 && p.alpha > 0.4) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${(p.alpha - 0.4) * 1.6})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        // Horizontal bar
        ctx.moveTo(p.x - p.size * 2.8, p.y)
        ctx.lineTo(p.x + p.size * 2.8, p.y)
        // Vertical bar
        ctx.moveTo(p.x, p.y - p.size * 2.8)
        ctx.lineTo(p.x, p.y + p.size * 2.8)
        ctx.stroke()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, idx) => {
        // Increment drift and twinkle phase
        p.x += p.dx
        p.y += p.dy
        p.phase += p.twinkleSpeed

        // Reset particle if it finishes its cycle or exits bounds
        if (p.phase >= Math.PI || p.y < -15 || p.x < -15 || p.x > canvas.width + 15) {
          particles[idx] = createParticle(canvas.width, canvas.height, false)
        } else {
          drawParticle(p)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
