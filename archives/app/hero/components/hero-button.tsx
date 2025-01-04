import { AnimatedTooltip } from '@/components';
import type { Props } from '@/types';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const HeroButton = ({ className }: Props) => {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: [20, -5, 0] }}
      transition={{ delay: 0.5, duration: 0.25 }}
      className={className}
    >
      <AnimatedTooltip
        label="Hi There!"
        designation="Thanks for viewing my portfolio"
        className="z-50 min-w-36"
        onHoverChange={setHovering}
      >
        <a
          className="flex w-full gap-1 rounded-full border border-black bg-white px-4 py-2.5 text-center text-xl font-medium text-primary transition duration-200 hover:shadow-sketch"
          href="#about"
        >
          {hovering ? (
            <>
              <span>Click Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                pointerEvents="none"
              >
                <path d="M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162l-84-25q-13-54-56-88.5T480-640q-66 0-113 47t-47 113q0 57 34.5 100t88.5 56l25 84ZM821-60 650-231 600-80 480-480l400 120-151 50 171 171-79 79Z" />
              </svg>
            </>
          ) : (
            <>
              <span>Hover Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                pointerEvents="none"
              >
                <path d="M516-82q-9 2-18 2h-18q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v18q0 9-2 18l-78-24v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l24 78Zm305 22L650-231 600-80 480-480l400 120-151 50 171 171-79 79Z" />
              </svg>
            </>
          )}
        </a>
      </AnimatedTooltip>
    </motion.div>
  );
};
