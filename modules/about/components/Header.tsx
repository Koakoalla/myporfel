import { motion } from "framer-motion";

import { useScrollY } from "@/common/hooks/useScrollY";
import { useMouseVariant } from "@/modules/customMouse";

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrolled = useScrollY();

  return (
    <motion.h2
      className="mt-2 h-min whitespace-nowrap text-center text-6xl"
      style={{
        fontSize: `calc(max(12vw, 13vh) - ${scrolled / 10}px)`,
      }}
      onMouseEnter={setMouseVariant.text}
      onMouseLeave={setMouseVariant.default}>
      Frontend developer
    </motion.h2>
  );
};

export default AboutHeader;
