import { ChevronDown } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { clinic } from "@/lib/clinic";

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-y border-border bg-white py-20 sm:py-24"
    >
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title="Answers before you visit."
            description="Still unsure about something? Call us and a real person will help you sort it out."
          />
          <a
            href={clinic.phoneHref}
            className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Call {clinic.phone}
          </a>
        </div>

        <div className="divide-y divide-border rounded-card border border-border bg-background px-5 sm:px-6">
          {clinic.faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown
                  className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 pr-8 text-sm leading-6 text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
