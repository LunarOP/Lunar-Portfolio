import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)"
        }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <h1
          className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl text-balance bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {"Let's Bring Life To Your Videos"}
        </h1>
        <p className="mt-4 max-w-lg text-muted-foreground text-pretty">
          I Specialize in High-Quality Documentary, Gaming and IRL videos
        </p>
        <Button
          asChild
          className="mt-8 rounded-full px-8 py-6 text-base font-semibold shadow-[0_0_24px_rgba(245,158,11,0.55)] transition-transform transition-shadow duration-200 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(245,158,11,0.9)]"
          size="lg"
        >
          <a href="#work-together">Book a Consultation</a>
        </Button>
      </div>

      {/* Embedded Video Preview */}
      <div className="relative z-10 mt-12 w-full max-w-2xl overflow-hidden rounded-xl border border-border shadow-2xl shadow-primary/5">
        <div className="aspect-video bg-card flex items-center justify-center relative">
          <iframe
            src="https://www.youtube.com/embed/H1gtFHhwjpU"
            title="Video editor showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        </div>
      </div>
    </section>
  )
}
