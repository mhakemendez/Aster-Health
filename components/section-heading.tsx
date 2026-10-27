export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          tone === "light" ? "text-accent" : "text-primary"
        }`}
      >
        <span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          tone === "light" ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-pretty text-base leading-7 ${
            tone === "light" ? "text-white/80" : "text-muted"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
