import type { Props, PropsWithColors } from '@/types';

import Image from 'next/image';
import { cn } from '@/utils';
import { colors } from '@/themes';
import { motion } from 'framer-motion';

export * from './hero-button';
export * from './hero-navigation';

export const HeroTitle = ({ className }: Props) => (
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: [20, -5, 0] }}
    transition={{ delay: 0.25, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
    className={cn('text-center text-8xl font-semibold text-primary', className)}
  >
    <br /> I&apos;m <span className="text-tertiary">Hiếu Nhân Nguyễn</span>,
    <br />
  </motion.h1>
);

export const HeroReview = ({ className }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className={cn('max-w-80', className)}
  >
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.135 17.445H5.1C5.22 10.44 6.6 9.285 10.905 6.735C11.4 6.435 11.565 5.805 11.265 5.295C10.98 4.8 10.335 4.635 9.84 4.935C4.77 7.935 3 9.765 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
        fill={colors.primary}
      />
      <path
        d="M28.365 17.445H21.33C21.45 10.44 22.83 9.285 27.135 6.735C27.63 6.435 27.795 5.805 27.495 5.295C27.195 4.8 26.565 4.635 26.055 4.935C20.985 7.935 19.215 9.765 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
        fill={colors.primary}
      />
    </svg>
    <p className="text-xl font-medium text-primary">
      I adopted the mission of contributing to the development and closing the gap of inequality among people.
    </p>
  </motion.div>
);

export const HeroExperience = ({ className }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className={className}
  >
    <p className="text-end text-primary">
      <span className="text-4xl font-bold">
        Undergraduate Student
        <br />
        in Economics
      </span>
      <br />
      <span className="text-xl">Fulbright University Vietnam</span>
    </p>
  </motion.div>
);

export const HeroEclipse = ({ color = 'tertiary', className }: PropsWithColors) => (
  <div className={cn(className, 'flex h-full items-end justify-center overflow-hidden')}>
    <motion.div
      initial={{ opacity: 0, scale: 0, originY: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <svg width="813" height="406" viewBox="0 0 813 406" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M812.673 406C542.08 406 271.487 406 0.894409 406C0.894409 181.833 182.617 0.110565 406.784 0.110565C630.95 0.110565 812.673 181.833 812.673 406Z"
          fill={colors[color]}
        />
      </svg>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0, originY: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      className="absolute -bottom-4"
    >
      <Image src="/me.png" width="400" height="400" alt="Me" />
    </motion.div>
  </div>
);
