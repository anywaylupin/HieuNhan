'use client';

import { AboutAvatar, AboutContent } from './components';

import type { Props } from '@/types';
import { cn } from '@/utils';

export const About = ({ id, className }: Props) => (
  <section
    id={id}
    className={cn(
      'min-h-section flex w-section items-center gap-8 rounded-tl-3xl rounded-tr-3xl bg-white px-20',
      className
    )}
  >
    <div className="flex flex-col items-center justify-between gap-16">
      <h2 className="w-full text-start text-5xl">About Me</h2>
      <AboutContent />
    </div>

    <AboutAvatar />
  </section>
);
