import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { Stats } from "@/components/stats"
import { Portfolio } from "@/components/portfolio"
import { MoreWork } from "@/components/more-work"
import { ShortForm } from "@/components/short-form"
import { Testimonials } from "@/components/testimonials"
import { ContactMethods } from "@/components/contact-methods"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
        <TrustedBy />
      </FadeInSection>
      <FadeInSection>
        <Stats />
      </FadeInSection>
      <FadeInSection>
        <Portfolio />
      </FadeInSection>
      <FadeInSection>
        <MoreWork />
      </FadeInSection>
      <FadeInSection>
        <ShortForm />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <FadeInSection>
        <ContactMethods />
      </FadeInSection>
      <FadeInSection>
        <FAQ />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </main>
  )
}
