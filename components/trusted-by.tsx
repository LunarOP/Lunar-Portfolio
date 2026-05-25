import Image from "next/image"

const clients = [
  { name: "Ando", image: "/images/ando-logo.jpg" },
  { name: "A What If World", image: "/images/whatifworld-logo.jpg" },
  { name: "GreyTech Guy", image: "/images/greytech-logo.jpg" },
  { name: "Quasar Store", image: "/images/quasar-logo.jpg" },
  { name: "Slipstream Stories", image: "/images/slipstream-logo.jpg" },
  { name: "When Steel Spoke", image: "/images/whensteelspoke-logo.jpg" },
  { name: "ClassITope", image: "/images/classitope-logo.jpg" },
]

export function TrustedBy() {
  return (
    <section className="py-16 px-4">
      <h2
        className="text-center text-2xl font-bold mb-10 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Trusted by
      </h2>
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex items-center gap-3 rounded-full bg-card border border-border px-5 py-2.5"
          >
            {client.image ? (
              <Image
                src={client.image}
                alt={client.name}
                width={32}
                height={32}
                className="size-8 rounded-full object-cover"
              />
            ) : (
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {client.initial}
              </div>
            )}
            <span className="text-sm font-medium text-foreground">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
