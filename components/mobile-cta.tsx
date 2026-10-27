import { CalendarCheck, Phone } from "lucide-react";
import { ctaClasses } from "@/components/cta-link";
import { clinic } from "@/lib/clinic";

export function MobileCta() {
  return (
    <>
      <div className="h-20 lg:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={clinic.phoneHref}
            className={ctaClasses("secondary", "flex-1 px-4 py-3")}
          >
            <Phone className="size-4" aria-hidden="true" />
            Call
          </a>
          <a
            href="#book"
            className={ctaClasses("primary", "flex-[1.4] px-4 py-3")}
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book appointment
          </a>
        </div>
      </div>
    </>
  );
}
