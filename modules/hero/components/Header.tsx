import { motion } from "framer-motion";
import { useState } from "react";
import { useMouseVariant } from "@/modules/customMouse";
import { useScrollY } from "@/common/hooks/useScrollY";
import { useWindowSize } from "@/common/hooks/useWindowSize";

import { wordAnimation } from "../animations/headerAnimation";

const Header = () => {
  const scrollY = useScrollY();
  const { setMouseVariant } = useMouseVariant();

  const { height } = useWindowSize();

  const [startScroll, setStartScroll] = useState(0);

  const scale = Math.max((scrollY - startScroll) / 5000 + 0.2);

  let opacity = 1;

  if (scrollY > startScroll + height * 1.5) {
    opacity = 0.9 - (scrollY - (startScroll + height * 1.5)) / 400;
  }
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
      <br className="hidden md:block" />
      <motion.span variants={wordAnimation}>интереснее</motion.span>
      <motion.span variants={wordAnimation}>.</motion.span>
    </motion.h1>
  );
};

export default Header;