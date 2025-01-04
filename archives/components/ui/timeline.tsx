import type { PropsWithColors } from '@/types';
import { cn } from '@/utils';
import { motion } from 'framer-motion';

export interface TimelineItemProps extends PropsWithColors {
  title: string | string[] | React.ReactNode | React.ReactNode[];
  active?: boolean;
  baseColor?: string;
  dateTime?: string;
  description?: string | string[] | React.ReactNode | React.ReactNode[];
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
      "relative flex items-start gap-4 pt-20 after:absolute after:left-[32px] after:top-36 after:h-full after:border-r-2 after:border-solid after:border-zinc-500 after:content-['']",
      className
    )}
  >
    <div
      className={cn(
        'flex max-h-16 min-h-16 min-w-16 max-w-16 items-center justify-center overflow-hidden rounded-full border-2 border-solid border-zinc-500'
      )}
      style={{ background: baseColor }}
    >
      {icon}
    </div>

    <div className="flex size-full max-h-full flex-col pt-1 text-justify">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0.3 }}
        className="text-dark-1 text-2xl font-bold"
      >
        {[title].flat().map((t) => (
          <>
            {t}
            <br />
          </>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0.3 }}
        className="text-dark-2 -mt-6 text-xl font-medium"
      >
        {dateTime}
      </motion.div>
      <div className="py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0.3 }}
          className="text-dark-2 text-justify text-lg"
        >
          {[description].flat().map((desc) => (
            <>
              {desc}
              <br />
            </>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);
