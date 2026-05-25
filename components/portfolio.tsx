import Image from "next/image"

type PortfolioItem = {
  type: "youtube"
  videoId: string
  title: string
  testimonial: { name: string; avatar?: string; text: string }
} | {
  type: "image"
  image: string
  title: string
  testimonial: { name: string; avatar?: string; text: string }
}

const portfolioItems: PortfolioItem[] = [
  {
    type: "youtube" as const,
    videoId: "1P1aB0jFUCk",
    title: "Choosing a Piano Piece Is Surprisingly Easy",
    testimonial: {
      name: "ClassItope",
      avatar: "/images/classitope-logo.jpg",
      text: "Bumped my APV to 78%, which is amazing! My previous videos usually dropped off around 40%.",
    },
  },
  {
    type: "youtube" as const,
    videoId: "Lv6wCJzEtpc",
    title: "Gaming Compilation Montage",
    testimonial: {
      name: "Ando",
      avatar: "/images/ando-logo.jpg",
      text: "Nice job on this one.",
    },
  },
  {
    type: "youtube" as const,
    videoId: "E7bzUnHoVLU",
    title: "Weekly Highlights Series",
    testimonial: {
      name: "A What If World",
      avatar: "/images/whatifworld-logo.jpg",
      text: "Incredible editing pace. Lunar is the GOAT!",
    },
  },
  {
    type: "youtube" as const,
    videoId: "Nc8-IKtROz0",
    title: "Documentary Style Gaming",
    testimonial: {
      name: "GreyTech Guy",
      avatar: "/images/greytech-logo.jpg",
      text: "The edits made my channel feel like a real production. 10 out of 10.",
    },
  },
  {
    type: "youtube" as const,
    videoId: "A74eaILlkUw",
    title: "Quasar Store Highlight",
    testimonial: {
      name: "Quasar Store",
      avatar: "/images/quasar-logo.jpg",
      text: "Amazing work as always!",
    },
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4">
      <h2
        className="text-center text-3xl font-bold mb-14 md:text-4xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Portfolio
      </h2>

      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        {portfolioItems.map((item, i) => (
          <div
            key={item.title}
            className={`group flex flex-col gap-6 md:flex-row md:items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Video / Embed */}
            <div className="relative flex-1 overflow-hidden rounded-[24px] border border-white/12 bg-black/40 shadow-[0_16px_45px_rgba(0,0,0,0.8)] transition-transform transition-shadow duration-300 will-change-transform group-hover:-translate-y-2 group-hover:shadow-[0_26px_80px_rgba(0,0,0,0.95)]">
              <div className="aspect-video relative">
                {item.type === "youtube" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 size-full"
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="flex-shrink-0 md:w-72">
              <div className="rounded-xl bg-card border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  {item.testimonial.avatar ? (
                    <Image
                      src={item.testimonial.avatar}
                      alt={item.testimonial.name}
                      width={40}
                      height={40}
                      className="size-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {item.testimonial.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium text-foreground text-sm">
                    {item.testimonial.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {`"${item.testimonial.text}"`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
