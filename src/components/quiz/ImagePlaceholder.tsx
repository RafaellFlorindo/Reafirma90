type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex min-h-[180px] w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-rose/70 bg-gradient-to-br from-rose-light/25 to-blush/25 px-4 py-8 text-center ${className}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-rose-dark">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-rose-dark">
        {label}
      </span>
    </div>
  );
}
