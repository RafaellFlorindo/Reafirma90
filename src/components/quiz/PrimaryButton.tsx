import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  className?: string;
};

const baseClasses =
  "group relative block w-full overflow-hidden rounded-full bg-terracotta px-6 py-4 text-center text-base font-bold text-cream shadow-[0_10px_30px_-8px_var(--color-terracotta-glow)] transition-all duration-200 hover:shadow-[0_14px_34px_-6px_var(--color-terracotta-glow)] active:scale-[0.97]";

export default function PrimaryButton({
  children,
  onClick,
  href,
  type = "button",
  className = "",
}: PrimaryButtonProps) {
  const content = (
    <span className="relative z-10 inline-flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {content}
    </button>
  );
}
