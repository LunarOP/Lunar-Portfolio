"use client"

import { useEffect, useState } from "react"

interface ClickInstance {
  id: number
  x: number
  y: number
}

export function ClickEffect() {
  const [clicks, setClicks] = useState<ClickInstance[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newClick: ClickInstance = {
        id: Date.now() + Math.random(),
        x: e.pageX,
        y: e.pageY,
      }
      setClicks((prev) => [...prev, newClick])
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [])

  useEffect(() => {
    if (clicks.length === 0) return

    // Clean up click elements after 1000ms (covers ripple delay + animation)
    const timer = setTimeout(() => {
      const now = Date.now()
      setClicks((prev) => prev.filter((c) => now - c.id < 1000))
    }, 1000)

    return () => clearTimeout(timer)
  }, [clicks])

  return (
    <div className="absolute inset-0 pointer-events-none z-[9999] overflow-hidden">
      {clicks.map((click) => (
        <ClickBurst key={click.id} x={click.x} y={click.y} />
      ))}
    </div>
  )
}

function ClickBurst({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
    >
      {/* Primary Ripple Ring */}
      <div 
        className="absolute rounded-full border border-[#e5b842]/70 pointer-events-none"
        style={{
          width: "48px",
          height: "48px",
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 0,
          animation: "click-ripple-expand 0.8s ease-in forwards",
          boxShadow: "0 0 10px rgba(229, 184, 66, 0.35), inset 0 0 8px rgba(229, 184, 66, 0.2)",
        }}
      />
    </div>
  )
}
