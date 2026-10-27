import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { clinic } from "@/lib/clinic";

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Meet your care team"
          title="People who know your name."
          description="A small, consistent team means fewer repeated stories and more care that actually connects."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.team.map((provider) => (
            <article
              key={provider.name}
              className="overflow-hidden rounded-card border border-border bg-white shadow-card"
            >
              <div className="relative aspect-[4/5] bg-mint">
                <Image
                  src={provider.image}
                  alt={`${provider.name}, ${provider.specialty} at Aster Health`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {provider.name}, {provider.credentials}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {provider.specialty}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {provider.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
