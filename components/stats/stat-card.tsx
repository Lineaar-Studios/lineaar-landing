type StatCardProps = {
  value: string;
  label: string;
  variant?: "filledDark" | "filledLight" | "outline";
};

export function StatCard({
  value,
  label,
  variant = "filledDark",
}: StatCardProps) {
  const isFilled = variant === "filledDark" || variant === "filledLight";
  const bgClass =
    variant === "filledDark"
      ? "bg-[#8978F8]"
      : variant === "filledLight"
        ? "bg-[#A294F4]"
        : "border border-violet-200/80 bg-white";

  return (
    <div
      className={`rounded-[8px] px-6 py-8 ${bgClass} ${
        isFilled ? "text-white" : "text-brand-primary"
      }`}
    >
      <p className="font-title text-3xl font-semibold md:text-4xl">{value}</p>
      <p
        className={
          isFilled
            ? "mt-2 text-sm text-white/90"
            : "mt-2 text-sm text-brand-primary/90"
        }
      >
        {label}
      </p>
    </div>
  );
}
