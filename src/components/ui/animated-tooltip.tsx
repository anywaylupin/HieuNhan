'use client';

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { cn } from '@/lib/utils';
import { useState } from 'react';

declare interface Props extends PropsWithClass {
  label?: string;
  designation?: string;
  onHoverChange?: (hovered: boolean) => void;
}

export const AnimatedTooltip: React.FC<Props> = ({ label, designation, children, className, onHoverChange }) => {
  const [hovered, setHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (onHoverChange) {
      onHoverChange(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (onHoverChange) {
      onHoverChange(false);
    }
  };

  return (
    <div
      role="tooltip"
      aria-hidden
      className={cn('group relative -mr-4', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="popLayout">
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: 'spring', stiffness: 260, damping: 10 }
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{ translateX, rotate }}
            className="bg-tertiary absolute whitespace-nowrap -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md px-4 py-2 text-xs shadow-xl"
          >
            <div className="via-tertiary absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent to-transparent" />
            <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-secondary to-transparent" />
            {label && <div className="relative z-30 text-base font-bold text-white">{label}</div>}
            {designation && <div className="text-xs text-white">{designation}</div>}
          </motion.div>
        )}
      </AnimatePresence>

      <div aria-hidden className="w-full" onMouseMove={handleMouseMove}>
        {children}
      </div>
    </div>
  );
};
