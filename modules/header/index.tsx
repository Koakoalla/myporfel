import { useMouseVariant } from "@/modules/customMouse";

const Header = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden p-7">
      <div>
        <p className="mb-5 text-lg text-lime-500 sm:text-xl">
          Koakoalla - React/Next.js разработчик
        </p>
        <h1
          className="header"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}>
          <br />
          Cоздаю крутые <span className="text-green-600">web-приложения</span>.
        </h1>

        <p className="mt-10 text-lg text-lime-500 sm:text-xl">
          Привет, я Koakoalla, Next.js разработчик и я создаю яркие веб-
          приложения
        </p>
      </div>
    </div>
  );
};

export default Header;
