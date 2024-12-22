import { motion } from "framer-motion";
import HeaderLogo from "../../Assets/headerLogo.png";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex items-center gap-2"
    >
      {/* Animated Logo Mark */}
      <img src={HeaderLogo} alt="HeaderLogo" height={60} width={60} />

      {/* Text */}
      <div className="flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-900"
        >
          Ascent Events
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-sm font-playfair text-gray-600 font-medium -mt-1"
        >
          ELEVATE THE CELEBRATION
        </motion.span>
      </div>
    </motion.div>
  );
}
