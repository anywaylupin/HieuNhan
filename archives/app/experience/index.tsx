import { JobList } from './components/job-list';
import type { Props } from '@/types';
import { cn } from '@/utils';
import { motion } from 'framer-motion';

export const Experience = ({ id, className }: Props) => {
  return (
    <section id={id} className={cn('w-section flex max-h-screen flex-col items-center bg-white px-20', className)}>
      <motion.div className="my-20">
        <h2 className="text-6xl text-primary">
          My <span className="text-tertiary">Work Experience</span>
        </h2>
      </motion.div>
      <JobList />
    </section>
  );
};
