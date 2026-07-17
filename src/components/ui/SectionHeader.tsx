type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 ${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {eyebrow ? (
        <p className="font-heading mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-heading text-4xl font-bold tracking-tight text-[#F8FAFC] md:text-6xl">
        {title}
      </h2>

      <div
        className={`mt-4 h-[2px] w-28 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {subtitle ? (
        <p
          className={`mt-6 max-w-3xl text-base leading-7 text-[#94A3B8] md:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}