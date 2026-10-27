import {
  Baby,
  Clock3,
  FlaskConical,
  Flower2,
  HeartPulse,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { clinic, type ServiceIcon } from "@/lib/clinic";

const icons: Record<ServiceIcon, LucideIcon> = {
  stethoscope: Stethoscope,
  clock: Clock3,
  heart: HeartPulse,
  flower: Flower2,
  baby: Baby,
  flask: FlaskConical,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we treat"
          title="Everyday care, without the runaround."
          description="From routine checkups to unexpected sick days, we're set up to handle the whole picture — often in a single visit."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <article
                key={service.name}
                className="group rounded-card border border-border bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-mint text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
