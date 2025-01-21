import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [20, -5, 0] }}
      transition={{ delay: 0.25, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      className="mt-[-2vh] text-center text-8xl font-semibold text-primary"
    >
      <br /> I&apos;m <span className="text-tertiary">Hiếu Nhân Nguyễn</span>,
      <br />
    </motion.h1>
  );
}
