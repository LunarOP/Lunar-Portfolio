import { Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Add me on Discord and send a DM. Username: ayrtonvonlunar",
    buttonText: "Open Discord",
    href: "https://discord.com/users/830410318312112149",
  },
  {
    icon: Mail,
    title: "Send an Email",
    description: "Get in touch directly for detailed inquiries at lunareditz666@gmail.com.",
    buttonText: "Send Email",
    href: "mailto:lunareditz666@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "DM on Twitter",
    description: "Quick questions? Reach out on social media.",
    buttonText: "Message Me",
    href: "https://x.com/ayrtonlunar",
  },
]

export function ContactMethods() {
  return (
    <section id="work-together" className="py-20 px-4">
      <h2
        className="text-center text-3xl font-bold mb-14 md:text-4xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {"Let's Work Together"}
      </h2>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method) => (
          <div
            key={method.title}
            className="flex flex-col items-center text-center rounded-[24px] bg-card border border-border p-8 shadow-[0_14px_40px_rgba(0,0,0,0.85)] transition-transform transition-shadow duration-300 will-change-transform hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.95)]"
          >
            <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <method.icon className="size-7" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {method.description}
            </p>
            <Button asChild className="mt-auto rounded-full px-6">
              <a href={method.href}>{method.buttonText}</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
