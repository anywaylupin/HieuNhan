import { colors } from '@/theme';
import { motion } from 'framer-motion';

const HeroEclipse = () => (
  <div className="absolute bottom-0 flex h-full items-end justify-center overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0, originY: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <svg width="813" height="406" viewBox="0 0 813 406" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M812.673 406C542.08 406 271.487 406 0.894409 406C0.894409 181.833 182.617 0.110565 406.784 0.110565C630.95 0.110565 812.673 181.833 812.673 406Z"
          fill={colors['tertiary']}
        ></path>
      </svg>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0, originY: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      className="absolute -bottom-4 max-w-[400px]"
    >
      <img src="/images/me.png" alt="Me" />
    </motion.div>
  </div>
);

export default HeroEclipse;
