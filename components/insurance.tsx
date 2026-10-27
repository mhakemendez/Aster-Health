import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { clinic } from "@/lib/clinic";

export function Insurance() {
  return (
    <section aria-labelledby="insurance-heading" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-[2rem] border border-border bg-mint/60 p-6 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Insurance & payment
            </p>
            <h2
              id="insurance-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
            >
              We work with most major plans.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Not sure about your coverage? Call us and we&apos;ll check before
              you book — no surprise bills, no guesswork.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 lg:mt-0 lg:max-w-lg lg:justify-end">
            {clinic.insurers.map((insurer) => (
              <span
                key={insurer}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground"
              >
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
