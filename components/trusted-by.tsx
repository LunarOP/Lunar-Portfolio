import Image from "next/image"

const clients = [
  { name: "Ando", image: "/images/ando-logo.jpg" },
  { name: "A What If World", image: "/images/whatifworld-logo.jpg" },
  { name: "GreyTech Guy", image: "/images/greytech-logo.jpg" },
  { name: "Quasar Store", image: "/images/quasar-logo.jpg" },
  { name: "Slipstream Stories", image: "/images/slipstream-logo.jpg" },
  { name: "When Steel Spoke", image: "/images/whensteelspoke-logo.jpg" },
  { name: "ClassITope", image: "/images/classitope-logo.jpg" },
  { name: "NeverCashOut", image: "/images/nevercashout-logo.jpg" },
  { name: "Kivwohs", image: "/images/kivwohs-logo.jpg" },
]

export function TrustedBy() {
  return (
    <section className="py-16 overflow-hidden">
      <h2
        className="text-center text-2xl font-bold mb-14 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Trusted by
      </h2>
      <div 
        className="relative w-full max-w-[1560px] mx-auto overflow-hidden py-10"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <div className="flex w-max marquee-container">
          {/* Main List */}
          <div className="flex gap-6 pr-6 shrink-0 animate-marquee">
            {clients.map((client, index) => (
              <div
                key={`${client.name}-1-${index}`}
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-b from-amber-500/[0.06] to-amber-500/[0.01] border border-amber-500/10 backdrop-blur-md px-5 py-3 w-[240px] h-[90px] flex-shrink-0 shadow-[inset_0_1px_1px_rgba(251,191,36,0.15),0_4px_24px_rgba(0,0,0,0.35)] hover:scale-105 hover:bg-amber-500/[0.09] hover:border-amber-400/20 transition-all duration-300 cursor-pointer"
              >
                {/* Circular profile */}
                <div className="relative size-14 rounded-full overflow-hidden border border-amber-500/15 bg-black/20 shadow-md flex-shrink-0">
                  {client.image ? (
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={56}
                      height={56}
                      className="size-full object-cover"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-primary text-primary-foreground text-xl font-bold">
                      {client.name.charAt(0)}
                    </div>
                  )}
                </div>
                {/* Name */}
                <span className="text-sm font-semibold text-foreground tracking-wide text-left line-clamp-2 flex-1 leading-snug">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate List for Seamless Loop */}
          <div className="flex gap-6 pr-6 shrink-0 animate-marquee" aria-hidden="true">
            {clients.map((client, index) => (
              <div
                key={`${client.name}-2-${index}`}
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-b from-amber-500/[0.06] to-amber-500/[0.01] border border-amber-500/10 backdrop-blur-md px-5 py-3 w-[240px] h-[90px] flex-shrink-0 shadow-[inset_0_1px_1px_rgba(251,191,36,0.15),0_4px_24px_rgba(0,0,0,0.35)] hover:scale-105 hover:bg-amber-500/[0.09] hover:border-amber-400/20 transition-all duration-300 cursor-pointer"
              >
                {/* Circular profile */}
                <div className="relative size-14 rounded-full overflow-hidden border border-amber-500/15 bg-black/20 shadow-md flex-shrink-0">
                  {client.image ? (
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={56}
                      height={56}
                      className="size-full object-cover"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-primary text-primary-foreground text-xl font-bold">
                      {client.name.charAt(0)}
                    </div>
                  )}
                </div>
                {/* Name */}
                <span className="text-sm font-semibold text-foreground tracking-wide text-left line-clamp-2 flex-1 leading-snug">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
