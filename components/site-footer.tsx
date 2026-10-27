import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { clinic } from "@/lib/clinic";

const exploreLinks = [
  ...clinic.nav,
  { href: "/#book", label: "Book appointment" },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Modern primary care for the whole family — thoughtful, accessible,
            and close to home.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/75">
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="size-4 text-accent" aria-hidden="true" />
              {clinic.phone}
            </a>
            <a
              href={`mailto:${clinic.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-4 text-accent" aria-hidden="true" />
              {clinic.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              {clinic.addressLine}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Explore
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Hours
          </h2>
          <dl className="mt-4 space-y-2 text-sm">
            {clinic.hours.map((entry) => (
              <div
                key={entry.day}
                className="flex items-center justify-between gap-4"
              >
                <dt className="text-white/60">{entry.day}</dt>
                <dd className="font-medium text-white/85">{entry.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {clinic.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Photography: Unsplash
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
