export type ServiceIcon =
  | "stethoscope"
  | "clock"
  | "heart"
  | "flower"
  | "baby"
  | "flask";

export type StepIcon = "calendar" | "users" | "clipboard";

export type Service = {
  name: string;
  description: string;
  icon: ServiceIcon;
};

export type WhyItem = {
  title: string;
  description: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: StepIcon;
};

export type Provider = {
  name: string;
  credentials: string;
  specialty: string;
  bio: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type OpeningHours = {
  day: string;
  time: string;
};

const unsplash = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const clinic = {
  name: "Aster Health",
  shortName: "Aster",
  tagline: "Primary care that fits your life.",
  description:
    "Thoughtful, unhurried primary care for you and your family — with same-day appointments and a team that knows your name.",
  phone: "(555) 012-3456",
  phoneHref: "tel:+15550123456",
  email: "hello@asterhealth.example",
  address: {
    line1: "124 Harbor Lane",
    line2: "Suite 200",
    city: "Portland",
    state: "OR",
    postalCode: "97205",
  },
  addressLine: "124 Harbor Lane, Suite 200, Portland, OR 97205",
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 7:00 PM" },
    { day: "Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ] satisfies OpeningHours[],
  nav: [
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "Why Aster" },
    { href: "/#team", label: "Care team" },
    { href: "/#faq", label: "FAQ" },
  ],
  services: [
    {
      name: "Preventive & annual exams",
      description:
        "Annual physicals, screenings, and vaccinations that keep small concerns from becoming big ones.",
      icon: "stethoscope",
    },
    {
      name: "Same-day sick visits",
      description:
        "Cold, flu, infection, or something that just feels off? We hold space for you every day.",
      icon: "clock",
    },
    {
      name: "Chronic condition care",
      description:
        "Practical, ongoing support for diabetes, high blood pressure, asthma, and more.",
      icon: "heart",
    },
    {
      name: "Women's health",
      description:
        "Routine gynecologic care, contraception, and menopause support in a comfortable setting.",
      icon: "flower",
    },
    {
      name: "Pediatric & family care",
      description:
        "From first checkups to family visits, care for every age under one roof.",
      icon: "baby",
    },
    {
      name: "On-site labs & diagnostics",
      description:
        "Bloodwork, rapid tests, and screenings without the extra trip across town.",
      icon: "flask",
    },
  ] satisfies Service[],
  whyUs: [
    {
      title: "Unhurried visits",
      description:
        "Thirty-minute appointments give you time to ask questions and be heard.",
    },
    {
      title: "One team who knows you",
      description:
        "Your provider, care coordinator, and nurses work together around your history.",
    },
    {
      title: "Scheduling that works",
      description:
        "Same-day openings, online requests, and evening hours for real life.",
    },
    {
      title: "Clear, fair pricing",
      description:
        "We explain costs up front and check your coverage before you visit.",
    },
  ] satisfies WhyItem[],
  steps: [
    {
      number: "01",
      title: "Request your visit",
      description:
        "Tell us what you need and choose a time that works. We'll confirm within one business day.",
      icon: "calendar",
    },
    {
      number: "02",
      title: "Meet your care team",
      description:
        "We'll match you with the right provider and take time to understand the full picture.",
      icon: "users",
    },
    {
      number: "03",
      title: "Leave with a plan",
      description:
        "You'll get clear next steps, prescriptions if needed, and a team to follow up with.",
      icon: "clipboard",
    },
  ] satisfies Step[],
  team: [
    {
      name: "Claire Bennett",
      credentials: "MD",
      specialty: "Family Medicine",
      bio: "Board-certified family physician focused on preventive care and women's health.",
      image: unsplash("photo-1559839734-2b71ea197ec2", 800),
    },
    {
      name: "Elias Rivera",
      credentials: "DO",
      specialty: "Internal Medicine",
      bio: "Helps adults manage chronic conditions with practical, whole-person plans.",
      image: unsplash("photo-1622253692010-333f2da6031d", 800),
    },
    {
      name: "Jordan Blake",
      credentials: "FNP-C",
      specialty: "Family Nurse Practitioner",
      bio: "Specializes in same-day care and pediatric visits for growing families.",
      image: unsplash("photo-1594824476967-48c8b964273f", 800),
    },
  ] satisfies Provider[],
  testimonials: [
    {
      quote:
        "I finally found a clinic where I don't feel like a number. Dr. Bennett remembered my history and explained everything clearly.",
      name: "Maya R.",
      detail: "Patient since 2023",
    },
    {
      quote:
        "Booked a same-day visit on my lunch break and was seen within the hour. The follow-up was just as thoughtful.",
      name: "James T.",
      detail: "Patient since 2022",
    },
    {
      quote:
        "The whole team is warm and organized. My kids actually look forward to their checkups now.",
      name: "Priya S.",
      detail: "Parent of two",
    },
  ] satisfies Testimonial[],
  insurers: [
    "Aetna",
    "Blue Cross Blue Shield",
    "Cigna",
    "UnitedHealthcare",
    "Medicare",
    "Humana",
  ],
  faqs: [
    {
      question: "Are you accepting new patients?",
      answer:
        "Yes. We welcome new patients of all ages, and most new-patient visits can be scheduled within the same week.",
    },
    {
      question: "Do you offer same-day appointments?",
      answer:
        "We reserve same-day slots every weekday for urgent concerns. Call us or send an appointment request and we'll find the soonest available time.",
    },
    {
      question: "Which insurance plans do you accept?",
      answer:
        "We accept most major plans, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Medicare, and Humana. Call us to verify your specific plan before your visit.",
    },
    {
      question: "What should I bring to my first visit?",
      answer:
        "Please bring a photo ID, your insurance card, a current medication list, and any relevant medical records. Arrive 10 minutes early so we can get you settled.",
    },
    {
      question: "Do you offer virtual visits?",
      answer:
        "Yes. Virtual visits are available for follow-ups, medication checks, and select concerns. Our team will let you know if an in-person visit is needed.",
    },
    {
      question: "How do I request an appointment?",
      answer:
        "Use the request form on this page, call us during clinic hours, or email our front desk. We'll confirm your appointment within one business day.",
    },
  ] satisfies Faq[],
  images: {
    hero: unsplash("photo-1651008376811-b90baee60c1f", 1200),
    about: unsplash("photo-1584515933487-779824d29309", 1200),
  },
};

export type Clinic = typeof clinic;
