import type { Props } from '@/types';
import { motion } from 'framer-motion';

export const Credits = (props: Props) => {
  return (
    <motion.div {...props}>
      <div className="py-10 text-center text-2xl">
        <span>Built by </span>
        <a
          href="https://github.com/anywaylupin"
          target="_blank"
          className="bg-gradient-to-br from-green-500 to-cyan-500 bg-clip-text font-bold text-transparent"
        >
          anywaylupin
        </a>
      </div>
    </motion.div>
  );
};

export default Credits;
