import { motion } from "framer-motion";
import Image from "next/image";

import { useScrollY } from "@/common/hooks/useScrollY";
import { useMouseVariant } from "@/modules/customMouse";

import anonimkaImage from "@/public/images/anonimka.png";
import monopolyImage from "@/public/images/monopoly.png";
const scrollSpeed = 2.5;

const ProjectList = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrollY = useScrollY();

  if (typeof window === "undefined") {
    return null;
  }

  const goodScroll = Math.max(
    (scrollY - window.innerHeight * 1.15) * scrollSpeed,
    0
  );

  return (
    <>
      <motion.div
        style={{ width: "650vh", x: -goodScroll }}
        className="relative z-50 flex h-full items-center justify-between bg-black pl-20">
        <Image
          src={anonimkaImage}
          alt="Анонимный сервис для поиска собеседников"
          height={(window.innerHeight / 5) * 4}
          className="rounded-2xl"
        />
        <Image
          src={monopolyImage}
          alt="monopoly project"
          height={(window.innerHeight / 5) * 4}
          className="rounded-2xl"
        />
        <Image
          src={monopolyImage}
          alt="monopoly project"
          height={(window.innerHeight / 5) * 4}
          className="rounded-2xl"
        />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2
          className="header -mb-6 inline"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}>
          Остальные проекты на моём{" "}
          <span className="text-violet-600">
            <a
              href="https://github.com/Koakoalla"
              target="_black"
              rel="noreferrer"
              className="header inline cursor-none underline "
              onMouseEnter={setMouseVariant.button}
              onMouseLeave={setMouseVariant.default}>
              гитхабе.
            </a>
          </span>{" "}
        </h2>
      </div>
    </>
  );
};

export default ProjectList;
