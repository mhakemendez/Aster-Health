import { Star } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { clinic } from "@/lib/clinic";

export function Testimonials() {
  return (
    <section className="border-y border-border bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Patient stories"
          title="Good care is worth talking about."
          description="Real words from people who trust us with their health — and their families'."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {clinic.testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-card border border-border bg-background p-6"
            >
              <div
                role="img"
                aria-label="5 out of 5 stars"
                className="flex gap-1"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-7 text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-5">
                <p className="font-display font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
