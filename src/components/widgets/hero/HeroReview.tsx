import { colors } from '@/theme';
import { motion } from 'framer-motion';

const HeroExperience = () => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="max-w-80 absolute left-0 ml-16"
  >
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.135 17.445H5.1C5.22 10.44 6.6 9.285 10.905 6.735C11.4 6.435 11.565 5.805 11.265 5.295C10.98 4.8 10.335 4.635 9.84 4.935C4.77 7.935 3 9.765 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
        fill={colors.primary}
      ></path>
      <path
        d="M28.365 17.445H21.33C21.45 10.44 22.83 9.285 27.135 6.735C27.63 6.435 27.795 5.805 27.495 5.295C27.195 4.8 26.565 4.635 26.055 4.935C20.985 7.935 19.215 9.765 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
        fill={colors.primary}
      ></path>
    </svg>
    <p className="text-xl font-medium text-primary">
      I adopted the mission of contributing to the development and closing the gap of inequality among people.
    </p>
  </motion.div>
);

export default HeroExperience;