import { motion } from "framer-motion";
import { fadeInUp } from "../app/utils/animations";

const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 