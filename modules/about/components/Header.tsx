import { motion } from "framer-motion";

import ScrollOpacity from "@/common/components/ScrollOpacity";
import { useMouseVariant } from "@/modules/customMouse";

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <ScrollOpacity>
        <motion.h2 className="header h-min text-center">
          Привет, <br />я Koakoalla &#8212;{" "}
          <span className="text-gradient">Frontend Developer,</span> <br />{" "}
          создающий
          <br />
          <span className="text-gradient">web</span> приложения.
        </motion.h2>
      </ScrollOpacity>
    </div>
  );
};

export default AboutHeader;
