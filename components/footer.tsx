import Image from "next/image"
import { ArrowRight } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Shorts", href: "#shorts" },
  { label: "Contact", href: "#work-together" },
]

export function Footer() {
  return (
    <footer className="px-3 pb-0 pt-2 sm:px-4">
      <div
        className="relative mx-auto w-full overflow-hidden rounded-t-[2rem] border border-b-0 border-amber-400/[0.08] px-6 py-12 sm:px-10 md:px-14 lg:px-20"
        style={{
          background:
            "linear-gradient(160deg, rgba(15,12,8,0.97) 0%, rgba(10,8,4,0.99) 40%, rgba(18,14,6,0.95) 100%)",
          boxShadow:
            "0 0 120px rgba(0,0,0,0.6), inset 0 1px 0 rgba(245,158,11,0.06), 0 0 60px rgba(245,158,11,0.03)",
        }}
      >
        {/* Subtle golden glow in top-right corner */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,1) 0%, transparent 70%)",
          }}
        />
        {/* Subtle golden glow in bottom-left corner */}
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,1) 0%, transparent 70%)",
          }}
        />

        {/* ── Main content — all side by side ── */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-8 lg:gap-14">

          {/* Left — Logo, name, tagline */}
          <div className="flex flex-col gap-4 items-start">
            <Image
              src="/logo.svg"
              alt="Lunar"
              width={140}
              height={42}
              className="h-10 w-auto object-contain"
              unoptimized
            />
            <h2
              className="text-3xl font-extrabold uppercase tracking-[0.1em] sm:text-4xl lg:text-5xl bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-montserrat, var(--font-sans))" }}
            >
              Lunar
            </h2>
            <p className="max-w-[280px] text-sm leading-relaxed text-amber-100/40">
              Crafting edits that keep viewers watching.
            </p>
          </div>

          {/* Center — Explore links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Explore
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-amber-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right — Get in touch */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Get in Touch
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ready to level up your content?
              <br />
              Book a free consultation.
            </p>
            <a
              href="#work-together"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all duration-300 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_16px_rgba(245,158,11,0.4)] hover:shadow-[0_0_28px_rgba(245,158,11,0.65)]"
            >
              Book a Call
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="relative mt-12 flex flex-col items-center justify-between gap-4 border-t border-amber-400/[0.08] pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground/50">
            © 2026 Lunar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Developed by{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent font-medium">
              Lunar
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
