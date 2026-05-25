import Image from "next/image"

const testimonials = [
  {
    name: "Quasar Store",
    handle: "@quasarstore",
    avatar: "/images/quasar-store-avatar.png",
    text: "Perfect!",
  },
  {
    name: "Ando",
    handle: "@urboiando",
    avatar: "/images/ando-logo.jpg",
    text: "Banger after one another",
  },
  {
    name: "A What If World",
    handle: "@AWhatifWorld",
    avatar: "/images/whatifworld-logo.jpg",
    text: "Super Engaging.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-card/50">
      <h2
        className="text-center text-3xl font-bold mb-14 md:text-4xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        What Creators Are Saying
      </h2>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-xl bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              {"avatar" in t && t.avatar ? (
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
              ) : (
                <div className={`flex size-10 items-center justify-center rounded-full ${"color" in t ? t.color : "bg-primary"} text-foreground font-bold`}>
                  {"initial" in t ? t.initial : t.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.handle}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{`"${t.text}"`}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
