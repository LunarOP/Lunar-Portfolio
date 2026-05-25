"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-20 px-4">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground mb-4 md:text-4xl">
          Send Me a Message
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-10">
          {"Have a project in mind? Fill out the form below and I'll get back to you within 24 hours."}
        </p>

        {submitted ? (
          <div className="rounded-xl bg-card border border-primary/30 p-8 text-center">
            <p className="text-lg font-medium text-foreground">Thank you for reaching out!</p>
            <p className="text-sm text-muted-foreground mt-2">
              {"I'll get back to you within 24 hours."}
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium text-foreground mb-1.5 block">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="What's this regarding?"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me all about your project..."
                rows={5}
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground min-h-[120px]"
              />
            </div>
            <Button type="submit" className="mt-2 rounded-full px-8" size="lg">
              <Send className="size-4" />
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
