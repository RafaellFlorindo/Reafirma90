import type { ReactNode } from "react";

type ScreenTransitionProps = {
  screenKey: number;
  children: ReactNode;
};

export default function ScreenTransition({
  screenKey,
  children,
}: ScreenTransitionProps) {
  return (
    <div key={screenKey} className="flex flex-1 flex-col animate-quiz-screen">
      {children}
    </div>
  );
}
