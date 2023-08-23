import { motion } from "framer-motion";

import { itemVariant } from "../animations/scrollAnimation";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex w-full flex-1 flex-col items-center justify-around"
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }}
      initial="hidden"
      animate="visible">
      <motion.div
        className="h-[3px] w-[80%] bg-red-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[50%] bg-red-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[35%] bg-red-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[25%] bg-red-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[18%] bg-red-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[12%] bg-red-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[7%] bg-red-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[4%] bg-red-500"
        variants={itemVariant}
      />
    </motion.div>
  );
};

export default ScrollIndicator;
