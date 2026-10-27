import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { clinic } from "@/lib/clinic";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-40 top-0 size-[32rem] rounded-full bg-mint opacity-80 blur-3xl" />
        <div className="absolute -right-32 top-20 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <Container className="grid items-center gap-14 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Now accepting new patients
          </p>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.65rem]">
            Primary care that{" "}
            <span className="text-primary">fits your life.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted">
            {clinic.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#book">
              Book an appointment
              <ArrowRight className="size-4" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={clinic.phoneHref} variant="secondary">
              <Phone className="size-4" aria-hidden="true" />
              Call {clinic.phone}
            </CtaLink>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                Same-day
              </dt>
              <dd className="mt-1 font-display text-base font-semibold sm:text-lg">
                Appointments
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                Average
              </dt>
              <dd className="mt-1 font-display text-base font-semibold sm:text-lg">
                30-min visits
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                Rated
              </dt>
              <dd className="mt-1 font-display text-base font-semibold sm:text-lg">4.9/5</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-sand to-mint blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src={clinic.images.hero}
                alt="A smiling Aster Health primary care physician in a bright clinic"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />

              <div className="absolute left-2.5 bottom-4 rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mint text-primary">
                    <CalendarCheck className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Fast & Reliable
                    </p>
                    <p className="font-display text-base font-semibold">
                      Same-Day Service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 top-8 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-card sm:block">
            <div className="flex items-center gap-2">
              <Star
                className="size-4 fill-accent text-accent"
                aria-hidden="true"
              />
              <span className="font-display text-sm font-semibold">4.9/5</span>
            </div>
            <p className="mt-0.5 text-xs text-muted">300+ patient reviews</p>
          </div>

          <div className="absolute -right-3 bottom-24 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-card md:block">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <ShieldCheck
                className="size-4 text-primary"
                aria-hidden="true"
              />
              Insurance accepted
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
