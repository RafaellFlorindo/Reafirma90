"use client";

import { useEffect, useState } from "react";
import { analyzingMicrotexts } from "@/lib/quizFlow";

const DURATION_MS = 3500;
const TICK_MS = 50;
const TOTAL_TICKS = DURATION_MS / TICK_MS;
const PROGRESS_STEP = 100 / TOTAL_TICKS;

type AnalyzingScreenProps = {
  onComplete: () => void;
};

export default function AnalyzingScreen({ onComplete }: AnalyzingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => Math.min(100, current + PROGRESS_STEP));
    }, TICK_MS);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return;

    const timeout = window.setTimeout(onComplete, 400);
    return () => window.clearTimeout(timeout);
  }, [progress, onComplete]);

  const textIndex = Math.min(
    analyzingMicrotexts.length - 1,
    Math.floor((progress / 100) * analyzingMicrotexts.length)
  );

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-10 text-center">
      <div className="relative flex h-32 w-32 items-center justify-center">
        <svg width="128" height="128" viewBox="0 0 128 128" className="-rotate-90">
          <circle
            cx="64"
            cy="64"
            r="56"
            fill="none"
            stroke="var(--color-sand)"
            strokeWidth="8"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            fill="none"
            stroke="var(--color-terracotta)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 56}
            strokeDashoffset={2 * Math.PI * 56 * (1 - progress / 100)}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <span className="absolute font-display text-2xl font-semibold text-terracotta-dark">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="font-display text-xl font-semibold text-ink">
          Preparando seu resultado
        </h1>
        <p
          key={textIndex}
          className="animate-quiz-fade text-sm font-semibold text-ink-soft"
        >
          {analyzingMicrotexts[textIndex]}
        </p>
      </div>
    </div>
  );
}
