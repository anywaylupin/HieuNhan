import { AnimatePresence, motion } from 'framer-motion';

import { IconMail } from '@/components';
import type { Props } from '@/types';
import { cn } from '@/utils';
import { colors } from '@/themes';
import { useState } from 'react';

type HoverItemProps = {
  index: number;
  type: string;
  label: string;
  iconType: string;
  hoveredIndex: number;
  setHoveredIndex: (index: number) => void;
  href?: string;
};

const HoverBackground = () => (
  <motion.span
    className="absolute inset-0 block size-full rounded-full bg-secondary"
    layoutId="hoverBackground"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.15, ease: 'easeInOut' } }}
    exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeInOut' } }}
  />
);

const Icon = ({ iconType, color = 'primary' }: { iconType: string; color?: keyof typeof colors }) =>
  iconType === 'link' ? (
    <svg className="-mt-1.5" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.25 29.75L29.75 12.25"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 12.25H29.75V29.75"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : <IconMail color={color}/>;

const HoverItem = ({ index, type, label, href, hoveredIndex, setHoveredIndex, iconType }: HoverItemProps) => {
  const active = hoveredIndex === index;
  const color = active ? 'tertiary' : 'secondary';
  const colorClass = `text-${color}`;

  const icon = <Icon iconType={iconType} color={color} />;

  return (
    <div
      aria-hidden
      className="relative"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(0)}
    >
      <AnimatePresence>{active && <HoverBackground />}</AnimatePresence>
      {type === 'button' ? (
        <button className="relative flex items-center rounded-full p-2.5 px-8 py-4">
          <span className={cn('font-medium', colorClass)}>{label}</span>
          {icon}
        </button>
      ) : (
        <a className="relative flex items-center justify-center gap-1 px-8 py-4 font-light" href={href}>
          <span className={colorClass}>{label}</span>
          {icon}
        </a>
      )}
    </div>
  );
};

const email = 'your_email@example.com';
const items = [
  { type: 'button', label: 'Portfolio', iconType: 'link' },
  { type: 'link', label: 'Say Hi!', href: `mailto:${email}`, iconType: 'mail' }
];

export const HeroNavigation = ({ className }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={cn(
        'relative rounded-full border-2 [border-image-source:linear-gradient(to_top_right,#ffffff,#C9C9C9)_100]',
        className
      )}
    >
      <div className="relative flex items-center rounded-full p-2 text-3xl backdrop-blur-3xl">
        {items.map(({ type, ...rest }, idx) => (
          <HoverItem
            key={`${type}-${idx}`}
            type={type}
            index={idx}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            {...rest}
          />
        ))}
      </div>
    </motion.div>
  );
};