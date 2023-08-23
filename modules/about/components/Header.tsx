import { motion } from "framer-motion";

import { useScrollY } from "@/common/hooks/useScrollY";
import { useMouseVariant } from "@/modules/customMouse";
import { useWindowSize } from "@/common/hooks/useWindowSize";

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrolled = useScrollY();

  const { width } = useWindowSize();

  const mobile = width < 768;

  const scale = Math.max(
    0,
    (mobile ? 1.3 : 1) - scrolled / (mobile ? 1400 : 3500)
  );

  return (
    <div className="-mt-24 flex h-full w-full items-center justify-center overflow-hidden sm:mt-24">
      <motion.h2
        className="mt-2 h-min whitespace-nowrap text-center text-[10vw]"
        style={{
          scale,
        }}
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}>
        Frontend developer
      </motion.h2>
    </div>
  );
};

export default AboutHeader;
