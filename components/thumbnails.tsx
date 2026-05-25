import Image from "next/image"
import { Download } from "lucide-react"

const thumbnails = [
  { image: "/images/thumb-1.jpg", title: "Minecraft's Secret World", downloads: "11.7K" },
  { image: "/images/thumb-2.jpg", title: "Chess Prodigy's Gambit", downloads: "9.4K" },
  { image: "/images/thumb-3.jpg", title: "SL Prehistoric Dark Rising", downloads: "8.2K" },
  { image: "/images/thumb-4.jpg", title: "Gaming's Biggest Secret", downloads: "7.6K" },
  { image: "/images/thumb-5.jpg", title: "MMO Strategy Mastered", downloads: "11.7K" },
  { image: "/images/thumb-6.jpg", title: "Epic Chess Comeback", downloads: "14.8K" },
]

export function Thumbnails() {
  return (
    <section id="thumbnails" className="py-20 px-4">
      <h2 className="text-center font-serif text-3xl font-bold text-foreground mb-14 md:text-4xl">
        Thumbnail Designs
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
        {thumbnails.map((thumb) => (
          <div key={thumb.title} className="group">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <div className="aspect-video relative">
                <Image
                  src={thumb.image}
                  alt={thumb.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h3 className="text-xs font-medium text-foreground line-clamp-1">{thumb.title}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Download className="size-3" />
                <span>{thumb.downloads}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
