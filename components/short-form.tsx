const shorts = [
  {
    videoId: "e8A8hrauXvs",
    title: "What If Hitler Won WWII?",
  },
  {
    videoId: "X3weAQy9iQ4",
    title: "5 Hidden Windows Settings That Make Your PC Faster",
  },
  {
    videoId: "rVKXvT_iBxg",
    title: "$1 vs $100 Case Opening!",
  },
  {
    videoId: "5YtHAWZ--d4",
    title: "Why 4K Monitors Are Not Worth It",
  },
]

type ShortWithAuthor = (typeof shorts)[number] & { authorName: string }

async function getShortsWithAuthors(): Promise<ShortWithAuthor[]> {
  return Promise.all(
    shorts.map(async (short) => {
      try {
        const res = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${short.videoId}&format=json`,
          { next: { revalidate: 60 * 60 } }
        )
        if (!res.ok) throw new Error("Failed oEmbed")
        const data = (await res.json()) as { author_name?: string }
        return { ...short, authorName: data.author_name ?? "YouTube Creator" }
      } catch {
        return { ...short, authorName: "YouTube Creator" }
      }
    })
  )
}

export async function ShortForm() {
  const items = await getShortsWithAuthors()

  return (
    <section id="shorts" className="py-20 px-4 bg-card/50">
      <h2
        className="text-center text-3xl font-bold mb-14 md:text-4xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Short-Form Content
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((short) => (
          <div
            key={short.videoId}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-white/12 bg-black/40 shadow-[0_14px_40px_rgba(0,0,0,0.85)] transition-transform transition-shadow duration-300 will-change-transform hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.95)]"
          >
            <div className="relative aspect-[9/16]">
              <iframe
                src={`https://www.youtube.com/embed/${short.videoId}`}
                title={short.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 size-full"
              />
            </div>
            <div className="flex flex-col gap-0.5 px-3 py-3">
              <h3 className="text-xs font-semibold text-foreground line-clamp-2">
                {short.title}
              </h3>
              <p className="text-[11px] text-muted-foreground">{short.authorName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
