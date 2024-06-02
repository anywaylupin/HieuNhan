import React from 'react';

import { cn } from '@/utils';

export interface MagicButtonProps {
  title: string;
  className?: string;
  handleClick?: () => void;
  icon?: React.ReactNode;
  position?: ComponentPositionValue;
}

export const MagicButton = ({ title, icon, position, handleClick, className }: MagicButtonProps) => (
  <button className="relative mt-10 inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span
      className={cn(
        'inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl',
        className,
      )}
    >
      {position === 'prepend' && icon}
      {title}
      {position === 'append' && icon}
    </span>
  </button>
);
