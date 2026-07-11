type QuizProgressBarProps = {
  progress: number;
  onBack?: () => void;
};

export default function QuizProgressBar({
  progress,
  onBack,
}: QuizProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className="fixed top-0 inset-x-0 z-50 border-b border-rose-light/50 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center gap-3 px-5 py-4">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            aria-label="Voltar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-rose-dark transition-colors hover:bg-rose-light/60 active:scale-90"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        ) : (
          <span className="h-9 w-9 shrink-0" />
        )}
        <div className="h-2 w-full overflow-hidden rounded-full bg-sand/70">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose to-terracotta transition-[width] duration-500 ease-out"
            style={{ width: `${clamped}%` }}
          />
        </div>
      </div>
    </div>
  );
}
