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
      <motion.span variants={wordAnimation}>Пишу</motion.span>{" "}
      <motion.span variants={wordAnimation}>крутые</motion.span>{" "}
      <motion.span variants={wordAnimation}>и</motion.span>{" "}
      <br className="block md:hidden" />
      <motion.span variants={wordAnimation}>яркие</motion.span>{" "}
      <br className="hidden md:block" />
      <motion.span variants={wordAnimation} className="text-gradient">
        веб приложения
      </motion.span>{" "}
      <br className="hidden md:block" />
      <br className="block md:hidden" />
      <motion.span variants={wordAnimation}>чтобы</motion.span>{" "}
      <motion.span variants={wordAnimation}>делать</motion.span>{" "}
      <motion.span variants={wordAnimation}>интернет</motion.span>{" "}
      <motion.span variants={wordAnimation}>интереснее</motion.span>
      <motion.span variants={wordAnimation}>.</motion.span>
    </motion.h1>
  );
};

export default Header;