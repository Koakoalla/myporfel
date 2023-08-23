import { useMouseVariant } from "../customMouse";
import AboutHeader from "./components/Header";
import Skills from "./components/Skills";

export { AboutHeader };

const AboutSkills = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center md:mt-36">
      <p
        className="header mt-72 w-1/2 text-center text-6xl"
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}>
        Для своих веб-приложений использую современный стек технологий,
        позволяющий раскрыть весь потенциал frontend разработки.
      </p>
      <Skills />
    </div>
  );
};

export default AboutSkills;
