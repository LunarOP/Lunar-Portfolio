"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 200, suffix: "+", label: "Videos Edited" },
  { value: 10, suffix: "M+", label: "Views Generated" },
  { value: 10, suffix: "+", label: "Creators Worked With" },
  { value: 5, suffix: "+", label: "Years Experience" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div
      ref={ref}
      className="text-4xl font-bold md:text-5xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      {count}
      {suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
          >
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
