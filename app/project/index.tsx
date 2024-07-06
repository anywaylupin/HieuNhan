import { HoverEffect, type HoverEffectProps } from '@/components';
import type { Props } from '@/types';
import { cn } from '@/utils';
import { motion } from 'framer-motion';

export const projects: HoverEffectProps['items'] = [
  {
    title: 'Project Alpha',
    description: 'A creative solution aimed at changing the way we use technology.',
    header: {
      items: [{ link: 'https://example.com' }]
    }
  },
  {
    title: 'Project Beta',
    description: 'A modern platform that offers great performance and can easily grow with your needs.',
    header: {
      items: [{ link: 'https://example.com' }]
    }
  },
  {
    title: 'Project Gamma',
    description: 'An exciting project focused on improving user experience with smart data insights.',
    header: {
      items: [{ link: 'https://example.com' }]
    }
  },
  {
    title: 'Project Delta',
    description: 'A forward-thinking project that uses AI to help businesses grow and innovate.',
    header: {
      items: [{ link: 'https://example.com' }]
    }
  },
  {
    title: 'Project Epsilon',
    description: 'A top-notch system designed to make operations smoother and more efficient.',
    header: {
      items: [{ link: 'https://example.com' }]
    }
  },
  {
    title: 'Project Zeta',
    description: 'An innovative project that combines the latest tech to deliver outstanding results.',
    header: {
      items: [{ link: 'https://example.com' }]
    }
  }
];

export const Project = ({ id, className }: Props) => (
  <section
    id={id}
    className={cn(
      'flex max-h-screen w-section flex-col items-center rounded-bl-3xl rounded-br-3xl bg-white px-20 pb-40',
      className
    )}
  >
    <motion.div className="mb-20 flex flex-col gap-4 text-center">
      <h2 className="text-6xl text-primary">
        My <span className="text-tertiary">Projects</span>
      </h2>
      <span className="text-xl">
        Hover over the icons in the top right corner for a preview, and click to learn more about each project.
      </span>
    </motion.div>
    <div className="px-10">
      <HoverEffect items={projects} />
    </div>
  </section>
);
