import { useMouseVariant } from "../../customMouse";
import AboutHeader from "../../hero";
import Skills from "../components/Skills";

const About = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden pt-36">
      <AboutHeader />
      <p
        className="header mt-96 w-1/2 text-center text-6xl"
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}>
        Для своих веб-приложений использую современный стек технологий,
        позволяющий раскрыть весь потенциал frontend-разработки.
      </p>

      <Skills />
    </div>
  );
};

export default About;
