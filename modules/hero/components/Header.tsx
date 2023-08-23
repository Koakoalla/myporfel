import { motion } from "framer-motion";

import { useMouseVariant } from "@/modules/customMouse";

import { wordAnimation } from "../animations/headerAnimation";

const Header = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <motion.h1
      className="header text-center"
      onMouseEnter={setMouseVariant.text}
      onMouseLeave={setMouseVariant.default}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.05,
      }}>
      <motion.span variants={wordAnimation}></motion.span> <br />
      <motion.span variants={wordAnimation}></motion.span> <br />
      <motion.span variants={wordAnimation} className="text-gradient">
        Frontend
      </motion.span>{" "}
      <motion.span variants={wordAnimation}>разработка</motion.span>{" "}
    </motion.h1>
  );
};

export default Header;
