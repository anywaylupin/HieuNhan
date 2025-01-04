import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { LinkPreview } from './link-preview';
import type { Props } from '@/types';
import { cn } from '@/utils/cn';
import { colors } from '@/themes';
import { useInView } from '@/hooks';

export interface HoverEffectCardHeaderProps extends Props {
  icon?: React.ReactNode;
  items?: { link: string; icon?: React.ReactNode }[];
}

export interface HoverEffectProps extends Props {
  items: {
    title: string;
    description: string;
    header?: HoverEffectCardHeaderProps;
  }[];
}

export interface HoverEffectItemProps extends Props {
  item: {
    title: string;
    description: string;
    header?: HoverEffectCardHeaderProps;
  };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  zIndex: number;
}

export const HoverEffectItem = ({ item, index, hoveredIndex, setHoveredIndex, zIndex }: HoverEffectItemProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      aria-hidden
      key={`${item.title}-${index}`}
      className={cn('group relative flex size-full items-stretch p-2')}
      style={{ zIndex }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      ref={ref}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 block size-full rounded-3xl bg-tertiary bg-opacity-40"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
        className="relative z-10"
      >
        <Card>
          <CardHeader {...item.header} />
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </Card>
      </motion.div>
    </div>
  );
};

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [columns, setColumns] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumns = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = (containerRef.current.firstChild as HTMLDivElement)?.clientWidth || containerWidth;

        const calculatedColumns = Math.floor(containerWidth / itemWidth);
        setColumns(calculatedColumns);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);

    return () => {
      window.removeEventListener('resize', updateColumns);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn('relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3', className)}>
      {items.map((item, idx) => {
        const row = Math.floor(idx / columns);
        const col = idx % columns;
        const zIndex = row * columns + (columns - col);

        return (
          <HoverEffectItem
            key={`${item.title}-${idx}`}
            item={item}
            index={idx}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            zIndex={zIndex}
          />
        );
      })}
    </div>
  );
};

export const Card = ({ className, children }: Props) => (
  <div
    className={cn(
      'relative z-20 size-full overflow-hidden rounded-2xl border border-transparent bg-secondary p-4 group-hover:border-slate-700',
      className
    )}
    style={{ minHeight: '300px' }} // Increase the height of each card
  >
    <div className="relative z-50">
      <div className="flex flex-col gap-4 p-4">{children}</div>
    </div>
  </div>
);

export const CardHeader = ({
  className,
  icon = (
    <svg focusable="false" height="32px" viewBox="0 0 24 24" aria-hidden="true" fill={colors.primary} width="32px">
      <path d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 12H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z"></path>
    </svg>
  ),
  items
}: HoverEffectCardHeaderProps) => (
  <div className={cn('flex items-center justify-between', className)}>
    <div>{icon}</div>
    <div>
      {items?.map(
        (
          {
            link,
            icon = (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill={colors.primary}
                pointerEvents="none"
              >
                <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H580v-66.67h193.33v-520H186.67v520H380V-120H186.67Zm260 0v-271.33L370-314.67l-47.33-48L480-520l157.33 157.33-47.33 48-76.67-76.66V-120h-66.66Z" />
              </svg>
            )
          },
          idx
        ) => (
          <LinkPreview key={`${link}-${idx}`} url={link} className="group relative block h-full w-full p-2">
            {icon}
          </LinkPreview>
        )
      )}
    </div>
  </div>
);

export const CardTitle = ({ className, children }: Props) => (
  <h4 className={cn('text-2xl font-bold tracking-wide text-primary', className)}>{children}</h4>
);

export const CardDescription = ({ className, children }: Props) => (
  <p className={cn('text-md leading-relaxed tracking-wide text-primary', className)}>{children}</p>
);
