import type { PropsWithColors } from '@/types';
import { cn } from '@/utils';
import { motion } from 'framer-motion';

export interface TimelineItemProps extends PropsWithColors {
  title: string;
  active?: boolean;
  baseColor?: string;
  dateTime?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const TimelineItem = ({
  active = true,
  baseColor = 'tertiary',
  className,
  description,
  dateTime,
  icon,
  title
}: TimelineItemProps) => (
  <div
    className={cn(
      "relative flex items-start gap-4 pt-20 after:absolute after:left-[31px] after:top-36 after:h-full after:border-r-2 after:border-solid after:border-zinc-500 after:content-['']",
      className
    )}
  >
    <div className={cn('flex items-center rounded-full p-4')} style={{ background: baseColor }}>
      {icon}
    </div>

    <div className="flex size-full max-h-full flex-col pt-1 text-justify">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0.3 }}
        className="text-2xl font-bold text-dark-1"
      >
        {title}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0.3 }}
        className="text-xl font-medium text-dark-2"
      >
        {dateTime}
      </motion.span>
      <div className="py-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0.3 }}
          className="text-justify text-lg text-dark-2"
        >
          {description}
        </motion.p>
      </div>
    </div>
  </div>
);
