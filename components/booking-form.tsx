"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { ctaClasses } from "@/components/cta-link";
import { clinic } from "@/lib/clinic";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  consent: boolean;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  notes: "",
  consent: false,
};

const timeOptions = [
  "Morning (8:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 7:00 PM)",
];

const serviceOptions = [
  "New patient visit",
  ...clinic.services.map((service) => service.name),
  "Not sure / other",
];

function validate(values: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your full name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a phone number with at least 10 digits.";
  }

  if (!values.service) errors.service = "Please choose a service.";
  if (!values.time) errors.time = "Please choose a preferred time.";

  if (!values.date) {
    errors.date = "Please choose a preferred date.";
  } else {
    const selected = new Date(`${values.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (Number.isNaN(selected.getTime()) || selected < today) {
      errors.date = "Please choose today or a future date.";
    }
  }

  if (!values.consent) {
    errors.consent = "Please agree to be contacted about this request.";
  }

  return errors;
}

export function BookingForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const summaryRef = useRef<HTMLDivElement>(null);

  function updateField<K extends keyof FormFields>(
    field: K,
    value: FormFields[K],
  ) {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const subject = `Appointment request — ${fields.service}`;
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Service: ${fields.service}`,
      `Preferred date: ${fields.date}`,
      `Preferred time: ${fields.time}`,
      fields.notes.trim() ? `Notes: ${fields.notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("ready");
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Appointment request
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
            Tell us a little about your visit.
          </h3>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mint text-primary">
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </span>
      </div>

      {hasErrors ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-5 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm"
        >
          <p className="font-semibold text-foreground">
            Please check the highlighted fields.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-muted">
            {Object.entries(errors)
              .filter(([, message]) => message)
              .map(([field, message]) => (
                <li key={field}>{message}</li>
              ))}
          </ul>
        </div>
      ) : null}

      {status === "ready" ? (
        <div
          role="status"
          className="mt-5 rounded-2xl border border-primary/20 bg-mint p-4 text-sm"
        >
          <p className="font-semibold text-foreground">
            Your email app should open with your request.
          </p>
          <p className="mt-1 leading-6 text-muted">
            If it doesn&apos;t, email us at{" "}
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
        </div>
      ) : null}

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="booking-name"
            className="block text-sm font-semibold text-foreground"
          >
            Full name <span className="text-accent-dark">*</span>
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "booking-name-error" : undefined}
            className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-accent-dark focus:border-accent-dark focus:ring-accent/20"
                : "border-border focus:border-primary focus:ring-primary/20"
            }`}
            placeholder="Alex Morgan"
          />
          {errors.name ? (
            <p
              id="booking-name-error"
              className="mt-1.5 text-xs font-medium text-accent-dark"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="booking-email"
              className="block text-sm font-semibold text-foreground"
            >
              Email <span className="text-accent-dark">*</span>
            </label>
            <input
              id="booking-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={fields.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "booking-email-error" : undefined
              }
              className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-accent-dark focus:border-accent-dark focus:ring-accent/20"
                  : "border-border focus:border-primary focus:ring-primary/20"
              }`}
              placeholder="alex@example.com"
            />
            {errors.email ? (
              <p
                id="booking-email-error"
                className="mt-1.5 text-xs font-medium text-accent-dark"
              >
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="booking-phone"
              className="block text-sm font-semibold text-foreground"
            >
              Phone <span className="text-accent-dark">*</span>
            </label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={fields.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "booking-phone-error" : undefined
              }
              className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-accent-dark focus:border-accent-dark focus:ring-accent/20"
                  : "border-border focus:border-primary focus:ring-primary/20"
              }`}
              placeholder="(555) 000-0000"
            />
            {errors.phone ? (
              <p
                id="booking-phone-error"
                className="mt-1.5 text-xs font-medium text-accent-dark"
              >
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="booking-service"
            className="block text-sm font-semibold text-foreground"
          >
            What can we help with? <span className="text-accent-dark">*</span>
          </label>
          <select
            id="booking-service"
            name="service"
            required
            value={fields.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={
              errors.service ? "booking-service-error" : undefined
            }
            className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 ${
              errors.service
                ? "border-accent-dark focus:border-accent-dark focus:ring-accent/20"
                : "border-border focus:border-primary focus:ring-primary/20"
            }`}
          >
            <option value="">Choose a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p
              id="booking-service-error"
              className="mt-1.5 text-xs font-medium text-accent-dark"
            >
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="booking-date"
              className="block text-sm font-semibold text-foreground"
            >
              Preferred date <span className="text-accent-dark">*</span>
            </label>
            <input
              id="booking-date"
              name="date"
              type="date"
              required
              value={fields.date}
              onChange={(event) => updateField("date", event.target.value)}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? "booking-date-error" : undefined}
              className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 ${
                errors.date
                  ? "border-accent-dark focus:border-accent-dark focus:ring-accent/20"
                  : "border-border focus:border-primary focus:ring-primary/20"
              }`}
            />
            {errors.date ? (
              <p
                id="booking-date-error"
                className="mt-1.5 text-xs font-medium text-accent-dark"
              >
                {errors.date}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="booking-time"
              className="block text-sm font-semibold text-foreground"
            >
              Preferred time <span className="text-accent-dark">*</span>
            </label>
            <select
              id="booking-time"
              name="time"
              required
              value={fields.time}
              onChange={(event) => updateField("time", event.target.value)}
              aria-invalid={Boolean(errors.time)}
              aria-describedby={errors.time ? "booking-time-error" : undefined}
              className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 ${
                errors.time
                  ? "border-accent-dark focus:border-accent-dark focus:ring-accent/20"
                  : "border-border focus:border-primary focus:ring-primary/20"
              }`}
            >
              <option value="">Choose a time</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time ? (
              <p
                id="booking-time-error"
                className="mt-1.5 text-xs font-medium text-accent-dark"
              >
                {errors.time}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="booking-notes"
            className="block text-sm font-semibold text-foreground"
          >
            Anything else we should know?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="booking-notes"
            name="notes"
            rows={4}
            value={fields.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Symptoms, questions, or accessibility needs..."
          />
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              name="consent"
              checked={fields.consent}
              onChange={(event) =>
                updateField("consent", event.target.checked)
              }
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={
                errors.consent ? "booking-consent-error" : undefined
              }
              className="mt-1 size-4 shrink-0 rounded border-border text-primary accent-primary"
            />
            <span>
              I agree to be contacted by Aster Health about this appointment
              request.
            </span>
          </label>
          {errors.consent ? (
            <p
              id="booking-consent-error"
              className="mt-1.5 text-xs font-medium text-accent-dark"
            >
              {errors.consent}
            </p>
          ) : null}
        </div>

        <button type="submit" className={ctaClasses("primary", "w-full")}>
          Send appointment request
          <Send className="size-4" aria-hidden="true" />
        </button>

        <p className="text-xs leading-5 text-muted">
          We&apos;ll confirm within one business day. This form opens your email
          app so you can review the request before sending.
        </p>
      </form>
    </div>
  );
}
