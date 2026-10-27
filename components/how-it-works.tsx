import {
  CalendarCheck,
  ClipboardCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { SectionHeading } from "@/components/section-heading";
import { clinic, type StepIcon } from "@/lib/clinic";

const icons: Record<StepIcon, LucideIcon> = {
  calendar: CalendarCheck,
  users: UsersRound,
  clipboard: ClipboardCheck,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-primary-dark py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="How it works"
            title="Three simple steps to better care."
            description="No phone tag, no confusing portals. Just a straightforward path to the right provider."
          />
          <div className="flex lg:justify-end">
            <CtaLink href="#book" variant="light">
              Start with a visit
            </CtaLink>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {clinic.steps.map((step) => {
            const Icon = icons[step.icon];

            return (
              <article
                key={step.number}
                className="rounded-card border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-white/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl font-semibold text-white/15">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
