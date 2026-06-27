const works = [
  {
    videoId: "MOUDCcVdMqo",
    title: "$1 vs $100 Case Opening!",
  },
  {
    videoId: "7TzyWY8aHp4",
    title: "What If Hitler Won WWII?",
  },
  {
    videoId: "UPIlN27ZXwc",
    title: "5 Hidden Windows Tricks That Instantly Make Your PC Faster!",
  },
]

export function MoreWork() {
  return (
    <section className="py-20 px-4">
      <h2
        className="text-center text-3xl font-bold mb-14 md:text-4xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Some More Work
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <div
            key={work.videoId}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-amber-500/15 bg-black/40 shadow-[0_14px_40px_rgba(0,0,0,0.85)] transition-transform transition-shadow duration-300 will-change-transform hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.95)]"
          >
            <div className="overflow-hidden rounded-[24px]">
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${work.videoId}`}
                  title={work.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 size-full"
                />
              </div>
            </div>
            <h3 className={`mt-3 px-5 pb-4 font-medium text-foreground line-clamp-2 ${work.title.length > 40 ? "text-xs" : "text-sm"}`}>
              {work.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
