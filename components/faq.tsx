import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What software do you use?",
    answer:
      "I primarily use Adobe Premiere Pro and After Effects, alongside DaVinci Resolve and Blender for specialized work.",
  },
  {
    question: "What's your usual turnaround time?",
    answer:
      "The turnaround time depends on the project's length and complexity. Feel free to contact me so we can determine a suitable timeline. Please note that faster delivery may cost additional fees.",
  },
  {
    question: "Do you edit both long-form and shorts?",
    answer:
      "Yes - I handle long-form YouTube videos, Shorts, TikToks, Reels, and more. Whatever format your audience lives on, I can edit for it.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Absolutely! Every project includes up to three rounds of revisions to ensure you are 100% satisfied with the final cut. Any additional revisions beyond this scope will incur an additional fee.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-card/50">
      <div className="mx-auto max-w-2xl">
        <h2
          className="text-center text-3xl font-bold mb-14 md:text-4xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-foreground text-left hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
