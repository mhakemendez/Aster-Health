"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { clinic } from "@/lib/clinic";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label={`${clinic.name} home`} className="rounded-full">
          <Logo />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {clinic.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {clinic.phone}
          </a>
          <CtaLink href="/#book" className="px-5 py-2.5">
            Book appointment
          </CtaLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:bg-mint lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
        >
          <Container className="py-5">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {clinic.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-mint"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3 border-t border-border pt-5">
              <CtaLink href="/#book" onClick={() => setIsOpen(false)}>
                Book appointment
              </CtaLink>
              <CtaLink href={clinic.phoneHref} variant="secondary">
                <Phone className="size-4" aria-hidden="true" />
                Call {clinic.phone}
              </CtaLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
