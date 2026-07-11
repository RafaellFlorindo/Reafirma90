import type { ReactNode } from "react";

type KickerProps = {
  children: ReactNode;
  className?: string;
};

export default function Kicker({ children, className = "" }: KickerProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-rose-light/70 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-terracotta-dark ${className}`}
    >
      {children}
    </span>
  );
}
