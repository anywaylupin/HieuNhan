'use client';

import { HeroButton, HeroEclipse, HeroExperience, HeroNavigation, HeroReview, HeroTitle } from './components';

import type { Props } from '@/types';
import { cn } from '@/utils';
import { useRef } from 'react';

export const Hero = ({ id, className }: Props) => {
  const target = useRef<HTMLDivElement | null>(null);

  return (
    <section ref={target} id={id} className={cn('stretch top-0 flex h-screen w-section items-center', className)}>
      <HeroReview className="absolute left-0 ml-16" />
      <HeroExperience className="absolute right-0 mr-16" />
      <div className="flex size-full flex-col items-center">
        <HeroEclipse className="absolute bottom-0" />
        <HeroButton className="mt-[10vh]" />
        <HeroTitle className="mt-[-2vh]" />
        <HeroNavigation className="absolute bottom-11" />
      </div>
    </section>
  );
};
