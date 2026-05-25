"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

// Nav bar logo: public/logo.svg (from your Untitled-3.svg)

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Shorts", href: "#shorts" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#work-together" },
  { label: "FAQs", href: "#faq" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string>("#portfolio")

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""))
    const sections = sectionIds
      .map((id) => (typeof document !== "undefined" ? document.getElementById(id) : null))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (!visible.length) return

        const best = visible.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        )

        const id = best.target.id
        const href = `#${id}`
        if (sectionIds.includes(id)) {
          setActiveHref(href)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-25% 0px -50% 0px",
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveHref(href)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none [&>*]:pointer-events-auto">
      {/* Dynamic Island – floating pill, liquid glass */}
      <div className="w-full max-w-3xl flex flex-col items-center gap-2">
        <nav
          className="w-full rounded-full flex items-center justify-between gap-4 px-4 py-2.5 min-h-[52px]"
          style={{
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "saturate(180%) blur(20px)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow:
              "0 4px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
          }}
        >
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.svg"
              alt="Lunar"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
              unoptimized
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className={`text-sm rounded-full px-3 py-1 transition-colors ${
                    activeHref === link.href
                      ? "bg-amber-400/20 text-amber-200 shadow-[0_0_14px_rgba(251,191,36,0.65)]"
                      : "text-muted-foreground/90 hover:text-amber-200 hover:bg-amber-400/10"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {/* Mobile Nav – same liquid glass pill below */}
        {mobileOpen && (
          <div
            className="w-full rounded-2xl overflow-hidden md:hidden"
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "saturate(180%) blur(20px)",
              WebkitBackdropFilter: "saturate(180%) blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow:
                "0 4px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
            }}
          >
            <ul className="flex flex-col items-center gap-1 py-4 px-2">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    onClick={(event) => {
                      handleNavClick(link.href)(event)
                      setMobileOpen(false)
                    }}
                    className={`block text-center py-2.5 text-sm rounded-lg transition-colors ${
                      activeHref === link.href
                        ? "bg-amber-400/20 text-amber-200 shadow-[0_0_14px_rgba(251,191,36,0.65)]"
                        : "text-muted-foreground/90 hover:text-amber-200 hover:bg-amber-400/10"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
