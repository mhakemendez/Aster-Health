import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { clinic } from "@/lib/clinic";

export function BookingSection() {
  return (
    <section
      id="book"
      className="scroll-mt-24 bg-gradient-to-b from-background to-mint/40 py-20 sm:py-24"
    >
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Book an appointment"
            title="Your first visit starts here."
            description="Send a request and our front desk will confirm your appointment within one business day. Prefer to talk? We're happy to help by phone."
          />

          <div className="mt-8 space-y-3">
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 transition-colors hover:border-primary/40 hover:bg-mint/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mint text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                  Call us
                </span>
                <span className="mt-0.5 block text-sm font-semibold text-foreground">
                  {clinic.phone}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${clinic.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 transition-colors hover:border-primary/40 hover:bg-mint/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mint text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                  Email
                </span>
                <span className="mt-0.5 block text-sm font-semibold text-foreground">
                  {clinic.email}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mint text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                  Visit
                </span>
                <span className="mt-0.5 block text-sm font-semibold text-foreground">
                  {clinic.addressLine}
                </span>
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-card border border-border bg-white p-5">
            <h3 className="flex items-center gap-2 font-display text-base font-semibold">
              <Clock3 className="size-4 text-primary" aria-hidden="true" />
              Clinic hours
            </h3>
            <dl className="mt-3 space-y-2">
              {clinic.hours.map((entry) => (
                <div
                  key={entry.day}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <dt className="text-muted">{entry.day}</dt>
                  <dd className="font-medium text-foreground">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-white p-5 shadow-soft sm:p-8">
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
