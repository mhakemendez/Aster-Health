import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Aster Health website and appointment request form.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Terms of use
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: October 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-muted">
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Not medical advice
              </h2>
              <p className="mt-2">
                The content on this website is for general information only and
                is not a substitute for professional medical advice, diagnosis,
                or treatment. If you have a medical emergency, call 911 or go to
                the nearest emergency department.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Appointment requests
              </h2>
              <p className="mt-2">
                Submitting an appointment request does not create a
                patient-provider relationship or guarantee an appointment. Our
                team will contact you to confirm availability and next steps.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Website use
              </h2>
              <p className="mt-2">
                You agree to use this website lawfully and to provide accurate
                information when contacting us. We may update site content,
                services, and these terms at any time.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Contact us
              </h2>
              <p className="mt-2">
                Questions about these terms? Email{" "}
                <a
                  href={`mailto:${clinic.email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {clinic.email}
                </a>{" "}
                or call{" "}
                <a
                  href={clinic.phoneHref}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {clinic.phone}
                </a>
                .
              </p>
            </section>
            <p className="rounded-2xl border border-border bg-mint/50 p-4 text-xs leading-6">
              This is placeholder terms copy for the Aster Health demo. Have it
              reviewed by legal counsel before publishing.
            </p>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            &larr; Back to Aster Health
          </Link>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
