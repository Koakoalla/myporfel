import { motion } from "framer-motion";
import { useState } from "react";

import { useScrollY } from "@/common/hooks/useScrollY";
import { useMouseVariant } from "@/modules/customMouse";
import { useWindowSize } from "@/common/hooks/useWindowSize";

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrollY = useScrollY();

  const { height } = useWindowSize();
  const [startScroll, setStartScroll] = useState(0);

  const scale = Math.max((scrollY - startScroll) / 5000 + 0.2);

  let opacity = 1;

  if (scrollY > startScroll + height * 1.5) {
    opacity = 0.9 - (scrollY - (startScroll + height * 1.5)) / 400;
  }
  return (
    <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center px-10">
      <motion.p
        className="pointer-events-auto w-max text-center"
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}
        style={{ scale, fontSize: "max(10vw, 15vh)", opacity }}>
        and more.
      </motion.p>
    </div>
  );
};

export default AboutHeader;
