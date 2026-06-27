"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

// Nav bar logo: public/logo.svg (from your Untitled-3.svg)

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Shorts", href: "#shorts" },
  { label: "Testimonials", href: "#testimonials" },
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
            background: "rgba(12, 10, 7, 0.5)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            border: "1px solid rgba(229, 184, 66, 0.18)",
            boxShadow:
              "0 4px 24px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(229, 184, 66, 0.15), -1.5px -0.5px 2px rgba(245, 158, 11, 0.25), 1.5px 0.5px 2px rgba(229, 184, 66, 0.25)",
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

          {/* Desktop Nav Button */}
          <div className="hidden md:block shrink-0">
            <a
              href="#work-together"
              onClick={handleNavClick("#work-together")}
              className="text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-full px-5 py-2 hover:from-amber-200 hover:to-amber-400 transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.45)] hover:shadow-[0_0_20px_rgba(245,158,11,0.7)]"
            >
              BOOK CALL
            </a>
          </div>

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
              background: "rgba(12, 10, 7, 0.5)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              border: "1px solid rgba(229, 184, 66, 0.18)",
              boxShadow:
                "0 4px 24px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(229, 184, 66, 0.15), -1.5px -0.5px 2px rgba(245, 158, 11, 0.25), 1.5px 0.5px 2px rgba(229, 184, 66, 0.25)",
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
