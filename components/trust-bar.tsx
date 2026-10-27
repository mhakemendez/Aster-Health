import {
  CalendarClock,
  Clock3,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/container";

const items: { icon: LucideIcon; label: string }[] = [
  { icon: CalendarClock, label: "Same-day appointments" },
  { icon: ShieldCheck, label: "Most insurance accepted" },
  { icon: Clock3, label: "Evening & Saturday hours" },
  { icon: Star, label: "300+ five-star reviews" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Clinic highlights"
      className="border-y border-border bg-white/70"
    >
      <Container className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-mint text-primary">
              <item.icon className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
