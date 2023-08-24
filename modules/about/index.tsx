import AboutHeader from "./components/Header";
import Skills from "./components/Skills";

export { AboutHeader };

const AboutSkills = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Skills />
    </div>
  );
};

export default AboutSkills;
