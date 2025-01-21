'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

import { TimelineItem } from '@/components/ui';
import { content } from './content';

export default function JobList() {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({ container: ref, offset: ['start start', 'end start'] });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = useMemo(() => ['#ffad1d', '#ffffff', '#ffad1d', '#ffad1d', '#1597BB'], []);

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      className="custom-scrollbar relative mb-32 flex h-[30rem] justify-center space-x-6 overflow-hidden overflow-y-auto rounded-md pr-2"
      ref={ref}
    >
      <div className="relative flex w-full max-w-4xl items-start">
        <div className="size-full max-h-full pb-96">
          {content.map(({ id, title, description, dateTime, icon }, index) => {
            return (
              <TimelineItem
                key={id}
                active={activeCard === index}
                title={title}
                description={description}
                dateTime={dateTime?.toUpperCase()}
                icon={icon}
                baseColor={linearGradients[index % linearGradients.length]}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className="sticky top-0 hidden h-full min-w-[500px] max-w-[500px] overflow-hidden rounded-md bg-white lg:block"
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
}
