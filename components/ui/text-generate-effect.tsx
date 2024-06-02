'use client';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

import { cn } from '@/utils/cn';

export interface TextGenerateEffectProps {
  className?: string;
  words: string;
}

export const TextGenerateEffect = ({ className, words }: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  useEffect(() => {
    animate('span', { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [animate]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} className={`${idx > 3 ? 'text-purple' : 'text-black dark:text-white'} opacity-0`}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">{renderWords()}</div>
      </div>
    </div>
  );
};
