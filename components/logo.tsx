export function Logo({
  className = "",
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "light";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-full ${
          tone === "light"
            ? "bg-white/10 text-white ring-1 ring-white/15"
            : "bg-primary text-white"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3 5.3 18.7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        </svg>
      </span>
      <span
        className={`font-display text-xl font-semibold tracking-tight ${
          tone === "light" ? "text-white" : "text-foreground"
        }`}
      >
        Aster{" "}
        <span className={tone === "light" ? "text-accent" : "text-primary"}>
          Health
        </span>
      </span>
    </span>
  );
}
