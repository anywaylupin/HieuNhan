import { motion } from 'framer-motion';

export default function HeroExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="absolute right-16"
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
}
