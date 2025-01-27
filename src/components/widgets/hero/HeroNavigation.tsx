import { AnimatePresence, motion } from 'framer-motion';

import { MY_EMAIL } from '@/constants';
import { cn } from '@/utils';
import { colors } from '@/theme';
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

const NavIcon = ({ iconType, color }: { iconType: string; color: string }) =>
  iconType === 'link' ? (
    <svg className="-mt-1.5" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.25 29.75L29.75 12.25"
        stroke={colors['tertiary']}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 12.25H29.75V29.75"
        stroke={colors['tertiary']}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill={color}>
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
    </svg>
  );

const HoverItem = ({ index, type, label, href, hoveredIndex, setHoveredIndex, iconType }: HoverItemProps) => {
  const active = hoveredIndex === index;
  const color = active ? 'tertiary' : 'secondary';
  const colorClass = `text-${color}`;

  const icon = <NavIcon iconType={iconType} color={colors[color]} />;

  return (
    <div
      aria-hidden
      className="relative"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(0)}
    >
      <AnimatePresence>{active && <HoverBackground />}</AnimatePresence>
      {type === 'button' ? (
        <button className="relative flex  items-center rounded-full p-2.5 px-8 py-4">
          <span className={cn('font-medium', colorClass)}>{label}</span>
          {icon}
        </button>
      ) : (
        <a className="relative flex items-center justify-center gap-1 px-8 pt-3 pb-4 font-light" href={href}>
          <span className={cn('text-3xl pt-1', colorClass)}>{label}</span>
          {icon}
        </a>
      )}
    </div>
  );
};

const items = [
  { type: 'button', label: 'Portfolio', iconType: 'link' },
  { type: 'link', label: 'Say Hi!', href: `mailto:${MY_EMAIL}`, iconType: 'mail' }
];

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="rounded-full border-2 [border-image-source:linear-gradient(to_top_right,#ffffff,#C9C9C9)_100] absolute bottom-11"
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
}
