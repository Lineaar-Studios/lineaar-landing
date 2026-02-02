type ServicesItemProps = {
  title: string;
  description: string;
  showDivider?: boolean;
};

export function ServicesItem({
  title,
  description,
  showDivider = true,
}: ServicesItemProps) {
  return (
    <div className="flex flex-col">
      <h3 className="font-title text-lg font-semibold text-hero-text md:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-base text-brand-ink-light/90">{description}</p>
      {showDivider && (
        <div
          className="mt-6 border-t border-brand-primary/30 pt-6"
          aria-hidden
        />
      )}
    </div>
  );
}
