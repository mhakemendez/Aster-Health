import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { SectionHeading } from "@/components/section-heading";
import { clinic } from "@/lib/clinic";

export function WhyUs() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-border bg-white py-20 sm:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-sand shadow-card">
            <div className="relative aspect-[5/4]">
              <Image
                src={clinic.images.about}
                alt="A care team member holding a patient's hand in support"
                fill
                sizes="(min-width: 1024px) 46vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 right-5 rounded-2xl bg-primary px-5 py-4 text-white shadow-soft sm:right-8">
            <p className="font-display text-2xl font-semibold">30 min</p>
            <p className="text-xs uppercase tracking-wider text-white/75">
              average visit
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Why Aster"
            title="Care that doesn't feel rushed."
            description="You deserve a provider who has time to listen, a team that remembers your history, and a plan that makes sense for your life."
          />

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {clinic.whyUs.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="#book">Book a visit</CtaLink>
            <CtaLink href="#team" variant="secondary">
              Meet the team
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
