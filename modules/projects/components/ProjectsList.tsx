import ScrollOpacity from "@/common/components/ScrollOpacity";
import { useMouseVariant } from "@/modules/customMouse";

import Project from "./Project";

const ProjectsList = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="mt-36 flex h-full w-full items-start justify-center md:mt-0 md:items-center">
      <ScrollOpacity>
        <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          <Project
            title="Анонимка"
            description="Анонимная чат рулетка для поиска собеседников. Проект написан на Next.js c использованием технологии вебсокетов."
            github="https://github.com/Koakoalla/chatroulettka"
            demo=""
          />
          <Project
            title="Монополия"
            description="Популярная игра в монополию в компании. Проект написан на Next. js c использованием технологии framer-motion."
            github="https://github.com/Koakoalla/Monopoly-game"
            demo="https://monopoly-game-3xq6.vercel.app"
          />
          <Project
            title="Порфтолио"
            description="Веб-приложение моего портфолио. Проект написан на Next.js с использованием palarallax и framer-motion"
            github="https://github.com/Koakoalla/myporfel"
            demo="https://portfolio-koakoalla.vercel.app/"
          />
        </div>

        <p className="mt-10 text-center text-2xl">
          Больше информации на{" "}
          <a
            className="text-gradient cursor-none"
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href="https://github.com/Koakoalla"
            target="_blank"
            rel="noreferrer">
            гитхабе
          </a>
          .
        </p>
      </ScrollOpacity>
    </div>
  );
};

export default ProjectsList;
