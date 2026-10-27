import type { Metadata } from "next";
import { BookingSection } from "@/components/booking-section";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Insurance } from "@/components/insurance";
import { MobileCta } from "@/components/mobile-cta";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { TrustBar } from "@/components/trust-bar";
import { WhyUs } from "@/components/why-us";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  description: clinic.description,
  url: "https://asterhealth.example",
  telephone: clinic.phone,
  email: clinic.email,
  image: clinic.images.hero,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.postalCode,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Team />
        <Testimonials />
        <Insurance />
        <Faq />
        <BookingSection />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
