type QuizOptionButtonProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export default function QuizOptionButton({
  label,
  selected,
  onClick,
}: QuizOptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full rounded-2xl border-2 px-5 py-4 text-left text-[1.05rem] font-semibold transition-all duration-200 active:scale-[0.98] ${
        selected
          ? "border-terracotta bg-gradient-to-br from-rose-light/70 to-blush/60 text-terracotta-dark shadow-[0_8px_20px_-10px_var(--color-terracotta-glow)]"
          : "border-sand/80 bg-white/70 text-ink shadow-sm hover:border-rose hover:bg-white"
      }`}
    >
      <span className="flex items-center justify-between gap-3">
        {label}
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
            selected
              ? "scale-100 border-terracotta bg-terracotta text-cream"
              : "scale-90 border-sand text-transparent"
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
      </span>
    </button>
  );
}
