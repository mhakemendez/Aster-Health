import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aster Health collects, uses, and protects patient information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Privacy policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: October 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-muted">
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Information we collect
              </h2>
              <p className="mt-2">
                We collect information you provide when you request an
                appointment, contact our team, or receive care. This may include
                your name, contact details, insurance information, and relevant
                health information.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                How we use information
              </h2>
              <p className="mt-2">
                We use your information to schedule appointments, provide care,
                coordinate with your care team, process insurance, and respond to
                questions. We do not sell patient information.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Protecting your information
              </h2>
              <p className="mt-2">
                We use administrative, technical, and physical safeguards
                designed to protect patient information. Access is limited to
                team members who need it to provide care or support clinic
                operations.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Contact us
              </h2>
              <p className="mt-2">
                Questions about this policy? Email{" "}
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
              This is placeholder policy copy for the Aster Health demo. Have it
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
